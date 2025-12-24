import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

const TestSection = () => {
  return (
    <section
      className="section-padding bg-gradient-to-br from-cepe-green to-cepe-green-light relative overflow-hidden w-full"
      id="teste"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Teste Gratuito
          </div>

          <h2 className="heading-lg mb-6">Curioso(a) para Saber Seu Nível de Espanhol?</h2>

          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Antes de embarcar para sua aventura em Córdoba, que tal descobrir seu nível de espanhol? Faça nosso teste
            online rápido e gratuito. Em poucos minutos, você terá uma estimativa do seu conhecimento e um primeiro
            passo para planejar seu intercâmbio com o CEPE Idiomas.
          </p>

          <Button asChild variant="hero" size="xl" className="group w-full sm:w-auto max-w-full whitespace-normal text-center leading-snug h-auto py-4 px-6 sm:px-10 flex flex-wrap justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeawCT1cCEPHETCf00h1rbYQ4b9XjnuwN1-bGJmgNkrNzHNug/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer Teste Gratuito de Espanhol!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestSection;
