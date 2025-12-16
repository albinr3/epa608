import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Simulador EPA 608 en Español | Preguntas Reales y Explicaciones | HVAC Prep",
  description:
    "Simulador interactivo EPA 608 en español: practica con preguntas tipo examen, corrección inmediata, explicaciones claras y modo examen real. Empieza gratis (20 preguntas) y desbloquea 300+ por $12.",
  keywords: [
    "simulador EPA 608 en español",
    "EPA 608 en español",
    "examen EPA 608 preguntas",
    "prueba de práctica EPA 608",
    "certificación EPA 608",
    "examen EPA 608",
    "preparación EPA 608",
    "certificación HVAC",
    "técnico HVAC certificación",
    "preguntas EPA 608 universal",
    "EPA 608 tipo 1 tipo 2 tipo 3",
    "refrigerantes CFC HCFC HFC HFO"
  ],
  authors: [{ name: "HVAC Prep" }],
  creator: "HVAC Prep",
  publisher: "HVAC Prep",
  openGraph: {
    title: "Simulador EPA 608 en Español | Practica con Corrección Inmediata",
    description:
      "Practica el examen EPA 608 con preguntas tipo examen: te marcamos la respuesta correcta al instante y te explicamos el porqué. 300+ preguntas, modo examen real. Empieza gratis.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulador EPA 608 en Español | HVAC Prep",
    description:
      "Preguntas tipo examen + corrección inmediata + explicaciones. Empieza gratis y prepárate para la EPA 608.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
