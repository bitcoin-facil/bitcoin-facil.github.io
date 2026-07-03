import { Link } from "react-router";
import { ChevronRight, CheckCircle, Star, Shield, TrendingUp, Zap, HelpCircle, ExternalLink } from "lucide-react";
import VideoAffiliate from "../components/VideoAffiliate";

const AFFILIATE = "https://www.binance.com/register?ref=11953708";

const PROS = [
  "Maior corretora de criptomoedas do mundo em volume",
  "Suporte ao Pix — depósito e saque instantâneo",
  "Taxa de 0,1% por operação (entre as mais baixas)",
  "App em português com interface intuitiva",
  "Mais de 350 criptomoedas disponíveis",
  "Verificação de identidade rápida (normalmente em minutos)",
  "Funciona 24 horas por dia, 7 dias por semana",
  "Rendimento automático em Bitcoin (Earn)",
];

const CONS = [
  "Plataforma completa pode parecer complexa para iniciantes",
  "Suporte via chat pode demorar em horários de pico",
  "Não tem agência física no Brasil",
];

const FAQ = [
  {
    q: "A Binance é regulamentada no Brasil?",
    a: "A Binance opera no Brasil através da Binance Serviços de Câmbio e Tecnologia Ltda e está em processo de obtenção de licença junto ao Banco Central do Brasil, assim como as demais corretoras de criptomoedas. O Banco Central publicou em 2023 a regulamentação do setor de ativos virtuais no Brasil, e a Binance está em conformidade com as normas vigentes.",
  },
  {
    q: "Qual é o valor mínimo para investir na Binance?",
    a: "O valor mínimo para depositar via Pix na Binance é de R$10. A partir desse valor, você já pode comprar Bitcoin ou outras criptomoedas.",
  },
  {
    q: "Meu dinheiro está seguro na Binance?",
    a: "A Binance possui um fundo de reserva chamado SAFU (Secure Asset Fund for Users) de $1 bilhão para cobrir eventuais perdas. Além disso, usa autenticação em dois fatores, criptografia avançada e guarda a maioria dos ativos em cold wallets (offline). Como qualquer investimento, há riscos — mas a Binance é considerada uma das plataformas mais seguras do mercado.",
  },
  {
    q: "Como faço para sacar dinheiro da Binance para minha conta bancária?",
    a: "Vá em 'Sacar' → 'BRL (Real Brasileiro)' → 'Pix'. Informe a chave Pix da sua conta bancária e o valor. O dinheiro aparece na sua conta em minutos.",
  },
  {
    q: "A Binance tem taxa de custódia?",
    a: "Não. A Binance não cobra taxa de custódia ou mensalidade. Você só paga 0,1% quando realiza operações de compra e venda. Manter seus Bitcoins parados na plataforma é gratuito.",
  },
];

export default function BinanceBrasil() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1.5 text-xs text-[#5a6478] mb-6 flex-wrap">
        <Link to="/" className="hover:text-[#f7931a] transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/melhores-corretoras" className="hover:text-[#f7931a] transition-colors">Corretoras</Link>
        <ChevronRight size={12} />
        <span className="text-[#8892a4]">Binance Brasil</span>
      </nav>

      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/25 text-amber-400 text-[11px] font-mono px-2.5 py-1 rounded-full mb-4">
          <Star size={11} className="fill-amber-400" />
          Análise completa — Julho 2025
        </div>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          BINANCE BRASIL 2025 — VALE A PENA? ANÁLISE COMPLETA
        </h1>
        <p className="text-[#8892a4] text-base leading-relaxed max-w-2xl">
          Análise honesta e detalhada da Binance para o mercado brasileiro. Taxas, segurança, vantagens, desvantagens
          e tudo que você precisa saber antes de criar sua conta.
        </p>
      </div>

      <div className="mb-10">
        <VideoAffiliate
          title="Tutorial Binance: Do Cadastro até a Compra de Bitcoin"
          subtitle="Vídeo gravado no celular mostrando como usar a Binance no Brasil — passo a passo"
        />
      </div>

      {/* Verdict box */}
      <div className="mb-10 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/25 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div>
            <div className="flex items-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className={s <= 5 ? "text-[#f7931a] fill-[#f7931a]" : "text-[#3a4458]"} />
              ))}
            </div>
            <div
              className="text-3xl font-extrabold text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              VEREDICTO: SIM, VALE A PENA
            </div>
          </div>
        </div>
        <p className="text-emerald-300/80 text-sm mt-3 leading-relaxed">
          A Binance é nossa recomendação número 1 para brasileiros que querem comprar Bitcoin. Combina a maior liquidez do mercado,
          taxas baixas, Pix nativo e app em português. Ideal tanto para iniciantes quanto para investidores experientes.
        </p>
      </div>

      <div className="mb-10">
        <p className="text-[#d1d9e8] text-base leading-relaxed mb-4">
          Fundada em 2017 por Changpeng Zhao (CZ), a Binance cresceu rapidamente até se tornar a maior corretora de criptomoedas do mundo por volume de negociações. Hoje, são mais de 200 milhões de usuários em mais de 180 países.
        </p>
        <p className="text-[#d1d9e8] text-base leading-relaxed mb-4">
          No Brasil, a Binance se destacou especialmente após a adoção do Pix como meio de depósito e saque. Isso eliminou a necessidade de TED bancária (que levava dias e tinha custo) e tornou o processo de comprar Bitcoin tão simples quanto fazer uma transferência pelo banco.
        </p>
      </div>

      {/* Pros and cons */}
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-5">
          <h3
            className="text-lg font-bold text-emerald-400 mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            ✓ VANTAGENS
          </h3>
          <ul className="space-y-2">
            {PROS.map((p) => (
              <li key={p} className="flex gap-2 text-sm text-emerald-300/80">
                <CheckCircle size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-rose-500/8 border border-rose-500/20 rounded-xl p-5">
          <h3
            className="text-lg font-bold text-rose-400 mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            ✗ DESVANTAGENS
          </h3>
          <ul className="space-y-2">
            {CONS.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-rose-300/80">
                <span className="text-rose-400 flex-shrink-0 mt-1 text-base leading-none">×</span>
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-rose-500/15">
            <p className="text-[#5a6478] text-xs">
              As desvantagens são pequenas comparadas aos benefícios. Para a maioria dos brasileiros, a Binance continua sendo a melhor opção.
            </p>
          </div>
        </div>
      </div>

      {/* Key metrics */}
      <div className="mb-10 bg-[#111827] border border-[#f7931a]/20 rounded-xl p-6">
        <h2
          className="text-2xl font-bold text-white mb-5"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          BINANCE EM NÚMEROS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {[
            { icon: <TrendingUp size={18} />, val: "200M+", label: "Usuários globais" },
            { icon: <Shield size={18} />, val: "0,1%", label: "Taxa por operação" },
            { icon: <Zap size={18} />, val: "R$10", label: "Depósito mínimo" },
            { icon: <Star size={18} />, val: "350+", label: "Criptomoedas" },
            { icon: <CheckCircle size={18} />, val: "2017", label: "Fundação" },
            { icon: <ExternalLink size={18} />, val: "24/7", label: "Disponibilidade" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <span className="text-[#f7931a]">{s.icon}</span>
              <div>
                <div
                  className="text-xl font-bold text-white leading-none"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {s.val}
                </div>
                <div className="text-[#5a6478] text-xs">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 bg-gradient-to-br from-[#f7931a]/15 to-[#f7931a]/5 border border-[#f7931a]/30 rounded-2xl p-6 text-center">
        <h3
          className="text-2xl font-bold text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          CRIE SUA CONTA NA BINANCE AGORA
        </h3>
        <p className="text-[#8892a4] text-sm mb-5 max-w-md mx-auto">
          Cadastro gratuito, sem mensalidade. Em 10 minutos você pode estar comprando Bitcoin com Pix.
        </p>
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

      <div className="mb-10">
        <h2
          className="text-3xl font-bold text-white mb-6"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          PERGUNTAS FREQUENTES
        </h2>
        <div className="space-y-3">
          {FAQ.map((item) => (
            <div key={item.q} className="bg-[#111827] border border-[rgba(247,147,26,0.12)] rounded-xl p-5">
              <div className="flex gap-3">
                <HelpCircle size={16} className="text-[#f7931a] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-2">{item.q}</h4>
                  <p className="text-[#8892a4] text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#f7931a]/15 pt-8">
        <h3
          className="text-xl font-bold text-white mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          LEIA TAMBÉM
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: "Como Criar Conta na Binance — Tutorial Completo", href: "/melhores-corretoras/como-criar-conta-binance" },
            { title: "Como Comprar Bitcoin com Pix na Binance", href: "/como-comprar-bitcoin/com-pix" },
            { title: "Taxas da Binance Brasil — Análise Completa", href: "/melhores-corretoras/taxas-binance" },
            { title: "Como Vender Bitcoin e Sacar para o Banco", href: "/como-vender-bitcoin/sacar-para-banco" },
          ].map((a) => (
            <Link
              key={a.href}
              to={a.href}
              className="flex items-center gap-2 bg-[#111827] border border-[rgba(247,147,26,0.12)] hover:border-[#f7931a]/40 rounded-lg px-4 py-3 text-sm text-[#d1d9e8] hover:text-white transition-all"
            >
              <ChevronRight size={14} className="text-[#f7931a] flex-shrink-0" />
              {a.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
