// src/app/api/kv/avaliacoes/route.ts

import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Busca todas as chaves que começam com 'avaliacao:'
    const keys = await kv.keys('avaliacao:*');

    const avaliacoes = await Promise.all(
      keys.map(async (key) => {
        const data = await kv.get(key);
        return data;
      })
    );

    return NextResponse.json({ avaliacoes });
  } catch (err: any) {
    console.error('Erro ao buscar avaliacoes do KV:', err);
    return NextResponse.json({ error: 'Erro ao buscar dados.' }, { status: 500 });
  }
}
