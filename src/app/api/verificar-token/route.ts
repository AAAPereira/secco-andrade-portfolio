// src/app/api/verificar-token/route.ts

import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, token } = await req.json();

    if (!email || !token) {
      return NextResponse.json(
        { error: "E-mail e token são obrigatórios" },
        { status: 400 }
      );
    }

    const raw = await kv.get(`token:${email}`);

    if (
      !raw ||
      typeof raw !== "object" ||
      !("token" in raw) ||
      !("expiresAt" in raw)
    ) {
      return NextResponse.json(
        { error: "Token não encontrado. Solicite um novo código." },
        { status: 404 }
      );
    }

    const { token: storedToken, expiresAt } = raw as {
      token: string;
      expiresAt: number;
    };

    const expired = Date.now() > expiresAt;

    if (expired) {
      await kv.del(`token:${email}`);
      return NextResponse.json(
        { error: "Token expirado. Solicite um novo código." },
        { status: 401 }
      );
    }

    if (token !== storedToken) {
      return NextResponse.json(
        { error: "Token inválido. Verifique o código digitado." },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Token válido. Acesso autorizado." });
  } catch (error) {
    console.error("Erro na verificação de token:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
