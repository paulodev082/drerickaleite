// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });

  // Configure transporter with ENV vars
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // ex: smtp.sendgrid.net or smtp.mailgun.org
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Site Dra. Ericka" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_TO, // where form messages go
      subject: `Novo contato: ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Nome:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
