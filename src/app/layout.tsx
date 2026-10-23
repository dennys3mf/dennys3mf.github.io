import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dennys Marquez — Full Stack Developer & AI Engineer | Global Portfolio",
  description:
    "Portafolio profesional de Dennys Gabriel Marquez Flores. Full Stack Developer & AI Engineer especializado en productos web y móviles escalables, Cloudflare Workers, React 18, Flutter y sistemas de IA en producción.",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                localStorage.removeItem('theme');
                document.documentElement.setAttribute('data-theme', 'light');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
