// /app/visao-macro/page.tsx

"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ChevronsLeft, ChevronsRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation';

interface Registro {
  email: string;
  timestamp: string;
}

const ITENS_POR_PAGINA = 10;

export default function VisaoMacroPage() {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [filtroEmail, setFiltroEmail] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [ordemAsc, setOrdemAsc] = useState(true);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const carregarRegistros = async () => {
    try {
      const res = await fetch("/api/kv/avaliacoes");
      const data = await res.json();
      setRegistros(data.avaliacoes || []);
    } catch (err) {
      console.error("Erro ao carregar dados:", err);
    }
  };

  useEffect(() => {
    carregarRegistros();
  }, []);

  const filtrar = () => {
    const dadosFiltrados = registros.filter((r) => {
      const data = new Date(r.timestamp);
      const inicio = dataInicio ? new Date(dataInicio) : null;
      const fim = dataFim ? new Date(dataFim) : null;
      return (
        (!filtroEmail || r.email.includes(filtroEmail)) &&
        (!inicio || data >= inicio) &&
        (!fim || data <= fim)
      );
    });
    return ordemAsc
      ? dadosFiltrados.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
      : dadosFiltrados.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  };

  const limpar = () => {
    setFiltroEmail("");
    setDataInicio("");
    setDataFim("");
    setPaginaAtual(1);
  };

  const exportarCSV = () => {
    const csvContent = `timestamp,email\n` +
      filtrar().map((r) => `${r.timestamp},${r.email}`).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "visao-macro.csv";
    link.click();
  };

  const limparRegistrosPorData = async () => {
    if (!dataInicio || !dataFim) {
      alert("Por favor, preencha as duas datas.");
      return;
    }

    const confirmacao = confirm(`Tem certeza que deseja apagar registros entre ${dataInicio} e ${dataFim}?`);
    if (!confirmacao) return;

    try {
      const res = await fetch("/api/limpar-visitors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dataInicial: dataInicio, dataFinal: dataFim }),
      });

      if (!res.ok) throw new Error("Resposta inválida do servidor");

      const result = await res.json();
      alert(result.message || "Limpeza realizada.");
      carregarRegistros();
    } catch (err) {
      console.error("Erro ao limpar registros:", err);
      alert("Erro ao executar limpeza.");
    }
  };

  const resultado = filtrar();
  const totalPaginas = Math.ceil(resultado.length / ITENS_POR_PAGINA);
  const inicio = (paginaAtual - 1) * ITENS_POR_PAGINA;
  const fim = inicio + ITENS_POR_PAGINA;
  const registrosPaginados = resultado.slice(inicio, fim);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName");
    setFirstName(storedFirstName);
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
            <Image src="/media/photos/icone-security.webp" alt="Logo da Segurança" width={400} height={400} priority className="mx-auto mb-4 animate-pulse logo-neon" style={{ height: "auto", filter: "drop-shadow(var(--logo-glow))" }} />
            <h1 className="text-xl text-theme-primary font-bold">Carregando Pagina Visão Macro...</h1>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-theme-surface rounded-xl p-4 border border-theme-primary max-w-2xl items-center mx-auto mt-8">
      <h2 className="text-xl mb-2 font-bold text-theme-secondary">📊 Visão Geral de Visitantes</h2>

      <div className="flex flex-wrap gap-4 mb-4 items-center">
        <input type="text" placeholder="Buscar por e-mail..." value={filtroEmail} onChange={(e) => setFiltroEmail(e.target.value)} className="bg-zinc-800 border border-theme-primary text-white rounded px-4 py-2 w-64" />
        <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} className="bg-zinc-800 border border-theme-primary text-white rounded px-4 py-2" />
        <input type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} className="bg-zinc-800 border border-theme-primary text-white rounded px-4 py-2" />
        <button onClick={() => setOrdemAsc(!ordemAsc)} className="text-theme-secondary hover:text-theme-accent text-sm" title={ordemAsc ? "Mais recentes primeiro" : "Mais antigos primeiro"}>
          {ordemAsc ? "⬆️" : "⬇️"}
        </button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-theme-secondary border-b border-theme-primary">
            <th className="py-2">E-mail</th>
            <th>Data de Visita</th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {registrosPaginados.map((r, idx) => (
              <motion.tr
                key={idx}
                className="border-b hover:bg-theme-accent/10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <td className="py-2">{r.email}</td>
                <td>{format(new Date(r.timestamp), "dd/MM/yyyy HH:mm ")}</td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-2">
        <p className="text-theme-secondary">
          Total exibido: {resultado.length} visitantes | Página {paginaAtual} de {totalPaginas}
        </p>
        <div className="flex items-center gap-2">
          <button onClick={() => setPaginaAtual((p) => Math.max(p - 1, 1))} disabled={paginaAtual === 1} className="text-theme-secondary hover:text-theme-accent disabled:opacity-30">
            <ChevronsLeft className="w-6 h-6" />
          </button>
          <span className="text-sm text-theme-secondary">{paginaAtual} / {totalPaginas}</span>
          <button onClick={() => setPaginaAtual((p) => Math.min(p + 1, totalPaginas))} disabled={paginaAtual === totalPaginas} className="text-theme-secondary hover:text-theme-accent disabled:opacity-30">
            <ChevronsRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 mt-6 items-center justify-center">
        <button onClick={limpar} className="button-acessar-neon border-theme-primary text-theme-secondary button-theme">
          Limpar Filtros
        </button>
        <button onClick={exportarCSV} className="button-acessar-neon border-theme-primary text-theme-secondary button-theme">
          Exportar CSV
        </button>
        <button onClick={limparRegistrosPorData} className="button-acessar-neon border-theme-primary text-theme-secondary button-theme">
          Limpar CSV
        </button>
        <a href="/estatisticas" className="button-acessar-neon border-theme-primary text-theme-secondary button-theme">
          Fechar
        </a>
      </div>

      <div className="fixed top-4 right-23 z-20 flex gap-2">
        <button className="toggle-mode border-theme-primary" onClick={() => window.location.href = '/estatisticas'}>
          <ArrowLeft className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
