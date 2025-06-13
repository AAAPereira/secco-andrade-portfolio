// src/app/api/limpar-visitors/route.ts

import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { dataInicial, dataFinal } = await req.json();

    if (!dataInicial || !dataFinal) {
      return NextResponse.json({ error: "Datas inválidas" }, { status: 400 });
    }

    const parseDate = (str: string) => {
      if (str.includes("-")) return new Date(str);
      const [dia, mes, ano] = str.split("/");
      return new Date(`${ano}-${mes}-${dia}T00:00:00`);
    };

    const dataInicio = parseDate(dataInicial);
    const dataFim = parseDate(dataFinal);
    dataFim.setHours(23, 59, 59, 999);

    const chaves = await kv.keys("avaliacao:*");
    const removidos: string[] = [];

    for (const chave of chaves) {
      const valor = await kv.get(chave);
      if (!valor || typeof valor !== "object" || !("timestamp" in valor)) {
        console.warn(`⚠️ Registro inválido ignorado: ${chave}`);
        continue;
      }

      const dataRegistro = new Date(valor.timestamp);
      if (dataRegistro >= dataInicio && dataRegistro <= dataFim) {
        await kv.del(chave);
        removidos.push(chave);
      }
    }

    return NextResponse.json({
      message: `Limpeza concluída. ${removidos.length} registros removidos.`,
      chavesRemovidas: removidos,
    });
  } catch (err) {
    console.error("❌ Erro ao limpar visitantes:", String(err));
    return NextResponse.json({ error: "Erro interno ao limpar visitantes." }, { status: 500 });
  }
}
