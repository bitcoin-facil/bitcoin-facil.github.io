import { Link } from "react-router";
import { TrendingUp, Shield, Zap, BookOpen, Star, DollarSign, FileText, ChevronRight, Bitcoin } from "lucide-react";
import VideoAffiliate from "../components/VideoAffiliate";

const AFFILIATE = "https://www.binance.com/register?ref=11953708";

const CATEGORIES = [
  {
    icon: <BookOpen size={22} />,
    title: "O que é Bitcoin",
    desc: "Entenda como funciona, por que existe e por que tanta gente está comprando.",
    href: "/o-que-e-bitcoin",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/25",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Como Comprar Bitcoin",
    desc: "Guia passo a passo para comprar Bitcoin com Pix, pelo celular, com segurança.",
    href: "/como-comprar-bitcoin",
    color: "from-[#f7931a]/20 to-[#f7931a]/5",
    border: "border-[#f7931a]/35",
    highlight: true,
  },
  {
    icon: <Star size={22} />,
    title: "Melhores Corretoras",
    desc: "Comparativo completo das corretoras de Bitcoin que operam no Brasil.",
    href: "/melhores-corretoras",
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/25",
  },
  {
    icon: <DollarSign size={22} />,
    title: "Como Vender Bitcoin",
    desc: "Converta seus Bitcoins em reais e transfira para o banco via Pix.",
    href: "/como-vender-bitcoin",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/25",
  },
  {
    icon: <Shield size={22} />,
    title: "Segurança em Bitcoin",
    desc: "Proteja seus investimentos. Saiba como evitar golpes e hackers.",
    href: "/seguranca",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/25",
  },
  {
    icon: <FileText size={22} />,
    title: "Bitcoin e Imposto de Renda",
    desc: "Como declarar Bitcoin no IR e quais os impostos sobre os seus lucros.",
    href: "/bitcoin-imposto-renda",
    color: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/25",
  },
];

const FEATURED = [
  { title: "Comprar Bitcoin com Pix — Tutorial Completo", href: "/como-comprar-bitcoin/com-pix", badge: "Mais lido" },
  { title: "Como Criar Conta na Binance Passo a Passo", href: "/melhores-corretoras/como-criar-conta-binance", badge: "Iniciantes" },
  { title: "Binance é Confiável? Análise Completa 2025", href: "/melhores-corretoras/binance-brasil", badge: "Popular" },
  { title: "Bitcoin Vale a Pena Comprar em 2025?", href: "/o-que-e-bitcoin/vale-a-pena", badge: "Análise" },
  { title: "Como Comprar Bitcoin com Pouco Dinheiro (R$50)", href: "/como-comprar-bitcoin/com-pouco-dinheiro", badge: "Iniciantes" },
  { title: "Como Declarar Bitcoin no Imposto de Renda", href: "/bitcoin-imposto-renda/como-declarar", badge: "IR 2025" },
];

const STEPS = [
  {
    n: "01",
    title: "Crie sua conta gratuita",
    desc: "Cadastro na Binance em 5 minutos. Precisa de CPF, e-mail e uma foto do documento.",
  },
  {
    n: "02",
    title: "Deposite via Pix",
    desc: "Faça um Pix de qualquer valor (mínimo R$10) e o dinheiro cai na conta em segundos.",
  },
  {
    n: "03",
    title: "Compre seu Bitcoin",
    desc: "Toque em 'Comprar', escolha Bitcoin (BTC) e pronto. Você já é um investidor.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f7931a]/8 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7931a]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#f7931a]/10 border border-[#f7931a]/25 text-[#f7931a] text-xs font-mono px-3 py-1.5 rounded-full mb-6">
              <Bitcoin size={12} />
              Guia Completo para Brasileiros — 2025
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-none mb-6"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              COMO COMPRAR{" "}
              <span className="text-[#f7931a]">BITCOIN</span>{" "}
              <br className="hidden sm:block" />
              COM PIX NO BRASIL
            </h1>

            <p className="text-[#8892a4] text-lg mb-8 leading-relaxed max-w-2xl">
              Tutorial em vídeo + guia escrito completo. Aprenda a criar conta na Binance, comprar Bitcoin com Pix
              e vender de volta para reais — tudo pelo celular, em menos de 10 minutos.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={AFFILIATE}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-center gap-2 bg-[#f7931a] hover:bg-[#e8821a] text-[#0a0d16] font-extrabold text-base px-6 py-3.5 rounded-xl transition-all active:scale-95"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                <Zap size={16} />
                CRIAR CONTA GRÁTIS NA BINANCE
              </a>
              <Link
                to="/como-comprar-bitcoin/com-pix"
                className="flex items-center gap-2 border border-[#f7931a]/40 text-[#f7931a] hover:bg-[#f7931a]/10 font-semibold text-sm px-5 py-3.5 rounded-xl transition-all"
              >
                Ver tutorial completo <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 steps */}
      <section className="border-y border-[#f7931a]/12 bg-[#0d111e]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid sm:grid-cols-3 gap-px bg-[#f7931a]/10 rounded-xl overflow-hidden">
            {STEPS.map((s, i) => (
              <div key={s.n} className={`bg-[#0d111e] p-6 ${i > 0 ? "sm:border-l border-[#f7931a]/10" : ""}`}>
                <div
                  className="text-4xl font-extrabold text-[#f7931a]/20 mb-3 leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {s.n}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-[#5a6478] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video + CTA */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center mb-8">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            ASSISTA O TUTORIAL COMPLETO
          </h2>
          <p className="text-[#8892a4] text-sm">
            Vídeo gravado no celular mostrando cada passo — do cadastro até a compra do Bitcoin
          </p>
        </div>
        <VideoAffiliate variant="hero" />
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2
          className="text-3xl font-extrabold text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          TUDO SOBRE BITCOIN EM PORTUGUÊS
        </h2>
        <p className="text-[#8892a4] text-sm mb-8">
          Guias completos sobre todos os temas — do básico ao avançado
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              to={cat.href}
              className={`group relative rounded-xl border bg-gradient-to-br p-5 transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-[#f7931a]/10 ${cat.color} ${cat.border}`}
            >
              <div className={`mb-3 ${cat.highlight ? "text-[#f7931a]" : "text-white/70"}`}>
                {cat.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-1.5 group-hover:text-[#f7931a] transition-colors">
                {cat.title}
              </h3>
              <p className="text-[#5a6478] text-xs leading-relaxed">{cat.desc}</p>
              <ChevronRight
                size={14}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f7931a]/0 group-hover:text-[#f7931a]/70 transition-all group-hover:right-3"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Featured articles */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2
          className="text-3xl font-extrabold text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          ARTIGOS EM DESTAQUE
        </h2>
        <p className="text-[#8892a4] text-sm mb-8">Os mais acessados pelos brasileiros</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {FEATURED.map((a) => (
            <Link
              key={a.href}
              to={a.href}
              className="group flex items-start gap-3 bg-[#111827] border border-[rgba(247,147,26,0.12)] hover:border-[#f7931a]/40 rounded-xl p-4 transition-all"
            >
              <FileText size={16} className="text-[#f7931a]/60 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[10px] font-mono text-[#f7931a] bg-[#f7931a]/10 px-1.5 py-0.5 rounded mb-1.5">
                  {a.badge}
                </span>
                <p className="text-[#d1d9e8] text-sm font-medium leading-snug group-hover:text-white transition-colors">
                  {a.title}
                </p>
              </div>
              <ChevronRight size={14} className="text-[#f7931a]/30 group-hover:text-[#f7931a]/70 flex-shrink-0 mt-1 transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* Trust bar */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-gradient-to-r from-[#f7931a]/10 via-[#111827] to-[#f7931a]/10 border border-[#f7931a]/20 rounded-2xl p-8 text-center">
          <h2
            className="text-2xl font-extrabold text-white mb-2"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            POR QUE A BINANCE É A MELHOR ESCOLHA PARA BRASILEIROS?
          </h2>
          <p className="text-[#8892a4] text-sm mb-8 max-w-xl mx-auto">
            A maior corretora de criptomoedas do mundo, disponível em português, com suporte a Pix.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
            {[
              { val: "200M+", label: "Usuários no mundo" },
              { val: "R$10", label: "Compra mínima" },
              { val: "24/7", label: "Suporte disponível" },
              { val: "0%", label: "Taxa de cadastro" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-3xl font-extrabold text-[#f7931a] mb-1"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {s.val}
                </div>
                <div className="text-[#5a6478] text-xs">{s.label}</div>
              </div>
            ))}
          </div>
          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 bg-[#f7931a] hover:bg-[#e8821a] text-[#0a0d16] font-extrabold text-base px-8 py-4 rounded-xl transition-all active:scale-95"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            ABRIR CONTA GRÁTIS NA BINANCE →
          </a>
        </div>
      </section>
    </div>
  );
}
