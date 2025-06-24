export const getSafeHostname = (): string => {
  const hostname = window.location.hostname === "localhost" ? "cvdigital.com.br" : window.location.hostname;

  if (process.env.NODE_ENV === "development") {
    console.log("🧪 Hostname usado:", hostname);
  }

  return hostname;
};
