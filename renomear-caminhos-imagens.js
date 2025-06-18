const fs = require('fs');
const path = require('path');

// 🔥 Define o caminho da pasta onde estão os arquivos .tsx
const pasta = path.join(__dirname, 'src');

// Extensões que queremos substituir
const regex = /\.(png|jpg|jpeg)/g;

// Função recursiva pra percorrer todas as subpastas
function processarPasta(pastaAtual) {
  fs.readdir(pastaAtual, (err, arquivos) => {
    if (err) {
      console.error('❌ Erro ao ler a pasta:', err);
      return;
    }

    arquivos.forEach((arquivo) => {
      const caminhoCompleto = path.join(pastaAtual, arquivo);

      fs.stat(caminhoCompleto, (err, stats) => {
        if (err) {
          console.error('❌ Erro ao ler arquivo:', err);
          return;
        }

        if (stats.isDirectory()) {
          // Se for pasta, chama recursivamente
          processarPasta(caminhoCompleto);
        } else if (arquivo.endsWith('.tsx')) {
          // Se for arquivo .tsx, processa
          fs.readFile(caminhoCompleto, 'utf8', (err, data) => {
            if (err) {
              console.error('❌ Erro ao ler arquivo:', err);
              return;
            }

            const resultado = data.replace(regex, '.webp');

            fs.writeFile(caminhoCompleto, resultado, 'utf8', (err) => {
              if (err) {
                console.error('❌ Erro ao escrever arquivo:', err);
              } else {
                console.log(`✅ Atualizado: ${caminhoCompleto}`);
              }
            });
          });
        }
      });
    });
  });
}

// 🚀 Inicia o processo
processarPasta(pasta);
