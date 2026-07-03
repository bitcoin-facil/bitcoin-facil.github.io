import { Link } from "react-router";
import { ChevronRight, CheckCircle, AlertTriangle, Clock, Shield, Zap, HelpCircle, ExternalLink } from "lucide-react";
import VideoAffiliate from "../components/VideoAffiliate";

const AFFILIATE = "https://www.binance.com/register?ref=11953708";

const STEPS = [
  {
    n: 1,
    title: "Baixe o aplicativo da Binance",
    body: "Acesse a App Store (iPhone) ou Play Store (Android) e procure por \"Binance\". Baixe o aplicativo oficial — é gratuito. Cuidado com apps falsos: verifique se o desenvolvedor é \"Binance\".",
  },
  {
    n: 2,
    title: "Crie sua conta gratuitamente",
    body: "Abra o app e toque em \"Registrar\". Informe seu e-mail ou número de celular e crie uma senha forte. Confirme o código que chegará no seu e-mail. Todo o processo leva menos de 2 minutos.",
  },
  {
    n: 3,
    title: "Faça a verificação de identidade (KYC)",
    body: "Para poder comprar e sacar valores maiores, você precisa verificar sua identidade. Vá em \"Perfil\" → \"Verificação de identidade\". Informe seu CPF, tire uma foto do documento e uma selfie. Geralmente é aprovado em minutos.",
  },
  {
    n: 4,
    title: "Deposite reais via Pix",
    body: "Na tela inicial, toque em \"Depositar\" → \"BRL (Real Brasileiro)\" → \"Pix\". A Binance vai mostrar uma chave Pix. Abra o aplicativo do seu banco, faça o Pix com o valor desejado (mínimo R$10). O dinheiro aparece na sua conta Binance em segundos.",
  },
  {
    n: 5,
    title: "Compre seu Bitcoin",
    body: "Com o saldo disponível, toque em \"Comprar Cripto\" → \"Compra Rápida\". Selecione BRL no campo superior e BTC (Bitcoin) no campo inferior. Digite o valor em reais que quer investir e toque em \"Comprar BTC\". Pronto! Você acaba de comprar Bitcoin.",
  },
];

const FAQ = [
  {
    q: "Qual o valor mínimo para comprar Bitcoin com Pix na Binance?",
    a: "O valor mínimo para comprar Bitcoin na Binance via Pix é de R$10. Isso significa que qualquer pessoa pode começar a investir em Bitcoin mesmo com pouco dinheiro.",
  },
  {
    q: "Quanto tempo demora o Pix para cair na Binance?",
    a: "O Pix é processado em tempo real, 24 horas por dia, 7 dias por semana. Na prática, o dinheiro aparece na sua conta Binance em menos de 1 minuto após o envio.",
  },
  {
    q: "É seguro comprar Bitcoin via Pix na Binance?",
    a: "Sim. A Binance é a maior corretora de criptomoedas do mundo, com mais de 200 milhões de usuários. O Pix é o sistema de pagamento instantâneo oficial do Banco Central do Brasil, altamente seguro. A transação é criptografada e rastreável.",
  },
  {
    q: "Preciso comprar 1 Bitcoin inteiro?",
    a: "Não! O Bitcoin é divisível em até 100 milhões de partes menores (chamadas de satoshis). Com R$10 você já compra uma fração de Bitcoin. Não é necessário comprar 1 Bitcoin inteiro para investir.",
  },
  {
    q: "Preciso pagar imposto ao comprar Bitcoin?",
    a: "Não há imposto sobre a compra em si. O imposto (15% sobre o lucro) só incide caso você venda Bitcoin com lucro acima de R$35.000 por mês. Abaixo desse valor, a venda é isenta de IR.",
  },
  {
    q: "Quanto é a taxa da Binance para comprar Bitcoin com Pix?",
    a: "A Binance cobra uma taxa de 0,1% por transação na compra de criptomoedas. Isso significa que para uma compra de R$1.000, a taxa é de apenas R$1. O depósito via Pix em si é gratuito.",
  },
];

export default function CompraBitcoinPix() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-[#5a6478] mb-6 flex-wrap">
        <Link to="/" className="hover:text-[#f7931a] transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/como-comprar-bitcoin" className="hover:text-[#f7931a] transition-colors">Como Comprar Bitcoin</Link>
        <ChevronRight size={12} />
        <span className="text-[#8892a4]">Comprar com Pix</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 bg-[#f7931a]/10 border border-[#f7931a]/25 text-[#f7931a] text-[11px] font-mono px-2.5 py-1 rounded-full mb-4">
          <Zap size={11} />
          Tutorial Atualizado — Julho 2025
        </div>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          COMO COMPRAR BITCOIN COM PIX EM MINUTOS
        </h1>
        <p className="text-[#8892a4] text-base leading-relaxed max-w-2xl">
          Tutorial completo e atualizado para 2025. Aprenda a comprar Bitcoin com Pix usando o aplicativo da Binance no celular.
          Do zero ao Bitcoin em menos de 10 minutos — mesmo sem nunca ter investido antes.
        </p>

        <div className="flex flex-wrap gap-4 mt-5">
          {[
            { icon: <Clock size={13} />, text: "Leitura: 8 min" },
            { icon: <CheckCircle size={13} />, text: "Tutorial testado em julho/2025" },
            { icon: <Shield size={13} />, text: "Método seguro e oficial" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5 text-xs text-[#5a6478]">
              <span className="text-[#f7931a]">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Video + CTA — TOPO DO ARTIGO */}
      <div className="mb-10">
        <VideoAffiliate
          title="Tutorial: Comprar Bitcoin com Pix na Binance"
          subtitle="Vídeo gravado no celular mostrando cada tela do aplicativo — do cadastro até a compra"
        />
      </div>

      {/* Intro */}
      <div className="prose-dark mb-10">
        <p className="text-[#d1d9e8] text-base leading-relaxed mb-4">
          O <strong className="text-white">Pix</strong> mudou a forma como os brasileiros compram Bitcoin. Antes era preciso fazer TED bancária e esperar dias. Hoje, com o Pix, você deposita reais na corretora em segundos e já pode comprar Bitcoin na mesma hora — a qualquer hora do dia, inclusive nos finais de semana e feriados.
        </p>
        <p className="text-[#d1d9e8] text-base leading-relaxed mb-4">
          Neste guia completo, você vai aprender exatamente como comprar Bitcoin com Pix usando o aplicativo da <strong className="text-white">Binance</strong>, a maior corretora de criptomoedas do mundo. O processo todo leva menos de 10 minutos — mesmo para quem nunca investiu em criptomoedas antes.
        </p>
        <div className="bg-emerald-500/8 border border-emerald-500/20 rounded-xl p-4 flex gap-3">
          <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
          <p className="text-emerald-300/90 text-sm leading-relaxed">
            <strong>Boa notícia:</strong> Você não precisa comprar 1 Bitcoin inteiro. Com apenas <strong>R$10</strong> você já pode comprar uma fração de Bitcoin e começar a investir agora.
          </p>
        </div>
      </div>

      {/* Why Binance */}
      <div className="mb-10 bg-[#111827] border border-[#f7931a]/20 rounded-xl p-6">
        <h2
          className="text-2xl font-bold text-white mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          POR QUE USAR A BINANCE PARA COMPRAR BITCOIN COM PIX?
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: "Pix disponível 24/7", desc: "Deposite a qualquer hora, qualquer dia — inclusive finais de semana e feriados." },
            { title: "Mínimo de apenas R$10", desc: "Não precisa de muito dinheiro para começar. R$10 já é suficiente para sua primeira compra." },
            { title: "Aplicativo em português", desc: "Interface totalmente em português, fácil de usar mesmo para quem nunca investiu." },
            { title: "Taxa de apenas 0,1%", desc: "Uma das menores taxas do mercado. Para R$1.000 investidos, você paga apenas R$1 de taxa." },
            { title: "Maior corretora do mundo", desc: "200+ milhões de usuários. Volume de negociações que garante liquidez e melhor preço." },
            { title: "Saque via Pix na hora", desc: "Vendeu seu Bitcoin? Receba o dinheiro na sua conta bancária via Pix em minutos." },
          ].map((item) => (
            <div key={item.title} className="flex gap-3">
              <CheckCircle size={16} className="text-[#f7931a] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-sm">{item.title}</strong>
                <p className="text-[#5a6478] text-xs mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step by step */}
      <div className="mb-10">
        <h2
          className="text-3xl font-bold text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          PASSO A PASSO: COMO COMPRAR BITCOIN COM PIX
        </h2>
        <p className="text-[#8892a4] text-sm mb-6">Siga cada etapa com atenção. O vídeo acima mostra cada passo na tela do celular.</p>

        <div className="space-y-4">
          {STEPS.map((step, i) => (
            <div key={step.n} className="flex gap-4 bg-[#0f1623] border border-[rgba(247,147,26,0.12)] rounded-xl p-5">
              <div className="flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-lg bg-[#f7931a] flex items-center justify-center text-[#0a0d16] font-extrabold text-lg"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {step.n}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-[#8892a4] text-sm leading-relaxed">{step.body}</p>
                {i === 0 && (
                  <a
                    href={AFFILIATE}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1.5 mt-3 bg-[#f7931a]/15 border border-[#f7931a]/30 text-[#f7931a] text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#f7931a]/25 transition-colors"
                  >
                    <ExternalLink size={11} />
                    Criar conta na Binance gratuitamente
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Warning */}
      <div className="mb-10 bg-amber-500/8 border border-amber-500/20 rounded-xl p-5 flex gap-3">
        <AlertTriangle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-300 text-sm block mb-1">Atenção: Cuidado com golpes!</strong>
          <p className="text-amber-300/70 text-sm leading-relaxed">
            Nunca compartilhe sua senha ou código 2FA com ninguém. A Binance nunca pede sua senha por e-mail, WhatsApp ou telefone.
            Baixe o aplicativo apenas pelas lojas oficiais (App Store ou Google Play) e acesse o site sempre digitando o endereço diretamente no navegador.
          </p>
        </div>
      </div>

      {/* Mid-article CTA */}
      <div className="mb-10 bg-gradient-to-br from-[#f7931a]/15 to-[#f7931a]/5 border border-[#f7931a]/30 rounded-2xl p-6 text-center">
        <h3
          className="text-2xl font-bold text-white mb-2"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          PRONTO PARA COMPRAR SEU PRIMEIRO BITCOIN?
        </h3>
        <p className="text-[#8892a4] text-sm mb-5 max-w-md mx-auto">
          Crie sua conta gratuita na Binance agora e siga o tutorial em vídeo acima passo a passo.
        </p>
        <a
          href={AFFILIATE}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 bg-[#f7931a] hover:bg-[#e8821a] text-[#0a0d16] font-extrabold text-base px-8 py-4 rounded-xl transition-all active:scale-95"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          <Zap size={16} />
          CRIAR CONTA GRÁTIS NA BINANCE
        </a>
        <p className="text-[#3a4458] text-[11px] mt-2">Grátis, sem mensalidade, sem cartão de crédito</p>
      </div>

      {/* FAQ */}
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

      {/* Conclusion */}
      <div className="mb-10">
        <h2
          className="text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          CONCLUSÃO
        </h2>
        <p className="text-[#d1d9e8] text-base leading-relaxed mb-4">
          Comprar Bitcoin com Pix no Brasil nunca foi tão fácil. Com a Binance, você tem a maior corretora do mundo disponível em português, com Pix instantâneo, taxas baixas e aplicativo simples de usar no celular.
        </p>
        <p className="text-[#d1d9e8] text-base leading-relaxed mb-4">
          O processo todo — do cadastro até ter Bitcoin na sua carteira — leva menos de 10 minutos. Você pode começar com apenas R$10, sem nenhum compromisso e sem mensalidade.
        </p>
        <p className="text-[#d1d9e8] text-base leading-relaxed">
          Se ainda ficou alguma dúvida, assista o vídeo tutorial no topo desta página — ele mostra cada tela do aplicativo, passo a passo, de forma visual e direta.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="mb-10">
        <VideoAffiliate
          title="Ainda com dúvidas? Assista o tutorial completo"
          subtitle="Vídeo passo a passo gravado diretamente no celular"
        />
      </div>

      {/* Related articles */}
      <div className="border-t border-[#f7931a]/15 pt-8">
        <h3
          className="text-xl font-bold text-white mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          ARTIGOS RELACIONADOS
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: "Como Criar Conta na Binance — Tutorial Completo", href: "/melhores-corretoras/como-criar-conta-binance" },
            { title: "Binance é Confiável? Análise Completa 2025", href: "/melhores-corretoras/binance-brasil" },
            { title: "Como Comprar Bitcoin com Pouco Dinheiro", href: "/como-comprar-bitcoin/com-pouco-dinheiro" },
            { title: "Como Vender Bitcoin e Sacar para o Banco", href: "/como-vender-bitcoin/sacar-para-banco" },
          ].map((a) => (
            <Link
              key={a.href}
              to={a.href}
              className="flex items-center gap-2 bg-[#111827] border border-[rgba(247,147,26,0.12)] hover:border-[#f7931a]/40 rounded-lg px-4 py-3 text-sm text-[#d1d9e8] hover:text-white transition-all group"
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
