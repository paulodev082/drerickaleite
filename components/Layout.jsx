import Head from "next/head";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  title = "Dra. Ericka Leite — Advocacia & Consultoria Jurídica",
  description = "Atuação ética, moderna e estratégica nas áreas Cível, Familiar, Trabalhista e do Consumidor. Atendimento humanizado e técnico com excelência.",
}) {
  const siteUrl = "https://seudominio.com";
  const imagePreview = `${siteUrl}/images/hero.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Dra. Ericka Leite — Advocacia e Consultoria Jurídica",
    "image": imagePreview,
    "url": siteUrl,
    "logo": `${siteUrl}/images/ERICKA01.jpg`,
    "founder": {
      "@type": "Person",
      "name": "Dra. Ericka Leite",
      "jobTitle": "Advogada",
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4C0C16" />
        <meta property="og:image" content={imagePreview} />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header />

      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pt-20 bg-[#FAF8F5] text-[#2B0A0A] overflow-x-hidden w-full max-w-[100vw] min-h-[calc(100vh-140px)]"
      >
        {children}
      </motion.main>

      <Footer />
    </>
  );
}
