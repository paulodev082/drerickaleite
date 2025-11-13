// components/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  async function send(e) {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setStatus("sent");
    else setStatus("error");
  }

  return (
    <form onSubmit={send} className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <label className="block">Nome*</label>
      <input required className="w-full border p-2 rounded mb-3" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
      <label className="block">Email*</label>
      <input required type="email" className="w-full border p-2 rounded mb-3" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
      <label className="block">Mensagem*</label>
      <textarea required className="w-full border p-2 rounded mb-3 h-36" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
      <div className="flex items-center gap-3">
        <button type="submit" className="btn-primary">Enviar</button>
        {status === "sending" && <span className="text-sm text-gray-500">Enviando...</span>}
        {status === "sent" && <span className="text-sm text-green-600">Enviado. Obrigado!</span>}
        {status === "error" && <span className="text-sm text-red-600">Erro ao enviar.</span>}
      </div>
    </form>
  );
}
