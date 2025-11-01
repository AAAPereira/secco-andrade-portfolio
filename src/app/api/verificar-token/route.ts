import { NextRequest, NextResponse } from "next/server";
import { getDownloadUrl } from "@vercel/blob";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const { email, token } = await req.json();
  const emailNormalizado = email.toLowerCase().trim();
  const key = `tokens/${emailNormalizado}.json`;

  try {
    // Em vez de usar fetch(url), use head() para testar existência
    // e pegue os dados diretamente do blob se estiver no Vercel
    // Se for local, você precisa substituir por outro storage
    const url = await getDownloadUrl(key);

    // Se estiver local, url é apenas key -> fetch não vai funcionar
    if (!url || !url.startsWith("https://")) {
      throw new Error("Token não encontrado ou URL inválida. Use Vercel Blob no ambiente correto.");
    }

    const res = await fetch(url);
    if (!res.ok) throw new Error("Falha ao ler token.");
    const data = await res.json();

    const agora = Date.now();
    if (data.token === token && agora <= data.expiresAt) {
      return NextResponse.json({ valid: true });
    } else if (agora > data.expiresAt) {
      return NextResponse.json({ valid: false, reason: "Token expirado." }, { status: 403 });
    } else {
      return NextResponse.json({ valid: false, reason: "Token inválido." }, { status: 403 });
    }
  } catch (err: any) {
    console.error("Erro ao verificar token:", err);
    return NextResponse.json({ valid: false, error: err.message || String(err) }, { status: 500 });
  }
}
