export const runtime = 'nodejs';

import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');

import { kv } from '@vercel/kv';

export async function GET() {
  try {
    const ts = Date.now();
    await kv.set('healthz', ts, { ex: 60 }); // escreve na KV
    const got = await kv.get('healthz');     // lê da KV
    return new Response(JSON.stringify({ ok: true, set: ts, got }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (err: any) {
    console.error('[kv/healthz] ERROR:', err?.cause?.code, err?.message || err);
    return new Response(JSON.stringify({ ok: false, error: err?.message || String(err) }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }
}
