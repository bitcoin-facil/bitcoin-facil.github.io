import { ExternalLink, Play, Shield, Zap } from "lucide-react";

const AFFILIATE = "https://www.binance.com/register?ref=11953708";
const VIDEO_ID = "OMaySRSFXg4";

interface Props {
  title?: string;
  subtitle?: string;
  variant?: "hero" | "article";
}

export default function VideoAffiliate({
  title = "Veja o Tutorial Completo em Vídeo",
  subtitle = "Gravado direto no celular — passo a passo do jeito que funciona de verdade",
  variant = "article",
}: Props) {
  return (
    <div
      className={`rounded-2xl border border-[#f7931a]/25 overflow-hidden ${
        variant === "hero"
          ? "bg-gradient-to-br from-[#111827] to-[#0f1a2e]"
          : "bg-[#111827]"
      }`}
    >
      <div className="p-5 pb-4 border-b border-[#f7931a]/15">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-md bg-[#f7931a]/20 border border-[#f7931a]/30 flex items-center justify-center">
            <Play size={12} className="text-[#f7931a] fill-[#f7931a]" />
          </div>
          <span className="text-[#f7931a] text-xs font-mono font-medium uppercase tracking-wider">
            Vídeo Tutorial
          </span>
        </div>
        <h3
          className="text-white font-bold text-lg leading-tight"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-[#8892a4] text-xs mt-0.5">{subtitle}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-0">
        {/* Video embed — vertical 9:16 */}
        <div className="flex items-center justify-center bg-black md:w-64 flex-shrink-0">
          <div
            className="w-full md:w-64"
            style={{ aspectRatio: "9/16", maxHeight: "480px", maxWidth: "270px" }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="Tutorial Binance — Como Comprar Bitcoin no Celular"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ display: "block" }}
            />
          </div>
        </div>

        {/* CTA panel */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-mono px-2.5 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Cadastro 100% gratuito
            </div>

            <h4
              className="text-white text-2xl font-extrabold leading-tight mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              CRIE SUA CONTA NA BINANCE AGORA
            </h4>

            <p className="text-[#8892a4] text-sm mb-5 leading-relaxed">
              A maior corretora de criptomoedas do mundo. Compre Bitcoin com Pix em minutos, direto pelo celular.
              Conta gratuita, sem mensalidade.
            </p>

            <ul className="space-y-2 mb-6">
              {[
                { icon: <Zap size={13} />, text: "Compra com Pix — cai na hora" },
                { icon: <Shield size={13} />, text: "Mais de 200 milhões de usuários no mundo" },
                { icon: <ExternalLink size={13} />, text: "Saque para conta bancária via Pix" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-[#d1d9e8] text-sm">
                  <span className="text-[#f7931a] flex-shrink-0">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={AFFILIATE}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block w-full text-center bg-[#f7931a] hover:bg-[#e8821a] active:scale-95 text-[#0a0d16] font-extrabold text-base px-6 py-3.5 rounded-xl transition-all"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            CRIAR CONTA GRÁTIS NA BINANCE →
          </a>

          <p className="text-[#3a4458] text-[10px] text-center mt-2">
            Link de afiliado — você nos apoia sem custo adicional
          </p>
        </div>
      </div>
    </div>
  );
}
