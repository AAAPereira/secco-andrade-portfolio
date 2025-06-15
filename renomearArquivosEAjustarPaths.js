// renomearArquivosEAjustarPaths.js

const fs = require("fs");
const path = require("path");

const logFile = "./relatorio-renomeacao.txt";
const logStream = fs.createWriteStream(logFile, { flags: "w" });

// 🗺️ Caminho das pastas dos arquivos
const pastaAudios = "./public/media/audios/profissional";
const pastaImagens = "./public/media/photos";

// 📂 Pasta do código onde estão os paths (ex.: audioMap)
const pastaCodigo = "./src";

// 📝 Função de log
function log(mensagem) {
  console.log(mensagem);
  logStream.write(mensagem + "\n");
}

// 🛠️ Função para renomear arquivos
function renomearArquivosNaPasta(pasta) {
  const arquivos = fs.readdirSync(pasta);

  arquivos.forEach((arquivo) => {
    const novoNome = arquivo
      .replace(/\s+/g, "-") // espaços -> hífen
      .replace(/_/g, "-")   // underscores -> hífen
      .toLowerCase();

    if (arquivo !== novoNome) {
      const caminhoAntigo = path.join(pasta, arquivo);
      const caminhoNovo = path.join(pasta, novoNome);

      fs.renameSync(caminhoAntigo, caminhoNovo);
      log(`✅ [RENOMEADO] ${arquivo} ➡️ ${novoNome}`);
    }
  });
}

// 🚀 Executa renomeio em áudios e imagens
renomearArquivosNaPasta(pastaAudios);
renomearArquivosNaPasta(pastaImagens);

// 🔥 Atualiza paths no código
function atualizarPathsNosArquivos(pasta) {
  const arquivos = fs.readdirSync(pasta);

  arquivos.forEach((arquivo) => {
    const caminho = path.join(pasta, arquivo);
    const stats = fs.statSync(caminho);

    if (stats.isDirectory()) {
      atualizarPathsNosArquivos(caminho); // recursão pra pastas
    } else if (/\.(ts|tsx|js|jsx)$/.test(arquivo)) {
      let conteudo = fs.readFileSync(caminho, "utf-8");
      const antes = conteudo;

      // 🔊 Corrige paths de áudios
      conteudo = conteudo.replace(
        /\/media\/audios\/profissional\/([a-zA-Z0-9 _-]+\.mp3)/g,
        (match, p1) => {
          const novoNome = p1
            .replace(/\s+/g, "-")
            .replace(/_/g, "-")
            .toLowerCase();
          log(`📝 [ATUALIZADO AUDIO] ${match} ➡️ /media/audios/profissional/${novoNome}`);
          return `/media/audios/profissional/${novoNome}`;
        }
      );

      // 🖼️ Corrige paths de imagens
      conteudo = conteudo.replace(
        /\/media\/photos\/([a-zA-Z0-9 _-]+\.(png|jpg|jpeg|gif|svg))/g,
        (match, p1) => {
          const novoNome = p1
            .replace(/\s+/g, "-")
            .replace(/_/g, "-")
            .toLowerCase();
          log(`📝 [ATUALIZADO IMAGEM] ${match} ➡️ /media/photos/${novoNome}`);
          return `/media/photos/${novoNome}`;
        }
      );

      if (conteudo !== antes) {
        fs.writeFileSync(caminho, conteudo, "utf-8");
      }
    }
  });
}

// 🚀 Executa atualização dos paths no código
atualizarPathsNosArquivos(pastaCodigo);

logStream.end();
console.log("\n🚀🚀🚀 Processo concluído com sucesso!");
console.log(`📄 Relatório salvo em: ${logFile}`);
