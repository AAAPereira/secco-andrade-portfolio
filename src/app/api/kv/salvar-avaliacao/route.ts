// src/app/api/kv/salvar-avaliacao/route.ts

import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import { appendFile, access, writeFile } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email, nota, rating } = data;

    if (!email || !nota || !rating) {
      console.log("❌ Dados incompletos recebidos:", data);
      return NextResponse.json({ error: 'Dados incompletos.' }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const kvKey = `avaliacao:${timestamp}-${email}`;
    const payload = { email, nota, rating, timestamp };

    // 1. Salva no KV
    console.log("🧠 Enviando para KV:", kvKey, payload);
    await kv.set(kvKey, payload);
    console.log("✅ KV gravado com sucesso!");

    // 2. Salva no CSV com cabeçalho se não existir
    const csvLine = `${timestamp};${email};${nota};${rating}\n`;
    const csvPath = path.join(process.cwd(), 'public', 'excel', 'salvar-avaliacao', 'avaliacoes.csv');

    try {
      await access(csvPath, constants.F_OK).catch(async () => {
        await writeFile(csvPath, 'Avaliacoes dos Visitantes\n', 'utf8');
      });

      await appendFile(csvPath, csvLine, 'utf8');
      console.log("📄 CSV salvo em public/excel/salvar-avaliacao:", csvLine.trim());
    } catch (csvErr) {
      console.error("❌ Erro ao gravar CSV:", csvErr);
    }

    return NextResponse.json({ message: 'Avaliação registrada com sucesso!' });
  } catch (err: any) {
    console.error('💥 Erro ao salvar avaliação:', err);
    return NextResponse.json({ error: 'Erro interno ao salvar avaliação.' }, { status: 500 });
  }
}
