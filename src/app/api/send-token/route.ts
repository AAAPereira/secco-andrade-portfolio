// src/app/api/send-token/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { put } from "@vercel/blob";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  const emailNormalizado = email.toLowerCase().trim();
  const dominio = emailNormalizado.split("@")[1];

  const blocosProibidos = [
    "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "msn.com", "live.com",
    "aol.com", "icloud.com", "protonmail.com", "zoho.com", "mail.com", "gmx.com",
    "inbox.com", "me.com", "yandex.com", "fastmail.com", "tutanota.com", "hushmail.com",
    "pm.me", "uol.com", "uol.com.br", "bol.com", "bol.com.br", "terra.com", "terra.com.br",
    "ig.com", "ig.com.br", "zipmail.com", "zipmail.com.br", "globo.com", "globo.com.br",
    "oi.com", "oi.com.br", "r7.com", "r7.com.br", "pop.com", "pop.com.br", "ibest.com",
    "ibest.com.br", "folha.com", "folha.com.br", "superig.com", "superig.com.br",
    "brturbo.com", "brturbo.com.br", "itelefonica.com", "itelefonica.com.br",
    "igmail.com", "igmail.com.br", "10minutemail.com", "tempmail.com", "guerrillamail.com",
    "mailinator.com", "dispostable.com", "yopmail.com", "trashmail.com", "fakeinbox.com",
    "maildrop.cc", "getnada.com"
  ];

  const excecoesPermitidas = [
    "fernandre6973@gmail.com",
    "andrade_pereira@hotmail.com"
  ];

  const ehDominioProibido = blocosProibidos.includes(dominio);
  const ehExcecao = excecoesPermitidas.includes(emailNormalizado);

  if (ehDominioProibido && !ehExcecao) {
    return NextResponse.json({ error: "E-mail não autorizado." }, { status: 403 });
  }

  // Token temporário
  const token = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 1 * 60 * 1000; // 1 minuto

  try {
    // Salva o token no Blob
    const key = `tokens/${emailNormalizado}.json`;
    const data = JSON.stringify({ token, expiresAt });
    console.log("Key:", key);
    console.log("Data:", data);
    await put(key, data, { access: "public", contentType: "application/json", allowOverwrite: true });
  } catch (err) {
    console.error("Falha ao salvar token no Blob:", err);
    return NextResponse.json({ error: "Falha ao salvar o token." }, { status: 500 });
  }

  // Configura envio de e-mail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Seu código de acesso CV DIGITAL",
    text: `Olá! Seu código de acesso é: ${token}\n\nEste código expira em 1 minuto.`,
  };

    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    console.log("GMAIL_PASS existe:", Boolean(process.env.GMAIL_PASS));
    console.log("GMAIL_PASS tamanho:", process.env.GMAIL_PASS?.length);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado:", info);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Falha ao enviar o token.", details: error.message || String(error) },
      { status: 500 }
    );
  }
}
