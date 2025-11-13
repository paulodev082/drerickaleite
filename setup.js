// setup.js
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

console.log(chalk.cyan.bold("\n🔧 Iniciando configuração automática do projeto Dra. Ericka Leite..."));

const rootDir = process.cwd();
const envPath = path.join(rootDir, ".env.local");
const nextConfigPath = path.join(rootDir, "next.config.js");

function safeWriteFile(filePath, content, label) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(chalk.green(`✅ ${label} criado com sucesso!`));
  } else {
    console.log(chalk.yellow(`⚠️ ${label} já existe — não sobrescrito.`));
  }
}

const nextConfigContent = `
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
        ],
      },
    ];
  },
};
module.exports = nextConfig;
`;

safeWriteFile(nextConfigPath, nextConfigContent.trim(), "next.config.js");

if (!fs.existsSync(envPath)) {
  const envTemplate = `# .env.local - Configurações de e-mail (SMTP)
SMTP_HOST=smtp.seudominio.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=usuario@seudominio.com
SMTP_PASS=senha_segura
SMTP_FROM=dra@seudominio.com
CONTACT_TO=dra.erickaleite@gmail.com
`;
  fs.writeFileSync(envPath, envTemplate);
  console.log(chalk.green("✅ .env.local criado com variáveis SMTP padrão!"));
} else {
  console.log(chalk.yellow("⚠️ .env.local já existe — não sobrescrito."));
}

console.log(chalk.green.bold("\n🎉 Configuração concluída com sucesso!"));
console.log(chalk.cyan("👉 Agora rode: npm run dev\n"));
