import { AvisoConfig, Header, StickyCta } from "./components/Top";
import { Hero } from "./components/Hero";
import { Como, Oportunidad, Problema, QueRecibe, SantaNatura } from "./components/Narrativa";
import { Bonos } from "./components/Bonos";
import { Inversion } from "./components/Inversion";
import { Acompanamiento, CtaFinal, Faq, Footer, Productos } from "./components/Cierre";

export default function App() {
  return (
    <>
      <AvisoConfig />
      <Header />
      <main>
        <Hero />
        <Problema />
        <Oportunidad />
        <SantaNatura />
        <QueRecibe />
        <Como />
        <Inversion />
        <Bonos />
        <Productos />
        <Acompanamiento />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
