import type { Metadata } from "next";
import {
  Newsreader,
  Manrope,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-var",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading-var",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-var",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dennys3mf.github.io"),
  title: "Dennys Marquez | Full Stack Developer",
  description:
    "Explore the portfolio of Dennys Marquez, a Full Stack Developer building intuitive web applications and practical digital solutions. View projects, experience, and services.",
  keywords: [
    "Dennys Marquez",
    "Dennys Gabriel Marquez Flores",
    "Full Stack Developer",
    "Product Engineer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Python",
    "Peru Developer",
    "ahorratiempo.pe",
    "TECSUP",
  ],
  authors: [{ name: "Dennys Marquez", url: "https://dennys3mf.github.io" }],
  creator: "Dennys Marquez",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_PE",
    url: "https://dennys3mf.github.io",
    title: "Dennys Marquez | Full Stack Developer",
    description:
      "Building intuitive digital products that solve real problems. Full Stack Developer combining engineering, product thinking, and user experience.",
    siteName: "Dennys Marquez Portfolio",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Dennys Marquez — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dennys Marquez | Full Stack Developer",
    description:
      "Building intuitive digital products that solve real problems. Full Stack Developer combining engineering, product thinking, and user experience.",
    images: ["/images/og-cover.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://dennys3mf.github.io/#person",
      name: "Dennys Marquez",
      alternateName: ["Dennys Gabriel Marquez Flores", "Gabriel Marquez"],
      url: "https://dennys3mf.github.io",
      image: "https://dennys3mf.github.io/images/logo.png",
      jobTitle: "Full Stack Developer",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PE",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "TECSUP",
          sameAs: "https://www.tecsup.edu.pe",
        },
        {
          "@type": "EducationalOrganization",
          name: "Universidad Continental",
        },
      ],
      knowsAbout: [
        "Full Stack Web Development",
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Python",
        "Node.js",
        "Product Thinking",
        "User Experience Design",
        "Cloud & APIs",
      ],
      sameAs: [
        "https://github.com/dennys3mf",
        "https://www.linkedin.com/in/dennys-gabriel-marquez-flores",
        "https://ahorratiempo.pe",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://dennys3mf.github.io/#website",
      url: "https://dennys3mf.github.io",
      name: "Dennys Marquez — Full Stack Developer",
      publisher: {
        "@type": "Person",
        "@id": "https://dennys3mf.github.io/#person",
        name: "Dennys Marquez",
        logo: {
          "@type": "ImageObject",
          url: "https://dennys3mf.github.io/images/logo.png",
        },
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
      className={`${newsreader.variable} ${manrope.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skipToContent">
          Skip to main content
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
