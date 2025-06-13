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
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      alert("Sessão expirada. Volte para o login.");
      router.push("/login");
    }
  }, [router]);

  useEffect(() => {
      if (submitted) {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.3 },
        });

        confetti({
          particleCount: 60,
          spread: 100,
          origin: { y: 0.7 },
        });
      }
  }, [submitted]);


  const handleSubmit = async () => {
    const email = localStorage.getItem("email");
    if (!email || rating === 0) return;

    try {
      await fetch("/api/enviar-avaliacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, nota: rating * 2, rating: rating * 2 }),
      });

      // Envia também para o novo endpoint KV
    await fetch("/api/kv/salvar-avaliacao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, nota: rating * 2, rating: rating * 2 }),
    });

      setSubmitted(true);
      setShowExit(true);
    } catch (error) {
      alert("Erro ao enviar a avaliação.");
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

      if (typeof window !== "undefined" && "speechSynthesis" in window && !saudacaoExecutada) {
        const hora = new Date().getHours();
        const nome = storedFirstName?.split("@")[0];
        const nomeFormatado = nome ? nome.charAt(0).toUpperCase() + nome.slice(1) : "visitante";

        let saudacaoPt = `Você chegou ao fim desta jornada digital. Aqui, cada linha, cada som e cada imagem foram escolhidos para revelar mais do que um currículo — foram feitos para contar uma história real, vivida entre acertos e aprendizados, entre falhas que ensinaram e vitórias que transformaram. Espero que, ao navegar por estas páginas, você tenha sentido a essência de um profissional que valoriza a prática, a verdade e a evolução constante. Agora, é a sua vez: avalie não só este conteúdo, mas o que ele despertou em você. Muito obrigado por dedicar seu tempo. Foi uma honra ter sua atenção, ${nome}!`;
        let saudacaoEn = `You've reached the end of this digital journey. Here, every line, every sound, and every image was carefully crafted to show more than a résumé — they were designed to tell a real story, shaped by both triumphs and lessons, by mistakes that taught and experiences that molded. I hope that as you explored these pages, you felt the essence of a professional who values hands-on experience, honesty, and constant growth. Now it’s your turn: evaluate not just the content, but what it made you reflect on. Thank you deeply for your time. It was an honor to have your attention, ${nome}!`;


        if (hora >= 12 && hora < 18) {
          saudacaoPt = saudacaoPt.replace("Bom dia", "Boa tarde");
          saudacaoEn = saudacaoEn.replace("Good morning", "Good afternoon");
        } else if (hora >= 18 || hora < 5) {
          saudacaoPt = saudacaoPt.replace("Bom dia", "Boa noite");
          saudacaoEn = saudacaoEn.replace("Good morning", "Good evening");
        }

        const utter = new SpeechSynthesisUtterance(`${saudacaoPt} ${saudacaoEn}`);
        utter.lang = "pt-BR"; // Pode deixar assim se não quiser mudar voz no meio
        utter.rate = 0.95;
        utter.pitch = 1.1;

        window.speechSynthesis.speak(utter);
        sessionStorage.setItem("saudacaoAvaliacaoExecutada", "true");
      }
  }, []);


  return (

      <div className="flex flex-col py-6 items-center justify-center text-center">

        <Image
           src="/media/photos/icone_security.png"
            alt="Logo Segurança"
            width={350}
            height={350}
            priority
            className="mb-6 animate-pulse logo-neon"
            style={{ filter: "drop-shadow(var(--logo-glow))" }}
          />

        {!submitted ? (
          <div className=" bg-[#031427] p-4 rounded-2xl border border-theme-primary max-w-xl w-full shadow-lg">
            <p className="text-lg text-gray-200 mb-2 leading-relaxed">
              Antes de sair, deixe sua avaliação! Ter você aqui já foi uma honra e mais ainda, saber que meu
              conteúdo pode fazer a diferença na sua tomada de decisão.
            </p>
            <p className="text-base text-gray-400 mb-2">
              Clique nas estrelas abaixo e diga o quanto essa experiência te ajudou.
            </p>
            <div className="flex justify-center space-x-4 mb-2">
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
            <div className="text-xl font-bold text-green-400 mb-2 text-theme-primary">
              Sua avaliação: {rating * 2}/10
            </div>
            <button
              onClick={handleSubmit}
              className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold py-3 px-8 rounded-xl shadow-xl button-acessar-neon button-theme"
              disabled={rating === 0}
            >
              Enviar Avaliação
            </button>
          </div>
        ) : (
          <div className="text-center text-emerald-400 text-theme-primary">

            <h2 className="text-3xl font-bold mb-2">Avaliação enviada com sucesso!</h2>
            <p className="text-xl mb-2">Obrigado pela sua opinião. Até breve!</p>
            <div className="w-full flex justify-center">

            </div>
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
