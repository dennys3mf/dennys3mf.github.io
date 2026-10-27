import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  JetBrains_Mono,
  Architects_Daughter,
  Orbitron,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading-var",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-var",
  display: "swap",
});

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent-var",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-tech-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dennys3mf.github.io"),
  title: "Dennys Marquez — Full Stack Developer | Python, React & AI Integration",
  description:
    "Full Stack Developer & AI Developer from Peru, with a Professional Technical Degree in Software Design and Development from TECSUP. React, TypeScript, Python, Django, Machine Learning & AI Integration.",
  keywords: [
    "Dennys Marquez",
    "Full Stack Developer",
    "Python Developer",
    "React Developer",
    "AI Integration",
    "Machine Learning",
    "TECSUP",
    "Next.js",
    "Django",
    "Peru Developer",
    "ahorratiempo.pe",
  ],
  authors: [{ name: "Dennys Gabriel Marquez Flores", url: "https://dennys3mf.github.io" }],
  creator: "Dennys Marquez",
  openGraph: {
    type: "website",
    locale: "es_PE",
    alternateLocale: "en_US",
    url: "https://dennys3mf.github.io",
    title: "Dennys Marquez — Full Stack Developer | Python, React & AI Integration",
    description:
      "Building digital products that make an impact. Full Stack Engineer specializing in React, TypeScript, Python, Django, and Machine Learning / AI Integration.",
    siteName: "Dennys Marquez Portfolio",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Dennys Marquez — Full Stack Developer | Python, React & AI Integration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennys Marquez — Full Stack Developer | Python, React & AI Integration",
    description:
      "Building digital products that make an impact. Full Stack Engineer specializing in React, TypeScript, Python, Django, and Machine Learning / AI Integration.",
    images: ["/images/og-cover.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://dennys3mf.github.io/#person",
      name: "Dennys Gabriel Marquez Flores",
      alternateName: "Dennys Marquez",
      url: "https://dennys3mf.github.io",
      image: "https://dennys3mf.github.io/images/og-cover.png",
      jobTitle: "Full Stack Developer & AI Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Ahorratiempo.pe",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "TECSUP",
        sameAs: "https://www.tecsup.edu.pe",
      },
      knowsAbout: [
        "Full Stack Web Development",
        "Python",
        "React",
        "Next.js",
        "TypeScript",
        "Django",
        "Machine Learning",
        "Voice AI",
        "Artificial Intelligence Integration",
        "Cloud Architectures",
        "Flutter & Dart",
      ],
      sameAs: [
        "https://github.com/dennys3mf",
        "https://ahorratiempo.pe",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://dennys3mf.github.io/#website",
      url: "https://dennys3mf.github.io",
      name: "Dennys Marquez — Portfolio",
      publisher: {
        "@id": "https://dennys3mf.github.io/#person",
      },
      inLanguage: ["en", "es"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} ${architectsDaughter.variable} ${orbitron.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                localStorage.removeItem('brand-theme');
                document.documentElement.setAttribute('data-theme', 'light');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
