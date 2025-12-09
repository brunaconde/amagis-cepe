import { MapPin, GraduationCap, Users, Building, BookOpen, Globe, Coffee, Shield } from "lucide-react";

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
              <h3 className="heading-md text-foreground">Por Que Córdoba é o Destino Perfeito?</h3>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-card mb-6">
              <img
                src="https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=800&q=80"
                alt="Córdoba, Argentina - La Docta"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-muted-foreground mb-4">
              Conhecida como <strong className="text-foreground">"La Docta"</strong> pela sua efervescência universitária e cultural, 
              Córdoba é um caldeirão cultural no coração da Argentina.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Building,
                  title: "Efervescência Universitária",
                  description: "Ruas históricas, bares charmosos, parques vibrantes e uma atmosfera acadêmica única."
                },
                {
                  icon: Users,
                  title: "População Acolhedora",
                  description: "Cidade ideal para quem busca uma imersão autêntica e segura, perfeita para aprender e se divertir."
                },
                {
                  icon: Coffee,
                  title: "Cultura Rica",
                  description: "Cafés, música, arte e tradições argentinas que tornam cada momento uma experiência inesquecível."
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
              <h3 className="heading-md text-foreground">CEPE Idiomas: Excelência no Ensino</h3>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden shadow-card mb-6">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Aulas no CEPE Idiomas - Salas de aula modernas"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-muted-foreground mb-4">
              Nossa escola, localizada no coração de Córdoba, oferece <strong className="text-foreground">metodologia dinâmica</strong> e 
              professores dedicados que transformam o aprendizado em uma experiência leve e eficaz.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: BookOpen,
                  title: "Metodologia Dinâmica",
                  description: "Ambiente perfeito para desenvolver suas habilidades enquanto desfruta da cultura argentina."
                },
                {
                  icon: Globe,
                  title: "Amigos do Mundo Todo",
                  description: "Faça conexões internacionais e pratique o idioma com estudantes de diversos países."
                },
                {
                  icon: Shield,
                  title: "Três Idiomas Disponíveis",
                  description: "Escolha entre Espanhol, Inglês ou Português com professores altamente qualificados."
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
