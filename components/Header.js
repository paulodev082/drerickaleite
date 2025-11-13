import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-[#4C0C16]/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative w-14 h-14">
            <Image
              src="/images/ERICKA01.jpg"
              alt="Logo Dra. Ericka Leite"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-[#D9AD6A] font-semibold text-lg">
            Advocacia
          </span>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-10 text-white font-medium">
          <a href="#inicio" className="hover:text-[#D9AD6A] transition">
            Início
          </a>
          <a href="#sobre" className="hover:text-[#D9AD6A] transition">
            Sobre
          </a>
          <a href="#servicos" className="hover:text-[#D9AD6A] transition">
            Serviços
          </a>
          <a href="#contato" className="hover:text-[#D9AD6A] transition">
            Contato
          </a>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-[#D9AD6A] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#4C0C16]/95 backdrop-blur-md border-t border-[#D9AD6A]/20">
          <nav className="flex flex-col items-center space-y-5 py-6 text-white font-medium">
            <a
              href="#inicio"
              className="hover:text-[#D9AD6A] transition"
              onClick={() => setMenuOpen(false)}
            >
              Início
            </a>
            <a
              href="#sobre"
              className="hover:text-[#D9AD6A] transition"
              onClick={() => setMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="hover:text-[#D9AD6A] transition"
              onClick={() => setMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="hover:text-[#D9AD6A] transition"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
