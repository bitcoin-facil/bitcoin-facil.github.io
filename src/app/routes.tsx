import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CompraBitcoinPix from "./pages/CompraBitcoinPix";
import CriarContaBinance from "./pages/CriarContaBinance";
import BinanceBrasil from "./pages/BinanceBrasil";
import ArticlePlaceholder from "./pages/ArticlePlaceholder";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },

      // Como comprar bitcoin
      { path: "como-comprar-bitcoin/com-pix", Component: CompraBitcoinPix },
      { path: "como-comprar-bitcoin/*", Component: ArticlePlaceholder },
      { path: "como-comprar-bitcoin", Component: ArticlePlaceholder },

      // Corretoras
      { path: "melhores-corretoras/como-criar-conta-binance", Component: CriarContaBinance },
      { path: "melhores-corretoras/binance-brasil", Component: BinanceBrasil },
      { path: "melhores-corretoras/*", Component: ArticlePlaceholder },
      { path: "melhores-corretoras", Component: ArticlePlaceholder },

      // Demais categorias e artigos
      { path: "o-que-e-bitcoin/*", Component: ArticlePlaceholder },
      { path: "o-que-e-bitcoin", Component: ArticlePlaceholder },
      { path: "como-vender-bitcoin/*", Component: ArticlePlaceholder },
      { path: "como-vender-bitcoin", Component: ArticlePlaceholder },
      { path: "seguranca/*", Component: ArticlePlaceholder },
      { path: "seguranca", Component: ArticlePlaceholder },
      { path: "bitcoin-imposto-renda/*", Component: ArticlePlaceholder },
      { path: "bitcoin-imposto-renda", Component: ArticlePlaceholder },

      { path: "*", Component: ArticlePlaceholder },
    ],
  },
]);
