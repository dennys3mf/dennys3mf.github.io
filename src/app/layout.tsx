import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dennys Marquez — Software & AI Engineer | Creative Systems",
  description:
    "Portafolio de Dennys Gabriel Marquez Flores. Desarrollador de Software, IA y Estudiante de Contabilidad en Lima, Perú.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=JetBrains+Mono:wght@400;500;700&family=Parkinsans:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
