import { Handshake, Award } from "lucide-react";
import logoAmagis from "@/assets/logo-amagis.png";
import logoCepe from "@/assets/logo-cepe-idiomas.png";
const PartnershipSection = () => {
  return <section className="section-padding bg-background" id="parceria">
      <div className="section-container">
        <div className="text-center mb-12">
          
          <h2 className="heading-lg text-foreground mb-4">
            AMAGIS e CEPE Idiomas: Uma conexão para o seu Crescimento Global
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A AMAGIS está sempre buscando os melhores benefícios para os membros da sua comunidade. Por isso, firmamos
            esta parceria especial com o CEPE Idiomas, uma das mais conceituadas escolas de intercâmbio em Córdoba,
            Argentina.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow">
              <img src={logoAmagis} alt="Logo AMAGIS - Associação dos Magistrados Mineiros" className="w-40 h-auto object-contain" />
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-cepe-gold rounded-full flex items-center justify-center shadow-glow">
                <span className="text-2xl">🤝</span>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow">
              <img src={logoCepe} alt="Logo CEPE Idiomas" className="w-40 h-auto object-contain" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-cepe-blue/5 to-cepe-gold/5 rounded-2xl p-6 border border-border">
              <p className="text-foreground leading-relaxed">
                Esta é a sua chance de aprimorar um novo idioma, mergulhar em uma cultura rica e colecionar memórias
                inesquecíveis, com a qualidade e a confiança que você merece.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                Escolha a duração entre <strong>2, 3 ou 4 semanas</strong> e aproveite o programa com o melhor suporte e
                experiência de aprendizado.
              </p>
            </div>

            {/* Selo de parceria */}
            <div className="flex items-center gap-4 rounded-xl p-4 border bg-[#cea500]/10 border-amber-400">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-yellow-500">
                <Award className="w-8 h-8 text-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Parceria Inédita</h4>
                <p className="text-sm text-muted-foreground">Benefício de desconto para toda comunidade AMAGIS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PartnershipSection;