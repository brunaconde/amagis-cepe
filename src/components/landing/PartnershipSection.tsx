import { Handshake, Award } from "lucide-react";

const PartnershipSection = () => {
  return (
    <section className="section-padding bg-background" id="parceria">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cepe-gold/10 text-cepe-gold rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Handshake className="w-4 h-4" />
            Parceria Exclusiva
          </div>
          <h2 className="heading-lg text-foreground mb-4">
            A Parceria que Abre Fronteiras
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Uma colaboração especial entre a Associação dos Magistrados Mineiros (AMAGIS) e o CEPE Idiomas para oferecer aos associados e seus familiares uma oportunidade única de aprendizado de idiomas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow">
              <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-medium">Logo AMAGIS</span>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-cepe-gold rounded-full flex items-center justify-center shadow-glow">
                <span className="text-2xl">🤝</span>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow">
              <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground font-medium">Logo CEPE Idiomas</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cepe-blue/5 to-cepe-gold/5 rounded-2xl p-6 border border-border">
              <p className="text-foreground leading-relaxed">
                A AMAGIS, pensando no desenvolvimento pessoal e profissional de seus associados, firmou uma parceria estratégica com o CEPE Idiomas, instituição referência em ensino de idiomas e programas de intercâmbio. 
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Esta parceria visa proporcionar experiências educacionais de alta qualidade com condições especiais e exclusivas para toda a comunidade AMAGIS.
              </p>
            </div>

            {/* Selo de parceria */}
            <div className="flex items-center gap-4 bg-cepe-gold/10 rounded-xl p-4 border border-cepe-gold/30">
              <div className="w-16 h-16 bg-cepe-gold rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Parceria Exclusiva</h4>
                <p className="text-sm text-muted-foreground">
                  Benefícios únicos para membros e familiares da AMAGIS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
