import React, { Suspense } from "react";
import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Gabriel Márquez | Full Stack Developer",
  description:
    "Start a conversation with Gabriel Márquez about hiring opportunities, software development projects, or technical consulting.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", background: "var(--background)" }} />}>
      <ContactClient />
    </Suspense>
  );
}
