import { Outlet, Link, useLocation } from "react-router";
import { Bitcoin, Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";

const AFFILIATE = "https://www.binance.com/register?ref=11953708";

const NAV = [
  { label: "O que é Bitcoin", href: "/o-que-e-bitcoin" },
  { label: "Como Comprar", href: "/como-comprar-bitcoin" },
  { label: "Corretoras", href: "/melhores-corretoras" },
  { label: "Como Vender", href: "/como-vender-bitcoin" },
  { label: "Segurança", href: "/seguranca" },
  { label: "Imposto de Renda", href: "/bitcoin-imposto-renda" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0a0d16] flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <header className="border-b border-[#f7931a]/20 bg-[#0a0d16]/95 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center h-16 gap-4">
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-[#f7931a] flex items-center justify-center">
                <Bitcoin size={18} className="text-[#0a0d16]" />
              </div>
              <span
                className="text-white font-extrabold text-lg leading-none"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                BITCOIN FÁCIL
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 ml-4 flex-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors whitespace-nowrap ${
                    location.pathname.startsWith(item.href)
                      ? "text-[#f7931a] bg-[#f7931a]/10"
                      : "text-[#8892a4] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href={AFFILIATE}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="ml-auto hidden sm:flex items-center gap-1.5 bg-[#f7931a] hover:bg-[#e8821a] text-[#0a0d16] font-bold text-sm px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Abrir Conta Grátis
            </a>

            <button
              className="lg:hidden ml-auto text-[#8892a4] hover:text-white p-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-[#f7931a]/15 bg-[#0f1623] px-4 py-4">
            <nav className="flex flex-col gap-1 mb-4">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-md text-sm text-[#d1d9e8] hover:text-white hover:bg-white/5 transition-colors"
                >
                  <ChevronRight size={14} className="text-[#f7931a]" />
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={AFFILIATE}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block w-full text-center bg-[#f7931a] hover:bg-[#e8821a] text-[#0a0d16] font-bold text-sm px-4 py-3 rounded-lg transition-colors"
            >
              Abrir Conta Grátis na Binance
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-[#f7931a]/15 bg-[#080b12] mt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-md bg-[#f7931a] flex items-center justify-center">
                  <Bitcoin size={15} className="text-[#0a0d16]" />
                </div>
                <span className="text-white font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  BITCOIN FÁCIL
                </span>
              </div>
              <p className="text-[#5a6478] text-xs leading-relaxed">
                Guias completos e tutoriais em português para brasileiros que querem investir em Bitcoin com segurança.
              </p>
            </div>
            <div>
              <h4 className="text-[#f7931a] text-xs font-mono uppercase tracking-wider mb-3">Aprender</h4>
              <ul className="space-y-2">
                {[
                  { label: "O que é Bitcoin", href: "/o-que-e-bitcoin" },
                  { label: "Como comprar Bitcoin", href: "/como-comprar-bitcoin" },
                  { label: "Bitcoin para iniciantes", href: "/como-comprar-bitcoin/para-iniciantes" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-[#8892a4] hover:text-white text-xs transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#f7931a] text-xs font-mono uppercase tracking-wider mb-3">Comprar</h4>
              <ul className="space-y-2">
                {[
                  { label: "Comprar com Pix", href: "/como-comprar-bitcoin/com-pix" },
                  { label: "Criar conta na Binance", href: "/melhores-corretoras/como-criar-conta-binance" },
                  { label: "Binance Brasil", href: "/melhores-corretoras/binance-brasil" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-[#8892a4] hover:text-white text-xs transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#f7931a] text-xs font-mono uppercase tracking-wider mb-3">Parceiro Oficial</h4>
              <p className="text-[#5a6478] text-xs mb-3">
                Site afiliado à Binance. Ao criar sua conta pelo nosso link você apoia o nosso conteúdo gratuito.
              </p>
              <a
                href={AFFILIATE}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex bg-[#f7931a] hover:bg-[#e8821a] text-[#0a0d16] font-bold text-xs px-3 py-2 rounded-lg transition-colors"
              >
                Criar Conta Grátis →
              </a>
            </div>
          </div>
          <div className="border-t border-[#f7931a]/10 pt-6 flex flex-col sm:flex-row gap-2 items-start sm:items-center justify-between">
            <p className="text-[#3a4458] text-xs">
              © 2025 Bitcoin Fácil. Conteúdo educacional — não é consultoria financeira.
            </p>
            <p className="text-[#3a4458] text-xs">
              Links de afiliado: ao se cadastrar pela Binance você nos apoia sem custo adicional.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
