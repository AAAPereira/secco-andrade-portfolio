// src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Rotas públicas (sem login)
  const publicPaths = ['/', '/login'];
  const isPublic = publicPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));

  // Captura cookie do usuário
  const activeUserCookie = req.cookies.get('activeUser');
  const email = activeUserCookie?.value || "";
  const isLoggedIn = !!activeUserCookie;

  // Rotas restritas que só André pode acessar
  const isRestrita = pathname.startsWith("/estatisticas") || pathname.startsWith("/visao-macro");

  // E-mails liberados
  const emailsLiberados = ["fernandre6973@gmail.com"];
  const emailLiberado =
    email.endsWith("@empresa.com") || emailsLiberados.includes(email);

  // Bloqueia rotas restritas
  if (isRestrita && (!isLoggedIn || !emailLiberado)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Bloqueia qualquer rota não pública sem login
  if (!isPublic && !isLoggedIn && !isRestrita) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Libera fluxo normal
  return NextResponse.next();
}

// ⚡ Middleware só roda nessas rotas, assets (imagens, MP3, etc.) passam livre!
export const config = {
  matcher: [
    '/',              // home
    '/login',         // login
    '/timeline/:path*',
    '/sobre/:path*',
    '/skill-completo/:path*',
    '/resume-skill/:path*',
    '/estatisticas/:path*',
    '/visao-macro/:path*',
  ],
};
