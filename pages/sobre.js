// pages/sobre.js
import Layout from '../components/Layout'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Sobre(){
  return (
    <Layout title="Sobre — Dra. Éricka Leite">
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="rounded-lg overflow-hidden w-full max-w-sm mx-auto golden-ring" style={{borderRadius:12}}>
              <Image src="/images/perfil.jpg" alt="perfil" width={720} height={900} className="w-full object-cover" />
            </div>
          </motion.div>

          <div className="md:col-span-2">
            <h1 className="text-3xl font-semibold">Sobre a Dra.Ericka Leite</h1>
            <p className="mt-4 text-gray-700">Inscrita na OAB/UF XXXX. Formada em Direito pela Universidade XXXX. Atuo com dedicação, priorizando sempre a atenção humana ao cliente e estratégias jurídicas sólidas. Substitua este texto pelo currículo completo, formações e experiências relevantes.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <div className="font-semibold text-[#4C0C16]">Formação</div>
                <div className="text-sm text-gray-600 mt-1">Bacharel em Direito — Universidade XXXX</div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="font-semibold text-[#4C0C16]">Atuação</div>
                <div className="text-sm text-gray-600 mt-1">Consultoria jurídica, processos judiciais e atendimento personalizado.</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  )
}
