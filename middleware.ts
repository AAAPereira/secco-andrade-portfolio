// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Rotas públicas (acesso sem login)
  const publicPaths = ['/', '/login'];
  const isPublic = publicPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  // Captura do cookie do usuário ativo
  const activeUserCookie = req.cookies.get('activeUser');
  const email = activeUserCookie?.value || "";
  const isLoggedIn = !!activeUserCookie;

  // Rotas restritas que só o André pode acessar
  const isRestrita =
    pathname.startsWith("/estatisticas") || pathname.startsWith("/visao-macro");

  // Lista de e-mails liberados para áreas restritas
  const emailsLiberados = ["fernandre6973@gmail.com"];
  const emailLiberado =
    email.endsWith("@empresa.com") || emailsLiberados.includes(email);

  // BLOQUEIO de acesso às rotas restritas
  if (isRestrita && (!isLoggedIn || !emailLiberado)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // BLOQUEIO de qualquer rota privada sem login
  if (!isPublic && !isLoggedIn && !isRestrita) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Libera o fluxo normal se tudo estiver ok
  return NextResponse.next();
}

// Configuração de correspondência de rotas
export const config = {
  matcher: [
    '/((?!_next/|favicon.ico|api/|media/|downloads/|grafico/|[^/]+\\.(?:png|jpg|jpeg|gif|webp|mp3|mp4|wav|svg|ico|json|txt)).*)',
  ],
};
