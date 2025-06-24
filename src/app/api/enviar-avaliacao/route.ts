// src/app/api/enviar-avaliacao/route.ts

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { email, rating } = await req.json();

  if (!email || typeof rating !== "number") {
    return NextResponse.json({ error: "Dados inválidos." }, { status: 400 });
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
    subject: "Nova avaliação recebida - CV DIGITAL",
    text: `Email: ${email}\nNota: ${rating} estrelas`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao enviar e-mail de avaliação:", error);
    return NextResponse.json({ error: "Falha ao enviar avaliação." }, { status: 500 });
  }
}
