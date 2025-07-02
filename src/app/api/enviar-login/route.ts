// src/app/api/enviar-login/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: "Alerta de Login no CV DIGITAL",
    text: `Alguém acessou o site com o e-mail: ${email}\nData/Hora: ${new Date().toLocaleString("pt-BR")}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail de login:", error);
    return NextResponse.json({ error: "Falha ao enviar notificação." }, { status: 500 });
  }
}
