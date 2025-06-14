// src/app/api/limpar-visitors/route.ts

import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { dataInicial, dataFinal } = await req.json();

    if (!dataInicial || !dataFinal) {
      return NextResponse.json(
        { error: "Datas inválidas" },
        { status: 400 }
      );
    }

    const dataInicio = new Date(dataInicial);
    const dataFim = new Date(dataFinal);
    dataFim.setHours(23, 59, 59, 999); // Garante pegar até o fim do dia

    const chaves = await kv.keys("visita:*");
    const removidos: string[] = [];

    for (const chave of chaves) {
      const valor = await kv.get(chave);

      if (
        valor &&
        typeof valor === "object" &&
        "timestamp" in valor &&
        typeof (valor as { timestamp: unknown }).timestamp === "string"
      ) {
        const dataRegistro = new Date(
          (valor as { timestamp: string }).timestamp
        );

        if (dataRegistro >= dataInicio && dataRegistro <= dataFim) {
          await kv.del(chave);
          removidos.push(chave);
        }
      }
    }

    return NextResponse.json({
      message: `Limpeza concluída. ${removidos.length} registros removidos.`,
      removidos,
    });
  } catch (error) {
    console.error("Erro ao limpar registros:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
}
