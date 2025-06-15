// /app/termo

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "@/app/backgrounds/backgrounds.css";

export default function TermosPage() {
  const router = useRouter();
  const [showAudioModal, setShowAudioModal] = useState(false);

  const handleAceite = () => {
    sessionStorage.setItem("termoAceito", "sim");
    setShowAudioModal(true);
  };

  const handleEntendi = () => {
    sessionStorage.setItem("alertaAudioMostrado", "sim");
    router.push("/login");
  };

  const handleDisagree = () => {
    window.location.href = "https://www.google.com.br";
  };

  return (
    <main className="grid grid-cols-12 gap-4 max-w-[1600px] w-full mx-auto">

      {/* Logo Central */}
      <div className="col-span-12 flex justify-center">
        <Image
          src="/media/photos/icone-security.png"
          alt="Logo de Segurança"
          width={350}
          height={350}
          priority
          className="drop-shadow-xl animate-pulse logo-neon"
          style={{ filter: "drop-shadow(var(--logo-glow))" }}
        />
      </div>

      {/* Texto Termo */}
      <div className="md:col-span-6 md:col-start-4 text-center space-y-6">
        <h2 className="text-3xl md:text-3xl text-emerald-400 font-bold text-theme-primary">
          Termos de Uso e Política de Privacidade
        </h2>

        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
          Este site é destinado exclusivamente para fins profissionais e estatísticos.
          Nenhum e-mail será utilizado para marketing, repasse de dados ou atividades comerciais.
          O endereço de e-mail inserido tem como único propósito registrar o número de visitantes
          e áreas acessadas, conforme determinações da <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
          <br /><br />
          Ao continuar, você declara que compreende e concorda com o uso do seu e-mail para fins analíticos
          e aceita os termos de privacidade aqui descritos.
          <a
            href="https://www.gov.br/anpd/pt-br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-primary underline ml-1"
          >
            Saiba mais sobre a LGPD
          </a>.
        </p>
      </div>

      {/* Botões */}
      <div className="absolute left-150 flex justify-center">
        <div className="flex gap-6 mt-160">
          <button
            onClick={handleAceite}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded shadow-xl button-theme button-acessar-neon"
          >
            ✅ Concordo
          </button>
          <button
            onClick={handleDisagree}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded shadow-xl button-theme button-acessar-neon"
          >
            ❌ Não Concordo
          </button>
        </div>
      </div>

      {/* Modal de Áudio */}
      {showAudioModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="bg-zinc-900 text-white border border-theme-primary p-6 rounded-lg max-w-md text-center">
            <h2 className="text-xl font-bold mb-4 text-yellow-400">🔊 Alerta Importante</h2>
            <p className="mb-4">
              Este site possui trilhas sonoras e saudações em áudio.
              Para uma melhor experiência, utilize fones de ouvido ou mantenha o som do seu dispositivo no mudo se preferir evitar sons.
            </p>
            <button
              onClick={handleEntendi}
              className="px-4 py-2 bg-theme-button rounded text-white hover:brightness-125 button-theme button-acessar-neon"
            >
              Estou Ciente!
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
