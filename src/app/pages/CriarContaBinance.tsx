import { Link } from "react-router";
import { ChevronRight, CheckCircle, Clock, Shield, Zap, HelpCircle, ExternalLink, Smartphone, User, Camera, Key } from "lucide-react";
import VideoAffiliate from "../components/VideoAffiliate";

const AFFILIATE = "https://www.binance.com/register?ref=11953708";

const STEPS = [
  {
    icon: <Smartphone size={18} />,
    n: 1,
    title: "Baixe o app da Binance",
    body: "Acesse a App Store (iPhone) ou Google Play (Android) e busque por 'Binance'. Baixe o aplicativo oficial, identificado pelo logo amarelo. É gratuito. Você também pode acessar pelo computador em binance.com.",
  },
  {
    icon: <User size={18} />,
    n: 2,
    title: "Preencha seus dados de cadastro",
    body: "Abra o app e toque em 'Registrar'. Você pode se cadastrar com e-mail ou número de celular. Escolha uma senha forte com letras maiúsculas, minúsculas, números e símbolos. Confirme o código de verificação enviado para seu e-mail ou SMS.",
  },
  {
    icon: <Key size={18} />,
    n: 3,
    title: "Ative a autenticação em 2 fatores (2FA)",
    body: "Vá em 'Perfil' → 'Segurança' → 'Autenticação de dois fatores'. Ative o Google Authenticator ou SMS. Isso protege sua conta mesmo que alguém descubra sua senha. Etapa muito importante — não pule.",
  },
  {
    icon: <Camera size={18} />,
    n: 4,
    title: "Verifique sua identidade (KYC)",
    body: "Para depositar via Pix e sacar dinheiro, você precisa verificar sua identidade. Vá em 'Perfil' → 'Verificação de identidade'. Informe CPF, nome completo e data de nascimento. Tire uma foto nítida do seu RG ou CNH e uma selfie segurando o documento. A aprovação é automática e leva de 5 a 30 minutos.",
  },
  {
    icon: <CheckCircle size={18} />,
    n: 5,
    title: "Pronto! Faça seu primeiro depósito",
    body: "Com a conta verificada, toque em 'Depositar' → 'BRL' → 'Pix'. Copie a chave Pix gerada pela Binance e faça a transferência pelo seu banco. O valor aparece na sua conta Binance em segundos. Agora você pode comprar Bitcoin!",
  },
];

const FAQ = [
  {
    q: "Quanto tempo leva para criar uma conta na Binance?",
    a: "O cadastro inicial leva menos de 5 minutos. A verificação de identidade (KYC) leva entre 5 e 30 minutos na maioria dos casos — às vezes é aprovada na hora.",
  },
  {
    q: "Preciso pagar para criar conta na Binance?",
    a: "Não. Criar conta na Binance é totalmente gratuito. Não há mensalidade nem taxa de adesão. Você só paga a taxa de 0,1% quando realiza operações de compra e venda.",
  },
  {
    q: "Quais documentos preciso para criar conta na Binance?",
    a: "Você precisará de: CPF, e-mail ativo, RG ou CNH (para a verificação de identidade) e um celular para receber o código de verificação.",
  },
  {
    q: "Posso criar conta na Binance sem verificar a identidade?",
    a: "Você pode criar a conta sem verificação, mas as funcionalidades são muito limitadas. Para depositar via Pix e sacar dinheiro, a verificação de identidade é obrigatória.",
  },
  {
    q: "A Binance aceita menores de 18 anos?",
    a: "Não. A Binance exige que o usuário tenha no mínimo 18 anos de idade para criar uma conta e operar na plataforma.",
  },
];

export default function CriarContaBinance() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-1.5 text-xs text-[#5a6478] mb-6 flex-wrap">
        <Link to="/" className="hover:text-[#f7931a] transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/melhores-corretoras" className="hover:text-[#f7931a] transition-colors">Corretoras</Link>
        <ChevronRight size={12} />
        <span className="text-[#8892a4]">Como Criar Conta na Binance</span>
      </nav>

      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 bg-[#f7931a]/10 border border-[#f7931a]/25 text-[#f7931a] text-[11px] font-mono px-2.5 py-1 rounded-full mb-4">
          <Zap size={11} />
          Tutorial Atualizado — Julho 2025
        </div>
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          COMO CRIAR CONTA NA BINANCE PASSO A PASSO
        </h1>
        <p className="text-[#8892a4] text-base leading-relaxed max-w-2xl">
          Guia completo para criar sua conta na Binance em 2025. Do zero ao primeiro Bitcoin em menos de 10 minutos —
          com verificação de identidade, depósito via Pix e compra de Bitcoin incluídos.
        </p>
        <div className="flex flex-wrap gap-4 mt-5">
          {[
            { icon: <Clock size={13} />, text: "Leitura: 6 min" },
            { icon: <Shield size={13} />, text: "Cadastro 100% gratuito" },
            { icon: <CheckCircle size={13} />, text: "Atualizado julho/2025" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5 text-xs text-[#5a6478]">
              <span className="text-[#f7931a]">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <VideoAffiliate
          title="Tutorial: Criar Conta na Binance pelo Celular"
          subtitle="Vídeo mostrando cada tela do app — cadastro, verificação e primeira compra de Bitcoin"
        />
      </div>

      <div className="mb-8">
        <p className="text-[#d1d9e8] text-base leading-relaxed mb-4">
          A <strong className="text-white">Binance</strong> é a maior corretora de criptomoedas do mundo, com mais de 200 milhões de usuários em mais de 180 países. No Brasil, é a plataforma preferida dos investidores de Bitcoin por aceitar Pix, ter o aplicativo em português e cobrar uma das menores taxas do mercado.
        </p>
        <p className="text-[#d1d9e8] text-base leading-relaxed">
          Criar uma conta na Binance é simples, rápido e totalmente gratuito. Neste tutorial, você vai ver cada passo do processo — do download do aplicativo até a compra do seu primeiro Bitcoin.
        </p>
      </div>

      <div className="mb-10">
        <h2
          className="text-3xl font-bold text-white mb-6"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          PASSO A PASSO: CRIAR CONTA NA BINANCE
        </h2>
        <div className="space-y-4">
          {STEPS.map((step) => (
            <div key={step.n} className="flex gap-4 bg-[#0f1623] border border-[rgba(247,147,26,0.12)] rounded-xl p-5">
              <div className="flex-shrink-0">
                <div
                  className="w-10 h-10 rounded-lg bg-[#f7931a] flex items-center justify-center text-[#0a0d16]"
                >
                  {step.icon}
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">
                  <span className="text-[#f7931a] mr-2">#{step.n}</span>
                  {step.title}
                </h3>
                <p className="text-[#8892a4] text-sm leading-relaxed">{step.body}</p>
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
          CRIE SUA CONTA AGORA — É GRÁTIS
        </h3>
        <p className="text-[#8892a4] text-sm mb-5 max-w-md mx-auto">
          Siga o tutorial em vídeo acima enquanto cria sua conta. Em 10 minutos você já pode comprar Bitcoin.
        </p>
        <a
          href={AFFILIATE}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 bg-[#f7931a] hover:bg-[#e8821a] text-[#0a0d16] font-extrabold text-base px-8 py-4 rounded-xl transition-all active:scale-95"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          <ExternalLink size={16} />
          CRIAR CONTA GRÁTIS NA BINANCE
        </a>
        <p className="text-[#3a4458] text-[11px] mt-2">Sem mensalidade • Sem cartão de crédito</p>
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
          PRÓXIMOS PASSOS
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: "Como Comprar Bitcoin com Pix", href: "/como-comprar-bitcoin/com-pix" },
            { title: "Binance é Confiável? Análise Completa", href: "/melhores-corretoras/binance-brasil" },
            { title: "Como Vender Bitcoin e Sacar via Pix", href: "/como-vender-bitcoin/sacar-para-banco" },
            { title: "Como Declarar Bitcoin no Imposto de Renda", href: "/bitcoin-imposto-renda/como-declarar" },
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
