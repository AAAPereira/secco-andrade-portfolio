//Estrutura visitantes

import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

// Lista de domínios de e-mail pessoais proibidos
const forbiddenDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com", "icloud.com"];
// Lista de e-mails pessoais permitidos (seu e o da sua filha)
const allowedPersonalEmails = ["fernandre6973@gmail.com", "pi2005@hotmail.com"];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fullString } = req.body;

    if (!fullString) {
      return res.status(400).json({ message: 'Email é obrigatório' });
    }

    const email = fullString.trim();
    const domain = email.split("@")[1];
    const isPersonalEmail = allowedPersonalEmails.includes(email);

    // Verifica se o e-mail é pessoal e não está na lista de permitidos
    if (!isPersonalEmail && forbiddenDomains.includes(domain)) {
      return res.status(400).json({ message: "Por favor, utilize um e-mail corporativo." });
    }

    const currentDate = new Date().toISOString();
    const newEntry = `${email},${currentDate}\n`;
    const filePath = path.resolve('./public/grafico/visitors.csv');

    try {
      const maxRetries = 5;
      let retryCount = 0;

      while (retryCount < maxRetries) {
        try {
          await fs.appendFile(filePath, newEntry, 'utf8');
          console.log(`Visitante salvo: ${newEntry.trim()}`);
          return res.status(200).json({ message: 'Email e data salvos com sucesso!' });
        } catch (error) {
          if (
            typeof error === 'object' &&
            error !== null &&
            'code' in error &&
            (error as any).code === 'EBUSY'
          ) {
            retryCount++;
            console.warn(`Arquivo CSV ocupado. Tentando novamente... (${retryCount}/${maxRetries})`);
            await new Promise(resolve => setTimeout(resolve, 100));
          } else {
            throw error;
          }
        }
      }

      throw new Error(`Não foi possível salvar o CSV após ${maxRetries} tentativas.`);
    } catch (error) {
      console.error('Erro ao salvar o email e data:', error);
      return res.status(500).json({ message: 'Erro ao salvar o email e data.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Método ${req.method} não permitido.`);
  }
}
