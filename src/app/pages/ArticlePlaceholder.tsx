import { Link, useLocation } from "react-router";
import { ChevronRight, Construction } from "lucide-react";
import VideoAffiliate from "../components/VideoAffiliate";

const AFFILIATE = "https://www.binance.com/register?ref=11953708";

const PAGE_MAP: Record<string, { title: string; desc: string; parent: string; parentLabel: string }> = {
  "/o-que-e-bitcoin": {
    title: "O que é Bitcoin? Guia Completo para Iniciantes",
    desc: "Tudo o que você precisa saber sobre Bitcoin — como funciona, por que existe e por que milhões de pessoas estão investindo.",
    parent: "/",
    parentLabel: "Home",
  },
  "/o-que-e-bitcoin/como-funciona": {
    title: "Como o Bitcoin Funciona — Blockchain Explicado",
    desc: "Entenda de forma simples como o Bitcoin funciona, o que é blockchain e por que o Bitcoin é considerado ouro digital.",
    parent: "/o-que-e-bitcoin",
    parentLabel: "O que é Bitcoin",
  },
  "/o-que-e-bitcoin/historico-de-preco": {
    title: "Histórico do Preço do Bitcoin em Reais",
    desc: "Veja a evolução do preço do Bitcoin desde 2009 até hoje, com análise de cada ciclo de alta e baixa.",
    parent: "/o-que-e-bitcoin",
    parentLabel: "O que é Bitcoin",
  },
  "/o-que-e-bitcoin/vale-a-pena": {
    title: "Bitcoin Vale a Pena Comprar em 2025?",
    desc: "Análise completa para você decidir se vale a pena investir em Bitcoin agora, com os riscos e oportunidades do momento.",
    parent: "/o-que-e-bitcoin",
    parentLabel: "O que é Bitcoin",
  },
  "/o-que-e-bitcoin/para-que-serve": {
    title: "Para que Serve o Bitcoin? Usos e Aplicações",
    desc: "Descubra para que o Bitcoin realmente serve além de investimento — pagamentos, reserva de valor e muito mais.",
    parent: "/o-que-e-bitcoin",
    parentLabel: "O que é Bitcoin",
  },
  "/como-comprar-bitcoin": {
    title: "Como Comprar Bitcoin no Brasil — Guia Completo 2025",
    desc: "Hub completo com todos os tutoriais sobre como comprar Bitcoin no Brasil — com Pix, pelo celular, com segurança.",
    parent: "/",
    parentLabel: "Home",
  },
  "/como-comprar-bitcoin/para-iniciantes": {
    title: "Como Comprar Bitcoin pela Primeira Vez — Guia para Iniciantes",
    desc: "Guia zero a Bitcoin para quem nunca investiu. Explicação simples, passo a passo, sem jargões técnicos.",
    parent: "/como-comprar-bitcoin",
    parentLabel: "Como Comprar Bitcoin",
  },
  "/como-comprar-bitcoin/com-pouco-dinheiro": {
    title: "Como Comprar Bitcoin com Pouco Dinheiro — A partir de R$10",
    desc: "Saiba como começar a investir em Bitcoin com pouco dinheiro. Com apenas R$10 você já pode ter uma fração de Bitcoin.",
    parent: "/como-comprar-bitcoin",
    parentLabel: "Como Comprar Bitcoin",
  },
  "/como-comprar-bitcoin/pelo-celular": {
    title: "Como Comprar Bitcoin pelo Celular — Tutorial App Binance",
    desc: "Tutorial completo mostrando como comprar Bitcoin pelo celular usando o aplicativo da Binance.",
    parent: "/como-comprar-bitcoin",
    parentLabel: "Como Comprar Bitcoin",
  },
  "/como-comprar-bitcoin/com-seguranca": {
    title: "Como Comprar Bitcoin com Segurança — Dicas Essenciais",
    desc: "Aprenda as melhores práticas de segurança para comprar e guardar Bitcoin sem risco de perder seu dinheiro.",
    parent: "/como-comprar-bitcoin",
    parentLabel: "Como Comprar Bitcoin",
  },
  "/como-comprar-bitcoin/com-cartao-de-credito": {
    title: "Como Comprar Bitcoin com Cartão de Crédito no Brasil",
    desc: "Veja como comprar Bitcoin com cartão de crédito no Brasil, quais corretoras aceitam e quais as taxas envolvidas.",
    parent: "/como-comprar-bitcoin",
    parentLabel: "Como Comprar Bitcoin",
  },
  "/melhores-corretoras": {
    title: "Melhores Corretoras de Bitcoin no Brasil 2025",
    desc: "Comparativo completo das melhores corretoras de Bitcoin para brasileiros. Veja taxas, segurança e avaliações.",
    parent: "/",
    parentLabel: "Home",
  },
  "/melhores-corretoras/binance-e-confiavel": {
    title: "Binance é Confiável? Análise de Segurança",
    desc: "Análise detalhada da confiabilidade e segurança da Binance para o mercado brasileiro.",
    parent: "/melhores-corretoras",
    parentLabel: "Corretoras",
  },
  "/melhores-corretoras/taxas-binance": {
    title: "Taxas da Binance Brasil 2025 — Quanto Custa?",
    desc: "Guia completo de todas as taxas da Binance: compra, venda, depósito, saque e conversão.",
    parent: "/melhores-corretoras",
    parentLabel: "Corretoras",
  },
  "/como-vender-bitcoin": {
    title: "Como Vender Bitcoin e Receber em Reais",
    desc: "Guia completo de como vender Bitcoin, converter em reais e transferir para sua conta bancária via Pix.",
    parent: "/",
    parentLabel: "Home",
  },
  "/como-vender-bitcoin/converter-em-reais": {
    title: "Como Converter Bitcoin em Reais — Passo a Passo",
    desc: "Tutorial de como converter seus Bitcoins em reais brasileiros de forma simples e rápida.",
    parent: "/como-vender-bitcoin",
    parentLabel: "Como Vender Bitcoin",
  },
  "/como-vender-bitcoin/sacar-para-banco": {
    title: "Como Sacar Bitcoin para Conta Bancária via Pix",
    desc: "Aprenda como sacar o dinheiro da venda dos seus Bitcoins diretamente para sua conta bancária via Pix.",
    parent: "/como-vender-bitcoin",
    parentLabel: "Como Vender Bitcoin",
  },
  "/como-vender-bitcoin/melhor-hora": {
    title: "Qual a Melhor Hora para Vender Bitcoin?",
    desc: "Estratégias para decidir quando vender seu Bitcoin e maximizar seus lucros.",
    parent: "/como-vender-bitcoin",
    parentLabel: "Como Vender Bitcoin",
  },
  "/seguranca": {
    title: "Segurança em Bitcoin — Como Proteger seus Investimentos",
    desc: "Guias de segurança para quem investe em Bitcoin. Aprenda a se proteger de golpes, hackers e fraudes.",
    parent: "/",
    parentLabel: "Home",
  },
  "/seguranca/como-proteger-bitcoin": {
    title: "Como Proteger seu Bitcoin contra Golpes e Hackers",
    desc: "Melhores práticas de segurança para manter seus Bitcoins protegidos de ataques e fraudes.",
    parent: "/seguranca",
    parentLabel: "Segurança",
  },
  "/seguranca/golpes-com-bitcoin": {
    title: "Golpes com Bitcoin no Brasil — Como se Proteger",
    desc: "Conheça os principais golpes com Bitcoin no Brasil e aprenda a identificá-los antes de cair em fraudes.",
    parent: "/seguranca",
    parentLabel: "Segurança",
  },
  "/seguranca/carteira-bitcoin": {
    title: "Carteira de Bitcoin — Custodial vs Self-Custody",
    desc: "Entenda a diferença entre carteiras custodiais (corretoras) e self-custody (carteira própria) e qual é a melhor para você.",
    parent: "/seguranca",
    parentLabel: "Segurança",
  },
  "/bitcoin-imposto-renda": {
    title: "Bitcoin e Imposto de Renda — Guia Completo",
    desc: "Tudo sobre Bitcoin e Imposto de Renda no Brasil. Como declarar, quais impostos pagar e quando é isento.",
    parent: "/",
    parentLabel: "Home",
  },
  "/bitcoin-imposto-renda/como-declarar": {
    title: "Como Declarar Bitcoin no Imposto de Renda 2025",
    desc: "Passo a passo completo de como declarar Bitcoin e outras criptomoedas no Imposto de Renda 2025.",
    parent: "/bitcoin-imposto-renda",
    parentLabel: "Imposto de Renda",
  },
  "/bitcoin-imposto-renda/quanto-pagar": {
    title: "Imposto sobre Lucro com Bitcoin — Alíquotas e Isenções",
    desc: "Saiba quanto de imposto você paga ao vender Bitcoin com lucro e quando a venda é isenta de IR.",
    parent: "/bitcoin-imposto-renda",
    parentLabel: "Imposto de Renda",
  },
};

export default function ArticlePlaceholder() {
  const location = useLocation();
  const path = location.pathname.replace(/\/$/, "") || "/";
  const page = PAGE_MAP[path] ?? {
    title: "Artigo em Breve",
    desc: "Este artigo está sendo preparado com todo o cuidado para você.",
    parent: "/",
    parentLabel: "Home",
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1.5 text-xs text-[#5a6478] mb-6 flex-wrap">
        <Link to="/" className="hover:text-[#f7931a] transition-colors">Home</Link>
        {page.parent !== "/" && (
          <>
            <ChevronRight size={12} />
            <Link to={page.parent} className="hover:text-[#f7931a] transition-colors">{page.parentLabel}</Link>
          </>
        )}
        <ChevronRight size={12} />
        <span className="text-[#8892a4] truncate max-w-[200px]">{page.title.split(" — ")[0]}</span>
      </nav>

      <div className="mb-8">
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {page.title.toUpperCase()}
        </h1>
        <p className="text-[#8892a4] text-base leading-relaxed max-w-2xl">{page.desc}</p>
      </div>

      <div className="mb-10">
        <VideoAffiliate />
      </div>

      <div className="bg-[#111827] border border-dashed border-[#f7931a]/25 rounded-xl p-10 text-center mb-10">
        <Construction size={32} className="text-[#f7931a]/40 mx-auto mb-4" />
        <h3
          className="text-xl font-bold text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          ARTIGO COMPLETO EM BREVE
        </h3>
        <p className="text-[#5a6478] text-sm max-w-sm mx-auto">
          Estamos preparando um artigo detalhado sobre este tema. Enquanto isso, assista o vídeo tutorial acima
          e crie sua conta na Binance gratuitamente.
        </p>
      </div>

      <div className="text-center">
        <a
          href={AFFILIATE}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 bg-[#f7931a] hover:bg-[#e8821a] text-[#0a0d16] font-extrabold text-base px-8 py-4 rounded-xl transition-all"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          CRIAR CONTA GRÁTIS NA BINANCE →
        </a>
      </div>
    </div>
  );
}
