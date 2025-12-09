import { ClipboardCheck, MessageSquare, FileCheck, Plane } from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      number: 1,
      icon: ClipboardCheck,
      title: "Preencha o Formulário",
      description: "Complete o formulário de interesse nesta página com seus dados e preferências de programa."
    },
    {
      number: 2,
      icon: MessageSquare,
      title: "Receba o Contato",
      description: "Nossa equipe entrará em contato em até 48 horas para entender suas necessidades e apresentar as opções."
    },
    {
      number: 3,
      icon: FileCheck,
      title: "Confirme Sua Inscrição",
      description: "Escolha seu programa, confirme sua inscrição e receba automaticamente o desconto de 15%."
    },
    {
      number: 4,
      icon: Plane,
      title: "Embarque para Córdoba",
      description: "Prepare-se para uma experiência transformadora de aprendizado e cultura na Argentina!"
    }
  ];

  return (
    <section className="section-padding bg-muted/50" id="como-aproveitar">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-4">
            Como Aproveitar Seu Desconto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Em apenas 4 passos simples, você garante seu desconto exclusivo e inicia sua jornada de aprendizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-border" />
              )}

              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border text-center relative z-10">
                {/* Number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-cepe-gold rounded-full flex items-center justify-center text-foreground font-bold text-sm shadow-glow">
                  {step.number}
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-cepe-blue to-cepe-blue-light rounded-xl flex items-center justify-center mx-auto mt-4 mb-4">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
