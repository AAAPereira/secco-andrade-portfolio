// src/app/api/kv/salvar-avaliacao/route.ts

import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const { email, nota, rating } = data;

        if (
            !email ||
            typeof nota !== "number" ||
            typeof rating !== "number"
        ) {
            console.log("❌ Dados incompletos recebidos:", data);

            return NextResponse.json(
                { error: "Dados incompletos." },
                { status: 400 }
            );
        }

        const timestamp = new Date().toISOString();

        const payload = {
            email: email.trim().toLowerCase(),
            nota,
            rating,
            timestamp,
        };

        // Remove caracteres problemáticos do nome do arquivo
        const emailSeguro = payload.email.replace(/[^a-zA-Z0-9@._-]/g, "_");

        const blobKey =
            `avaliacoes/${timestamp.replace(/[:.]/g, "-")}-${emailSeguro}.json`;

        console.log("📦 Gravando avaliação no Blob:", blobKey);
        console.log("📊 Dados:", payload);

        const blob = await put(
            blobKey,
            JSON.stringify(payload),
            {
                access: "public",
                addRandomSuffix: false,
                contentType: "application/json",
            }
        );

        console.log("✅ Avaliação gravada no Blob com sucesso!");
        console.log("📍 Blob URL:", blob.url);

        return NextResponse.json({
            success: true,
            message: "Avaliação registrada com sucesso!",
            timestamp,
        });

    } catch (err) {
        console.error("💥 Erro ao salvar avaliação:", err);

        return NextResponse.json(
            { error: "Erro interno ao salvar avaliação." },
            { status: 500 }
        );
    }
}