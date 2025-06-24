// src/app/api/limpar-visitors/route.ts

import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { dataInicial, dataFinal } = await req.json();

    if (!dataInicial || !dataFinal) {
      return NextResponse.json(
        { error: "Datas inválidas. Informe dataInicial e dataFinal." },
        { status: 400 }
      );
    }

    const dataInicio = new Date(dataInicial);
    const dataFim = new Date(dataFinal);
    dataFim.setHours(23, 59, 59, 999); // Inclui o dia todo

    const chaves = await kv.keys("avaliacao:*"); // 🔥 Verificar se o prefixo está correto
    const removidos: string[] = [];

    if (!chaves || chaves.length === 0) {
      return NextResponse.json({
        message: "Nenhuma chave encontrada com o prefixo 'visita:'.",
      });
    }

    for (const chave of chaves) {
      const valor = await kv.get(chave);

      if (!valor || typeof valor !== "object") continue;

      const registro = valor as { timestamp?: string | number };

      if (!registro.timestamp) continue;

      const dataRegistro =
        typeof registro.timestamp === "string"
          ? new Date(registro.timestamp)
          : new Date(Number(registro.timestamp));

      if (dataRegistro >= dataInicio && dataRegistro <= dataFim) {
        await kv.del(chave);
        removidos.push(chave);
      }
    }

    return NextResponse.json({
      message: `Limpeza concluída. ${removidos.length} registros removidos.`,
      removidos,
    });
  } catch (error) {
    console.error("Erro ao limpar registros:", error);
    return NextResponse.json(
      { error: "Erro interno ao processar a solicitação" },
      { status: 500 }
    );
  }
}
