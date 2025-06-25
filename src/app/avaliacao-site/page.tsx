// src/app/avaliacao-site/page.tsx

"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useIdioma } from "@/app/components/idioma/IdiomaContext";
import confetti from "canvas-confetti";
import Image from "next/image";

export default function AvaliacaoPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);


  const { idioma } = useIdioma();

  const textos = {
    pt: {
      linha1: "Sua presença aqui foi uma honra! Antes de sair, deixe sua avaliação. Saber que meu conteúdo fez diferença para você é o que dá sentido a este trabalho.",
      linha2: "Clique nas estrelas abaixo e me conte o quanto essa experiência te ajudou."
    },
    en: {
      linha1: "Your presence here was truly an honor! Before you leave, please share your feedback. Knowing that my content made a difference to you gives true meaning to this work.",
      linha2: "Click the stars below and tell me how much this experience helped you."
    }
  };


  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      alert("Sessão expirada. Volte para o login.");
      router.push("/login");
    }

    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
  }, [router]);

  useEffect(() => {
    if (submitted) {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.3 } });
      confetti({ particleCount: 60, spread: 100, origin: { y: 0.7 } });
    }
  }, [submitted]);

  const handleSubmit = async () => {
    const email = localStorage.getItem("email");
    if (!email || rating === 0) return;

    setIsSubmitting(true);

    const dataEnvio = new Date().toLocaleString("pt-BR");

    try {
      await Promise.all([
        fetch("/api/enviar-avaliacao", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, nota: rating * 2, rating: rating * 2, dataEnvio }),
        }),
        fetch("/api/kv/salvar-avaliacao", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, nota: rating * 2, rating: rating * 2, dataEnvio }),
        }),
      ]);

      setSubmitted(true);
      setShowExit(true);
    } catch (error) {
      alert("❌ Erro ao enviar a avaliação.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleExit = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    window.location.href = "https://www.google.com.br";
  };


  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-12 max-w-screen-xl w-full mx-auto md:px-16 py-30">
        <div className="col-span-12 md:col-span-12 z-10 flex justify-center">
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

            <h1 className="text-xl text-theme-primary font-bold">Carregando Pagina de Avaliação...</h1>
          </motion.div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center text-center">
    <Image
      src="/media/photos/icone-security.webp"
      alt="Logo Segurança"
      width={0}
      height={0}
      sizes="100vw"
      priority
      className="w-[100px] md:w-[150px] lg:w-[350px] animate-pulse logo-neon"
      style={{ filter: "drop-shadow(var(--logo-glow))" }}
    />

      {!submitted ? (
        <div className="bg-[#031427] p-5 rounded-2xl border border-theme-primary max-w-xl w-full shadow-lg">
          <p className="text-base text-gray-400 mb-2">
            {textos[idioma].linha1}
          </p>
          <p className="text-base text-gray-400 mb-2">
            {textos[idioma].linha2}
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-12 h-12 cursor-pointer transition-colors duration-150 ${
                  (hover || rating) >= star ? "fill-yellow-400 text-yellow-400" : "text-gray-500"
                }`}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          <div className="text-xl font-bold text-green-400 mb-8 text-theme-primary">
            Sua avaliação: {rating * 2}/10
          </div>

          <button
            onClick={handleSubmit}
            disabled={rating === 0 || isSubmitting}
            className={`mt-2 ${
              isSubmitting ? "bg-gray-600 cursor-not-allowed" : "bg-emerald-500 hover:bg-emerald-600"
            } text-white text-lg font-semibold py-3 px-8 rounded-xl shadow-xl button-acessar-neon button-theme`}
          >
            {isSubmitting ? "Enviando avaliação..." : "Enviar Avaliação"}
          </button>
        </div>
      ) : (
        <div className="text-center text-emerald-400 text-theme-primary">
          <h2 className="text-3xl font-bold mb-2">
            Avaliação enviada com sucesso, {firstName}!
          </h2>
          <p className="text-xl mb-2">Obrigado pela sua opinião. Até breve!</p>
          {showExit && (
            <button
              onClick={handleExit}
              className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded shadow-md button-acessar-neon button-theme"
            >
              Sair
            </button>
          )}
        </div>
      )}
    </div>
  );
}
