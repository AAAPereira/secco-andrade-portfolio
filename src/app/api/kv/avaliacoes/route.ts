// src/app/api/kv/avaliacoes/route.ts


import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Avaliacao {
    email: string;
    nota: number;
    rating: number;
    timestamp: string;
}

function isAvaliacao(data: unknown): data is Avaliacao {
    if (typeof data !== "object" || data === null) {
        return false;
    }

    const avaliacao = data as Partial<Avaliacao>;

    return (
        typeof avaliacao.email === "string" &&
        typeof avaliacao.nota === "number" &&
        typeof avaliacao.rating === "number" &&
        typeof avaliacao.timestamp === "string"
    );
}

export async function GET() {
    try {
        console.log("📦 Buscando avaliações no Vercel Blob...");

        // Busca os arquivos gravados na pasta avaliacoes/
        const { blobs } = await list({
            prefix: "avaliacoes/",
        });

        console.log(
            `📊 ${blobs.length} arquivo(s) encontrado(s) no Blob.`
        );

        // Lê o conteúdo JSON de cada avaliação
        const resultados = await Promise.all(
            blobs.map(async (blob) => {
                try {
                    const response = await fetch(blob.url, {
                        cache: "no-store",
                    });

                    if (!response.ok) {
                        console.error(
                            `❌ Erro ao ler ${blob.pathname}: HTTP ${response.status}`
                        );

                        return null;
                    }

                    const data: unknown = await response.json();

                    if (!isAvaliacao(data)) {
                        console.warn(
                            `⚠️ Arquivo ignorado por formato inválido: ${blob.pathname}`
                        );

                        return null;
                    }

                    return data;
                } catch (error) {
                    console.error(
                        `❌ Erro ao processar ${blob.pathname}:`,
                        error
                    );

                    return null;
                }
            })
        );

        // Remove arquivos inválidos ou que falharam
        const avaliacoes: Avaliacao[] = resultados.filter(
            (item): item is Avaliacao => item !== null
        );

        // Ordena da avaliação mais antiga para a mais recente
        avaliacoes.sort(
            (a, b) =>
                new Date(a.timestamp).getTime() -
                new Date(b.timestamp).getTime()
        );

        console.log(
            `✅ ${avaliacoes.length} avaliação(ões) carregada(s) com sucesso.`
        );

        return NextResponse.json(
            {
                avaliacoes,
            },
            {
                status: 200,
                headers: {
                    "Cache-Control": "no-store, no-cache, must-revalidate",
                },
            }
        );
    } catch (error) {
        console.error(
            "💥 Erro ao buscar avaliações no Vercel Blob:",
            error
        );

        return NextResponse.json(
            {
                error: "Erro ao buscar avaliações.",
                avaliacoes: [],
            },
            {
                status: 500,
            }
        );
    }
}