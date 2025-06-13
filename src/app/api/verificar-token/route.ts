
// src/app/api/verificar-token/route.ts

import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, token } = await req.json();

  const raw = await kv.get<string>(`token:${email}`);
  if (!raw) {
    return NextResponse.json({ error: "Token não encontrado." }, { status: 404 });
  }

  const { token: storedToken, expiresAt } = raw;
  const expired = Date.now() > expiresAt;

  if (expired) {
    return NextResponse.json({ error: "Token expirado." }, { status: 401 });
  }

  if (token !== storedToken) {
    return NextResponse.json({ error: "Token incorreto." }, { status: 401 });
  }

  await kv.del(`token:${email}`);
  return NextResponse.json({ success: true });
}
