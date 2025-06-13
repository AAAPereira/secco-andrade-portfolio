// src/app/login/page.tsx

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [emailEnviado, setEmailEnviado] = useState(false);
  const router = useRouter();

  const allowedEmails = [
    "fernandre6973@gmail.com",
    "andrade_pereira@hotmail.com",
  ];

  const enviarCodigo = async () => {
    const emailTrimmed = email.trim().toLowerCase();

    if (!allowedEmails.includes(emailTrimmed)) {
      setError("E-mail não autorizado. Acesso permitido somente a e-mails cadastrados.");
      return;
    }

    setError("");

    try {
      const res = await fetch("/api/send-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailTrimmed }),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || "Erro ao enviar token.");
        return;
      }

      localStorage.setItem("email", emailTrimmed);
      setSuccessMessage("✅ Token enviado com sucesso para seu e-mail!");
      setEmailEnviado(true); // ✅ Faz a mensagem aparecer!

      setTimeout(() => {
        router.push("/verificar-token");
      }, 2000);

    } catch (err) {
      console.error("Erro geral:", err);
      setError("Erro ao conectar com o servidor.");
    }
  };

const handleInputFocus = () => {
  const hora = new Date().getHours();

  let saudacaoPt = "Olá! Seja bem-vindo à página de login. Entre com seu e-mail corporativo para receber o token de acesso.";
  let saudacaoEn = "Hello! Welcome to the login page. Enter your corporate email to receive your access token.";

  if (hora >= 5 && hora < 12) {
    saudacaoPt = "Bom dia! " + saudacaoPt;
    saudacaoEn = "Good morning! " + saudacaoEn;
  } else if (hora >= 12 && hora < 18) {
    saudacaoPt = "Boa tarde! " + saudacaoPt;
    saudacaoEn = "Good afternoon! " + saudacaoEn;
  } else {
    saudacaoPt = "Boa noite! " + saudacaoPt;
    saudacaoEn = "Good evening! " + saudacaoEn;
  }

  const utterPt = new SpeechSynthesisUtterance(saudacaoPt);
  utterPt.lang = "pt-BR";
  utterPt.rate = 0.98;
  utterPt.pitch = 1.1;

  const utterEn = new SpeechSynthesisUtterance(saudacaoEn);
  utterEn.lang = "en-US";
  utterEn.rate = 1.0;
  utterEn.pitch = 1.0;

  if (speechSynthesis && speechSynthesis.speak) {
    speechSynthesis.speak(utterPt);
    speechSynthesis.speak(utterEn);
  }
};


  return (
    <>
      <div className="col-span-12 md:col-span-6 md:col-start-4 flex flex-col items-center justify-center mt-20 text-white">
        {/* Box central */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow-xl w-full max-w-sm text-center border border-theme-primary">
          <Image
            src="/media/photos/fundo_tela_login.png"
            alt="Logo de Segurança"
            width={360}
            height={360}
            className="mx-auto mb-6 rounded-lg"
          />

          <h2 className="text-theme-primary font-semibold mb-2">Login de Acesso</h2>

          <input
            type="email"
            placeholder="Seu e-mail corporativo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleInputFocus}
            className="w-full p-2 mb-2 text-white rounded border border-zinc-600 focus:outline-none"
          />

          {/* ✅ MENSAGEM DE TOKEN ENVIADO */}
          {emailEnviado && (
            <p className="text-theme-primary mb-2 text-sm">
              Foi enviado em seu email um token de acesso
            </p>
          )}

          <button
            onClick={enviarCodigo}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 rounded button-acessar-neon button-theme"
            style={{
              background: "var(--theme-button)",
              boxShadow: "0 0 10px var(--theme-primary)",
            }}
          >
            Enviar Código
          </button>
        </div>
      </div>
    </>
  );
}