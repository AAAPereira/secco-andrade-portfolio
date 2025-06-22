// src/app/avaliacao-site/page.tsx

"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import confetti from "canvas-confetti";
import Image from "next/image";

export default function AvaliacaoPage() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setFirstName] = useState<string | null>(null);
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

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
    const saudacaoExecutada = sessionStorage.getItem("saudacaoAvaliacaoExecutada");
    const storedFirstName = sessionStorage.getItem("firstName");

    if ("speechSynthesis" in window && !saudacaoExecutada) {
      const hora = new Date().getHours();
      const nome = storedFirstName?.split("@")[0];
      const nomeFormatado = nome ? nome.charAt(0).toUpperCase() + nome.slice(1) : "visitantes";

      let saudacaoPt = `Você chegou ao fim desta jornada digital. Aqui, cada linha, cada som e cada imagem foram escolhidos para revelar mais do que um currículo — foram feitos para contar uma história real, vivida entre acertos e aprendizados. Agora, é a sua vez: avalie não só este conteúdo, mas o que ele despertou em você. Muito obrigado, ${nomeFormatado}!`;

      let saudacaoEn = `You've reached the end of this digital journey. Everything here was designed to show more than just a resume — it tells a real story shaped by lessons and achievements. Now it’s your turn: evaluate not only the content but also what it inspired in you. Thank you, ${nomeFormatado}!`;

      if (hora >= 12 && hora < 18) {
        saudacaoPt = saudacaoPt.replace("Bom dia", "Boa tarde");
        saudacaoEn = saudacaoEn.replace("Good morning", "Good afternoon");
      } else if (hora >= 18 || hora < 5) {
        saudacaoPt = saudacaoPt.replace("Bom dia", "Boa noite");
        saudacaoEn = saudacaoEn.replace("Good morning", "Good evening");
      }

      const utter = new SpeechSynthesisUtterance(`${saudacaoPt} ${saudacaoEn}`);
      utter.lang = "pt-BR";
      utter.rate = 0.95;
      utter.pitch = 1.1;

      window.speechSynthesis.speak(utter);
      sessionStorage.setItem("saudacaoAvaliacaoExecutada", "true");
    }
  }, []);

  return (
    <div className="flex flex-col py-2 items-center justify-center text-center">
    <Image
      src="/media/photos/icone-security.webp"
      alt="Logo Segurança"
      width={0}
      height={0}
      sizes="100vw"
      priority
      className="w-[100px] md:w-[150px] lg:w-[350px] mb-6 animate-pulse logo-neon"
      style={{ filter: "drop-shadow(var(--logo-glow))" }}
    />

      {!submitted ? (
        <div className="bg-[#031427] p-5 rounded-2xl border border-theme-primary max-w-xl w-full shadow-lg">
          <p className="text-lg text-gray-200 mb-2 leading-relaxed">
            Antes de sair, deixe sua avaliação! Ter você aqui já foi uma honra. Saber que meu
            conteúdo fez diferença é ainda mais especial.
          </p>
          <p className="text-base text-gray-400 mb-2">
            Clique nas estrelas abaixo e diga o quanto essa experiência te ajudou.
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
