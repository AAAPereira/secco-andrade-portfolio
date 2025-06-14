// src/app/estatisticas/page.tsx

"use client";

import { useEffect, useState, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface Avaliacao {
  email: string;
  nota: number;
  rating: number;
  timestamp: string;
}

const COLORS = ["#00ffe0", "#00c8ff", "#00ff99", "#ff00ff", "#ffcc00"];

export default function EstatisticasPage() {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);

  // 🔐 Restrição de acesso
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email !== "fernandre6973@gmail.com") {
      alert("Acesso restrito. Redirecionando...");
      router.push("/login");
    }
  }, [router]);

  // 🚀 Fetch dos dados
  useEffect(() => {
    fetch("/api/kv/avaliacoes")
      .then((res) => res.json())
      .then((data) => setAvaliacoes(data.avaliacoes || []))
      .catch((err) => console.error("Erro ao buscar avaliações:", err));
  }, []);

  // 🚦 Dados tratados
  const avaliacoesFiltradas = avaliacoes.filter(a => a.email !== "fernandre6973@gmail.com");
  const total = avaliacoesFiltradas.length;

  const porEmail = avaliacoesFiltradas.reduce<Record<string, number>>((acc, { email }) => {
    acc[email] = (acc[email] || 0) + 1;
    return acc;
  }, {});
  const unicos = Object.keys(porEmail).length;
  const repetidos = total - unicos;

  const porNota = avaliacoesFiltradas.reduce<Record<number, number>>((acc, { nota }) => {
    acc[nota] = (acc[nota] || 0) + 1;
    return acc;
  }, {});
  const dadosNotas = Object.entries(porNota).map(([nota, count]) => ({ nota: Number(nota), count }));

  const porDataHora = avaliacoesFiltradas.map(({ timestamp }) => {
    const date = new Date(timestamp);
    const hora = date.getHours();
    return { hora, count: 1 };
  });
  const agregadosHora = porDataHora.reduce<Record<number, number>>((acc, { hora }) => {
    acc[hora] = (acc[hora] || 0) + 1;
    return acc;
  }, {});
  const dadosHora = Object.entries(agregadosHora).map(([hora, count]) => ({ hora: Number(hora), count }));

  const top5 = Object.entries(porEmail)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([email, count]) => `${email} (${count})`);

  const media = total > 0
    ? (avaliacoesFiltradas.reduce((sum, a) => sum + a.nota, 0) / total).toFixed(1)
    : "0";

  // 📄 Exportação PDF
  const exportarPDF = async () => {
    setIsExporting(true);
    const element = containerRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("visitors-stats.pdf");
    setIsExporting(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Image
            src="/media/photos/icone_security.png"
            alt="Logo"
            width={400}
            height={400}
            className="mx-auto mb-4 animate-pulse logo-neon"
          />
          <h1 className="text-xl text-green-400 font-bold">Carregando Estatísticas...</h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center text-white">
      {/* 🔘 Botões */}
      <div className="fixed top-5 right-85 z-50 flex gap-4">
        <button
          onClick={exportarPDF}
          disabled={isExporting}
          className="button-acessar-neon button-theme disabled:opacity-50"
        >
          {isExporting ? "Exportando..." : "📥 Baixar PDF"}
        </button>
      </div>

      <div
        id="dashboard-content"
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1600px] w-full px-4 mt-10"
      >
        {/* 🔸 Bloco - Métricas */}
        <div className="bg-[#131a2b] p-4 rounded-xl border border-emerald-400 shadow-xl">
          <h2 className="text-lg font-bold text-emerald-300 mb-2">📊 Estatísticas</h2>
          <p>Total de Avaliações: <span className="text-emerald-200">{total}</span></p>
          <p>Visitantes Únicos: <span className="text-emerald-200">{unicos}</span></p>
          <p>Repetidos: <span className="text-emerald-200">{repetidos}</span></p>
          <p>Nota Média: <span className="text-green-300">{media}/10</span></p>
        </div>

        {/* 🔸 Avaliações por Hora */}
        <div className="bg-[#131a2b] p-4 rounded-xl border border-yellow-500 shadow-xl">
          <h2 className="text-lg font-bold text-yellow-300 mb-2">🕒 Por Hora do Dia</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={dadosHora}>
              <XAxis dataKey="hora" stroke="#ffd700" />
              <YAxis stroke="#ffd700" />
              <Tooltip />
              <Bar dataKey="count" fill="#ffd700" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 🔸 Distribuição de Notas */}
        <div className="bg-[#131a2b] p-4 rounded-xl border border-pink-400 shadow-xl">
          <h2 className="text-lg font-bold text-pink-300 mb-2">🥧 Distribuição de Notas</h2>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie
                data={dadosNotas}
                dataKey="count"
                nameKey="nota"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ nota }) => `Nota ${nota}`}
              >
                {dadosNotas.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 🔸 Únicos x Repetidos */}
        <div className="bg-[#131a2b] p-4 rounded-xl border border-cyan-400 shadow-xl">
          <h2 className="text-lg font-bold text-cyan-300 mb-2">📊 Únicos vs Repetidos</h2>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={[
              { tipo: "Únicos", valor: unicos },
              { tipo: "Repetidos", valor: repetidos }
            ]}>
              <XAxis dataKey="tipo" stroke="#00ffe0" />
              <YAxis stroke="#00ffe0" />
              <Tooltip />
              <Bar dataKey="valor" fill="#00ffe0" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 🔸 Linha de visitas */}
        <div className="bg-[#131a2b] p-4 rounded-xl border border-indigo-400 shadow-xl">
          <h2 className="text-lg font-bold text-indigo-300 mb-2">📈 Visitas</h2>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={avaliacoes.map(({ timestamp }, i) => ({ index: i + 1, timestamp }))}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="index" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="index" stroke="#00ff99" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 🔸 Top Visitantes */}
        <div className="bg-[#131a2b] p-4 rounded-xl border border-yellow-400 shadow-xl">
          <h2 className="text-lg font-bold text-yellow-300 mb-2">🌟 Top 5 Visitantes</h2>
          <ul className="list-disc list-inside text-yellow-200">
            {top5.length === 0 && <li>Nenhum visitante registrado</li>}
            {top5.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔗 Navegação */}
      <div className="fixed top-4 right-22 z-50 flex gap-1">
        <button className="toggle-mode" onClick={() => router.push('/profissional')}><ArrowLeft className="w-8 h-8" /></button>
        <button className="toggle-mode" onClick={() => router.push('/visao-macro')}><ArrowRight className="w-8 h-8" /></button>
      </div>
    </div>
  );
}
