// src/app/api/send-token/route.ts

import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const allowed = ["fernandre6973@gmail.com", "andrade_pereira@hotmail.com"];
  if (!allowed.includes(email.toLowerCase().trim())) {
    return NextResponse.json({ error: "E-mail não autorizado." }, { status: 403 });
  }

  const token = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = Date.now() + 1 * 60 * 1000; // 1 minuto

  await kv.set(`token:${email}`, JSON.stringify({ token, expiresAt }), { ex: 300 });

  console.log("GMAIL_USER:", process.env.GMAIL_USER);
  console.log("GMAIL_PASS:", process.env.GMAIL_PASS);

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

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado:", info);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      {
        error: "Falha ao enviar o token.",
        details: error.message || String(error),
      },
      { status: 500 }
    );
  }
}
