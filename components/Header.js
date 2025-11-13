import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#4C0C16]/95 shadow-lg backdrop-blur-md border-b border-[#D9AD6A]/80"
          : "bg-[#4C0C16] border-b border-[#D9AD6A]/30"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-3 px-6 md:px-12">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-16 h-16 transform scale-110">
            <Image
              src="/images/avatar.jpg"
              alt="Logo Dra. Ericka Leite"
              fill
              className="object-contain rounded-full border-2 border-[#D9AD6A]/90 shadow-md"
            />
          </div>
          <span className="text-[#D9AD6A] text-lg font-semibold tracking-widest">
            Advocacia
          </span>
        </Link>

        {/* LINKS */}
        <ul className="hidden md:flex gap-10 text-[#FAF8F5] font-medium">
          {[
            { name: "Início", href: "#inicio" },
            { name: "Sobre", href: "#sobre" },
            { name: "Serviços", href: "#servicos" },
            { name: "Contato", href: "#contato" },
          ].map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className="relative group transition-colors"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-3px] w-0 h-[2px] bg-[#D9AD6A] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
