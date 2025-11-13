export default function Footer() {
  return (
    <footer className="bg-[#4C0C16] text-white mt-20">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img src="/images/avatar.jpg" alt="logo" width="100" />
          <div>
            <div className="font-semibold text-[#D9AD6A]">Dra.Ericka Leite</div>
            <div className="text-sm">OAB/UF XXXX</div>
          </div>
        </div>
        <div className="text-sm text-gray-300">
          © {new Date().getFullYear()} Dra.Ericka Leite — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
