import { NextRequest, NextResponse } from "next/server";
import { head } from "@vercel/blob";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { email, token } = await req.json();

    if (!email || !token) {
      return NextResponse.json(
        { valid: false, error: "Email e token são obrigatórios" },
        { status: 400 }
      );
    }

    const emailNormalizado = email.toLowerCase().trim();
    const key = `tokens/${emailNormalizado}.json`;

    // Usa head() para obter as informações do blob, incluindo a URL
    const blob = await head(key);

    // Faz o fetch direto da URL do blob
    const res = await fetch(blob.url);

    if (!res.ok) {
      throw new Error("Falha ao ler token do blob.");
    }

    const data = await res.json();

    const agora = Date.now();

    if (data.token === token && agora <= data.expiresAt) {
      return NextResponse.json({ valid: true });
    } else if (agora > data.expiresAt) {
      return NextResponse.json(
        { valid: false, reason: "Token expirado." },
        { status: 403 }
      );
    } else {
      return NextResponse.json(
        { valid: false, reason: "Token inválido." },
        { status: 403 }
      );
    }
  } catch (err: any) {
    console.error("Erro ao verificar token:", err);
    return NextResponse.json(
      { valid: false, error: err.message || String(err) },
      { status: 500 }
    );
  }
}