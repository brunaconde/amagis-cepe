import { MapPin, GraduationCap, Users, Building, BookOpen, Globe } from "lucide-react";

const WhySection = () => {
  return (
    <section className="section-padding bg-background" id="porque">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-foreground mb-4">
            Por Que Córdoba e CEPE Idiomas?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Descubra o que torna esta experiência única e por que Córdoba é o destino ideal para seu aprendizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Córdoba */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cepe-blue rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="heading-md text-foreground">Por Que Córdoba?</h3>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-card mb-6">
              <img
                src="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80"
                alt="Córdoba, Argentina - placeholder"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Building,
                  title: "Centro Cultural e Universitário",
                  description: "Segunda maior cidade da Argentina, com rica vida cultural e ambiente acadêmico vibrante."
                },
                {
                  icon: Users,
                  title: "Ambiente Acolhedor",
                  description: "Cidade segura e receptiva, ideal para estudantes internacionais vivenciarem a cultura argentina."
                },
                {
                  icon: Globe,
                  title: "Imersão Total",
                  description: "Pratique espanhol o dia todo em situações reais, acelerando seu aprendizado naturalmente."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-soft transition-shadow">
                  <div className="w-10 h-10 bg-cepe-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-cepe-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CEPE Idiomas */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cepe-gold rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="heading-md text-foreground">Por Que CEPE Idiomas?</h3>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-card mb-6">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Aulas no CEPE Idiomas - placeholder"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: BookOpen,
                  title: "Metodologia Comprovada",
                  description: "Mais de 20 anos de experiência em ensino de idiomas com metodologia própria e eficaz."
                },
                {
                  icon: Users,
                  title: "Turmas Reduzidas",
                  description: "Grupos pequenos para atenção personalizada e maior interação entre alunos e professores."
                },
                {
                  icon: GraduationCap,
                  title: "Professores Nativos",
                  description: "Corpo docente qualificado e nativo, garantindo pronúncia e expressões autênticas."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-soft transition-shadow">
                  <div className="w-10 h-10 bg-cepe-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-cepe-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
