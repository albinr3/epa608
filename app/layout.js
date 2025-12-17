import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LangSetter from "./components/LangSetter";
import ClerkProviderWrapper from "./components/ClerkProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Free EPA 608 Practice Test (2025) | HVAC Prep",
  description:
    "Take a free EPA 608 practice test with real exam-style questions, instant feedback, and clear explanations. Start free (20 questions) and unlock 300+ for just $9.99",
  keywords: [
    "EPA 608 simulator",
    "EPA 608 practice",
    "EPA 608 exam questions",
    "EPA 608 practice test",
    "EPA 608 certification",
    "EPA 608 exam",
    "EPA 608 prep",
    "HVAC certification",
    "HVAC technician certification",
    "EPA 608 universal questions",
    "EPA 608 type 1 type 2 type 3",
    "CFC HCFC HFC HFO refrigerants"
  ],
  authors: [{ name: "HVAC Prep" }],
  creator: "HVAC Prep",
  publisher: "HVAC Prep",
  openGraph: {
    title: "Free EPA 608 Practice Test | HVAC Prep",
    description:
      "Practice the EPA 608 exam with exam-style questions: we mark the correct answer instantly and explain why. 300+ questions, real exam mode. Start free.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free EPA 608 Practice Test | HVAC Prep",
    description:
      "Exam-style questions + instant feedback + explanations. Start free and prepare for EPA 608.",
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
    <html lang="en">
      <head>{/* ... */}</head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProviderWrapper>
          <div id="clerk-captcha" style={{ position:'absolute', left:'-9999px', width:'1px', height:'1px', overflow:'hidden', opacity:0, pointerEvents:'none' }} aria-hidden="true" />
          <LangSetter />
          {children}
        </ClerkProviderWrapper>
      </body>
    </html>
  );
}

