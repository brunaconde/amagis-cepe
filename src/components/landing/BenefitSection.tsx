import { Button } from "@/components/ui/button";
import { Percent, Gift, Star } from "lucide-react";

const BenefitSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-cepe-blue-dark relative overflow-hidden" id="beneficio">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_hsl(var(--cepe-gold))_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_hsl(var(--cepe-green))_0%,_transparent_50%)]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6">
            <div className="inline-flex items-center gap-2 bg-cepe-gold/20 text-cepe-gold rounded-full px-4 py-2 text-sm font-medium">
              <Gift className="w-4 h-4" />
              Oferta Exclusiva
            </div>

            <h2 className="heading-lg">15% de Desconto EXCLUSIVO: Realize o seu sonho e de sua família!</h2>

            <p className="text-lg text-primary-foreground/90">
              Como membro da comunidade AMAGIS, você garante um benefício único:{" "}
              <strong className="text-cepe-gold">15% de desconto</strong> sobre o valor tabelado do programa de
              intercâmbio do CEPE Idiomas! Este benefício é a sua porta de entrada para uma aventura enriquecedora, com
              uma economia significativa.
            </p>

            <ul className="space-y-4">
              {[
                "Válido para qualquer duração: 2, 3 ou 4 semanas",
                "Extensivo a dependentes e colaboradores AMAGIS",
                "Desconto exclusivo sobre o valor tabelado",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-cepe-gold flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="xl" onClick={scrollToForm}>
              Garanta Seu Desconto!
            </Button>
          </div>

          {/* Discount badge */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-cepe-gold blur-3xl opacity-30 rounded-full scale-110" />

              {/* Main badge */}
              <div className="relative bg-gradient-to-br from-cepe-gold to-cepe-gold-light rounded-full w-64 h-64 md:w-80 md:h-80 flex flex-col items-center justify-center shadow-glow animate-pulse-soft">
                <Percent className="w-12 h-12 text-cepe-blue-dark mb-2" />
                <span className="text-6xl md:text-8xl font-extrabold text-cepe-blue-dark">15</span>
                <span className="text-2xl md:text-3xl font-bold text-cepe-blue-dark">% OFF</span>
                <span className="text-sm font-medium text-cepe-blue-dark/80 mt-2">Desconto Exclusivo AMAGIS</span>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-cepe-green rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-xl">✓</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-lg">🎓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
