import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cepe-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-cepe-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-primary-foreground/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <span className="w-2 h-2 bg-cepe-gold rounded-full animate-pulse" />
              Parceria Exclusiva AMAGIS
            </div>

            <h1 className="heading-xl">
              AMAGIS e CEPE Idiomas:{" "}
              <span className="text-gradient">Seu Intercâmbio em Córdoba</span>{" "}
              com 15% de Desconto Exclusivo!
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              Uma parceria que abre as portas do mundo para associados, dependentes e colaboradores AMAGIS. 
              Viva uma imersão cultural e linguística inesquecível na vibrante Argentina!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" onClick={scrollToForm}>
                Quero Meu Desconto Exclusivo!
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </Button>
              <Button variant="ctaOutline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Play className="w-5 h-5" />
                Ver Vídeo
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-cepe-gold">15%</p>
                <p className="text-sm text-primary-foreground/70">Desconto</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-cepe-gold">2-4</p>
                <p className="text-sm text-primary-foreground/70">Semanas</p>
              </div>
              <div className="w-px h-12 bg-primary-foreground/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-cepe-gold">100%</p>
                <p className="text-sm text-primary-foreground/70">Imersão</p>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                alt="Estudantes em intercâmbio - aluno vestindo camisa do CEPE em Córdoba"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cepe-blue-dark/60 to-transparent" />
              
              {/* Floating card */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cepe-gold rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-foreground">✈️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Córdoba, Argentina</p>
                    <p className="text-sm text-muted-foreground">Imersão cultural e linguística</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-cepe-gold text-foreground rounded-full px-4 py-2 shadow-glow animate-pulse-soft">
              <span className="font-bold">-15% OFF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60">
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
