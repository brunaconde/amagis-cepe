import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";

const TestSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-cepe-green to-cepe-green-light relative overflow-hidden" id="teste">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Teste Gratuito
          </div>

          <h2 className="heading-lg mb-6">
            Teste Seu Espanhol Agora!
          </h2>

          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Quer descobrir seu nível atual de espanhol? Faça nosso teste gratuito e receba uma avaliação personalizada. É rápido, fácil e sem compromisso!
          </p>

          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold mb-1">5 min</p>
                <p className="text-sm text-primary-foreground/80">Duração média</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">20</p>
                <p className="text-sm text-primary-foreground/80">Questões</p>
              </div>
              <div>
                <p className="text-3xl font-bold mb-1">100%</p>
                <p className="text-sm text-primary-foreground/80">Gratuito</p>
              </div>
            </div>
          </div>

          <Button
            asChild
            variant="hero"
            size="xl"
            className="group"
          >
            <a href="https://cepeidiomas.com.br/teste-de-espanhol" target="_blank" rel="noopener noreferrer">
              Fazer o Teste Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestSection;
