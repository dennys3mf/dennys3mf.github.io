import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dennys Marquez — Full Stack Developer | Python, React & AI Integration",
  description:
    "Full Stack Developer & AI Developer from Peru, with a Professional Technical Degree in Software Design and Development from TECSUP. React, TypeScript, Python, Django, Machine Learning & AI Integration.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
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
                const t = localStorage.getItem('brand-theme') || 'light';
                document.documentElement.setAttribute('data-theme', t);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
