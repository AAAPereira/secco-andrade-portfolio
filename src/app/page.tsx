// src/app/termo/page.tsx

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
    <main className="w-full flex flex-col items-center justify-start flex-grow text-white mt-6">
      {/* LOGO */}
      <div>
        <Image
          src="/media/photos/icone-security.webp"
          alt="Logo de Segurança"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-[116px] md:w-[232px] lg:w-[350px] drop-shadow-xl animate-pulse logo-neon"
          style={{ filter: "drop-shadow(var(--logo-glow))" }}
        />
      </div>

      {/* TEXTO */}
      <div className="max-w-2xl text-center space-y-6 mt-6">
        <h2 className="text-3xl font-bold text-theme-primary">
          Termos de Uso e Política de Privacidade
        </h2>
        <p className="text-base leading-relaxed">
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

      {/* BOTÕES */}
      <div className="flex gap-6 mt-10">
        <button
          onClick={handleAceite}
          className="button-acessar-neon"
        >
          ✅ Concordo
        </button>
        <button
          onClick={handleDisagree}
          className="button-acessar-neon"
        >
          ❌ Não Concordo
        </button>
      </div>

      {/* MODAL ÁUDIO */}
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
              className="px-4 py-2 bg-theme-button rounded text-white hover:brightness-125 button-theme"
            >
              Estou Ciente!
            </button>
          </div>
        </div>
      )}
    </main>

  );
}
