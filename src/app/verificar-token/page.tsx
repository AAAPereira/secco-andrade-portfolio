// src/app/verificar-token/page.tsx

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function VerificarTokenPage() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [tokenExpirado, setTokenExpirado] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (!storedEmail) {
      alert("E-mail não encontrado. Redirecionando para login.");
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTokenExpirado(true); // 🚨 Ativa mensagem de expiração
          setTimeout(() => {
            router.push("/login"); // ⏳ Redireciona após 5 segundos
          }, 5000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const handleVerify = async () => {
    setLoading(true);
    setError("");
    const email = localStorage.getItem("email");

    if (!email) {
      alert("E-mail não encontrado. Por favor, refaça o login.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/verificar-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Falha na verificação");
      }

    const firstName = email.split("@")[0].split(/[._]/)[0];
    sessionStorage.setItem("firstName", firstName.charAt(0).toUpperCase() + firstName.slice(1));
    router.push("/sobre");
    } catch (err: any) {
      alert("Erro: " + err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="col-span-12 md:col-span-6 md:col-start-4 flex flex-col items-center justify-center mt-20 text-white">
        {/* Box central */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow-xl w-full max-w-sm text-center border border-theme-primary">
          <Image
            src="/media/photos/fundo_tela_login.webp"
            alt="Logo de Segurança"
            width={360}
            height={360}
            className="mx-auto mb-6 rounded-lg"
          />

          <h2 className="text-emerald-400 font-semibold mb-2 text-theme-primary">Token de Acesso</h2>

          <input
            type="text"
            placeholder="Código de 6 dígitos"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full p-2 mb-4 text-white rounded border border-zinc-600 focus:outline-none"
          />

          <button
            onClick={handleVerify}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded button-acessar-neon button-theme"
            disabled={loading}
            style={{
              background: "var(--theme-button)",
              boxShadow: "0 0 10px var(--theme-primary)",
            }}
          >
            {loading ? "Verificando..." : "Validar Token"}
          </button>

          {/* ✅ Mensagens abaixo do botão */}
          <div className="mt-4 text-sm text-center">
            {!tokenExpirado && (
              <>
                <p className="text-green-400">Token expira em: {countdown} segundos</p>
                <p className="text-red-400">Token enviado para seu e-mail.</p>
              </>
            )}
            {tokenExpirado && (
              <p className="text-yellow-400 font-semibold">
                ⛔ Token expirado. Redirecionando para o login...
              </p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        </div>
      </div>
    </>
  );
}