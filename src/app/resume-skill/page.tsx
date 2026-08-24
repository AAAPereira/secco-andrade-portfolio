// src/app/resume-skill/page.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textoResumoSkill } from "@/app/resume-skill/texto_resumo_skill";
import "@/app/backgrounds/backgrounds.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useIdioma } from "@/app/components/idioma/IdiomaContext";
import { useRouter } from "next/navigation";


export default function ResumeSkillPage() {
  const [loading, setLoading] = useState(true);
  const { idioma } = useIdioma();
  const [firstName, setFirstName] = useState<string | null>(null);
  const router = useRouter();



  // ⏳ Carregamento simulado
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);


  // 🔥 Nome do usuário
  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
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
            <Image src="/media/photos/icone-security.webp"
            alt="Logo da Segurança"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[133px] md:w-[266px] lg:w-[400px] mx-auto mb-4 animate-pulse logo-neon"
            style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }} />

            <h1 className="text-xl text-theme-primary font-bold">Carregando Resumo Skill...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 w-full mx-auto">

      {/* 📸 Coluna da Imagem */}
          <div className="col-span-12 lg:col-span-4 flex items-start mt-20 justify-end pr-0">
        <Image
          src="/media/photos/modelos/modelo16.webp"
          alt="Foto de André Pereira"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-44 md:w-60 lg:w-72 xl:w-80 h-auto object-contain"
        />
      </div>

          {/* 📝 Coluna do Texto */}
          <div className="col-span-12 lg:col-span-6 flex items-start justify-center mt-12">
              <div
                  className="w-full max-w-5xl max-h-[65vh] overflow-y-auto p-4 text-white text-justify leading-relaxed custom-scroll"
                  dangerouslySetInnerHTML={{ __html: textoResumoSkill[idioma] }}
              />
          </div>
    </div>
  );
}