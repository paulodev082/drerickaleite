import Image from "next/image";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section
        id="inicio"
        className="relative flex flex-col md:flex-row items-center justify-between text-white px-6 sm:px-10 md:px-20 pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 min-h-screen bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/banner.jpg')",
          backgroundAttachment: "scroll", // Corrigido: evita bug no mobile
        }}
      >
        {/* Camada escura elegante sobre o banner */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B0909]/95 via-[#4C0C16]/85 to-[#2B0909]/90"></div>

        {/* Efeito de brilho dourado suave */}
        <div className="absolute w-[400px] h-[400px] bg-[#D9AD6A]/10 blur-3xl rounded-full -top-24 -left-24 animate-pulse"></div>

        {/* Conteúdo principal */}
        <motion.div
          className="relative z-10 flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight drop-shadow-lg">
            <span className="text-[#D9AD6A]">Dra.</span>{" "}
            <span className="text-white">Ericka Leite</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-md mx-auto md:mx-0 leading-relaxed">
  Advocacia e Consultoria Jurídica
  <br />
  <span className="text-[#D9AD6A]/90">Ética e Excelência.</span>
</p>
          <div className="w-20 h-[3px] bg-[#D9AD6A] mt-8 rounded-full"></div>

          {/* Botão CTA */}
          <div className="mt-10">
            <a
              href="https://wa.me/5582988587947"
              target="_blank"
              rel="noreferrer"
              className="bg-[#D9AD6A] text-[#4C0C16] px-8 py-3 rounded-md font-semibold text-lg hover:bg-[#e5bb7a] transition"
            >
              Agendar Consulta
            </a>
          </div>
        </motion.div>

        {/* Foto com moldura dourada e brilho */}
        <motion.div
          className="relative z-10 mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-[240px] h-[320px] sm:w-[300px] sm:h-[400px] md:w-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(217,173,106,0.3)] border-2 border-[#D9AD6A]/70 group">
            <Image
              src="/images/hero.jpg"
              alt="Dra. Ericka Leite"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
              className="transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/perfil.jpg"
              alt="Dra. Ericka Leite"
              width={500}
              height={600}
              className="rounded-2xl shadow-xl object-cover"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-[#4C0C16] mb-4">
              Compromisso com a Justiça e a Excelência
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              A <strong>Dra. Ericka Leite</strong> atua com ética, transparência
              e dedicação, oferecendo soluções jurídicas eficazes e
              personalizadas. Seu trabalho é pautado pela confiança, pela
              técnica e pelo compromisso com cada cliente.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Com experiência em diversas áreas do Direito, busca sempre a
              melhor estratégia para garantir segurança jurídica e resultados
              concretos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-semibold text-[#4C0C16]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Áreas de Atuação
          </motion.h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Atuação nas principais áreas do Direito, com acompanhamento
            humanizado e estratégia técnica.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titulo: "Direito de Família",
                texto:
                  "Divórcio, guarda, pensão alimentícia, adoção e reconhecimento de paternidade.",
                icone: "👩‍👧‍👦",
              },
              {
                titulo: "Direito Civil",
                texto:
                  "Contratos, responsabilidade civil, indenizações e assessoria preventiva.",
                icone: "📜",
              },
              {
                titulo: "Direito do Consumidor",
                texto:
                  "Defesa dos direitos do consumidor em casos de cobranças indevidas, produtos com defeito e serviços mal prestados.",
                icone: "🛍️",
              },
              {
                titulo: "Direito Trabalhista",
                texto:
                  "Ações trabalhistas, rescisões, acordos e consultoria para empresas e empregados.",
                icone: "⚖️",
              },
              {
                titulo: "Atuação no Fórum e Tribunais",
                texto:
                  "Representação jurídica em audiências, petições, sustentações orais e acompanhamento de processos.",
                icone: "🏛️",
              },
              {
                titulo: "Consultoria Jurídica Preventiva",
                texto:
                  "Orientações estratégicas para evitar litígios e proteger interesses pessoais e empresariais.",
                icone: "🧾",
              },
            ].map((area, i) => (
              <motion.article
                key={i}
                whileHover={{ y: -8 }}
                className="bg-[#FAF8F5] rounded-2xl p-8 shadow-md hover:shadow-2xl border border-[#f3f3f3] transition"
              >
                <div className="text-4xl mb-3">{area.icone}</div>
                <h3 className="text-xl font-semibold text-[#4C0C16] mb-2">
                  {area.titulo}
                </h3>
                <p className="text-gray-600">{area.texto}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-[#4C0C16] text-white text-center">
        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Entre em Contato
        </motion.h2>
        <p className="text-gray-200 max-w-xl mx-auto mb-8">
          Agende sua consulta e receba uma assessoria jurídica ética e
          personalizada.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:dra.erickaleite@gmail.com"
            className="px-8 py-3 bg-[#D9AD6A] text-[#4C0C16] font-semibold rounded-md shadow-md hover:bg-[#e5bb7a] transition"
          >
            Enviar E-mail
          </a>
          <a
            href="https://wa.me/5582988587947"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-[#D9AD6A] rounded-md text-[#D9AD6A] font-semibold hover:bg-[#D9AD6A] hover:text-[#4C0C16] transition"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* BOTÃO WHATSAPP FIXO */}
      <a
        href="https://wa.me/5582988587947"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="28"
          height="28"
        >
          <path d="M12 0C5.372 0 0 4.912 0 10.969c0 3.012 1.413 5.739 3.73 7.651L2.63 24l5.314-2.786c1.25.353 2.58.543 3.957.543 6.628 0 12-4.912 12-10.969S18.628 0 12 0zM12 20.7c-1.24 0-2.45-.171-3.6-.505l-.257-.074-3.168 1.662.56-3.262-.217-.226C3.572 16.522 2.4 13.842 2.4 10.969 2.4 6.352 6.724 2.7 12 2.7s9.6 3.652 9.6 8.269-4.324 8.269-9.6 8.269z" />
        </svg>
      </a>
    </Layout>
  );
}
