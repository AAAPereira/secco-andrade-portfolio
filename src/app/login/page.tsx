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

  const enviarCodigo = async () => {
    const emailTrimmed = email.trim().toLowerCase();

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-12 max-w-screen-xl w-full mx-auto py-30">
        <div className="col-span-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Image
              src="/media/photos/icone-security.webp"
              alt="Logo da Segurança"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="w-[133px] md:w-[266px] lg:w-[400px] mx-auto mb-4 animate-pulse logo-neon"
              style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }}
            />
            <h1 className="text-xl text-theme-primary font-bold">
              Carregando Página Login...
            </h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center w-full mt-22">
      <div className="bg-zinc-900 p-6 rounded-lg shadow-xl w-full max-w-sm text-center border border-theme-primary">
        <Image
          src="/media/photos/fundo_tela_login.webp"
          alt="Fundo Login"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-[120px] md:w-[240px] lg:w-[360px] mx-auto mb-6 rounded-lg"
        />
        <h2 className="text-theme-primary font-bold mb-4 text-xl">
          Login de Acesso
        </h2>

        <input
          type="email"
          placeholder="Seu e-mail corporativo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
