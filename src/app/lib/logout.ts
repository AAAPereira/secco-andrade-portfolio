// lib/logout.ts

export function logoutAndGoToRating(router: any) {
  logout();
  router.push("/avaliacao-site");
}

export function logoutAndRedirect(url: string) {
  logout();
  window.location.href = url;
}

function logout() {
  document.cookie = "activeUser=; path=/; max-age=0";

  sessionStorage.removeItem("firstName");
  sessionStorage.removeItem("isOwner");
  sessionStorage.removeItem("termosAceitos");
  sessionStorage.removeItem("activeUser");
  sessionStorage.removeItem("generatedCode");
  sessionStorage.removeItem("generatedAt");
  sessionStorage.removeItem("aceitePending");
}