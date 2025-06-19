// src/app/login/page.tsx

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
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
      setError("⛔ E-mail não autorizado. Acesso permitido somente a e-mails cadastrados.");
      return;
    }

    setError("");
    setSuccessMessage("");

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
      setEmailEnviado(true);

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

    if (speechSynthesis) {
      speechSynthesis.speak(utterPt);
      speechSynthesis.speak(utterEn);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Image
            src="/media/photos/icone-security.webp"
            alt="Logo da Segurança"
            width={400}
            height={400}
            priority
            className="mx-auto mb-4 animate-pulse logo-neon"
            style={{ filter: "drop-shadow(var(--logo-glow))" }}
          />
          <h1 className="text-xl text-theme-primary font-bold">
            Carregando Página Login...
          </h1>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center mt-24 w-full">
      <div className="bg-zinc-900 p-6 rounded-lg shadow-xl w-full max-w-sm text-center border border-theme-primary">
        <Image
          src="/media/photos/fundo_tela_login.webp"
          alt="Fundo Login"
          width={360}
          height={360}
          className="mx-auto mb-6 rounded-lg"
        />
        <h2 className="text-theme-primary font-bold mb-4 text-xl">
          Login de Acesso
        </h2>

        <input
          type="email"
          placeholder="Seu e-mail corporativo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleInputFocus}
          className="w-full p-2 mb-6 text-white rounded border border-zinc-600 focus:outline-none bg-transparent"
        />

        {emailEnviado && (
          <p className="text-theme-primary mb-2 text-sm">
            ✅ Token enviado para seu e-mail.
          </p>
        )}

        {error && (
          <p className="text-red-500 mb-2 text-sm">
            {error}
          </p>
        )}

        {successMessage && (
          <p className="text-green-400 mb-2 text-sm">
            {successMessage}
          </p>
        )}

        <button
          onClick={enviarCodigo}
          className="w-full py-2 rounded button-acessar-neon button-theme"
          style={{
            background: "var(--theme-button)",
            boxShadow: "0 0 10px var(--theme-primary)",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Enviar Código
        </button>
      </div>
    </main>
  );
}
