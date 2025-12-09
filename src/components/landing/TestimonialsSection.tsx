import { Play, Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Magistrada - TJMG",
      quote: "A experiência em Córdoba superou todas as expectativas. Em apenas 3 semanas, meu espanhol evoluiu mais do que em anos de estudo tradicional. O CEPE Idiomas oferece um suporte excepcional.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Familiar de Associado",
      quote: "Como filho de associado da AMAGIS, aproveitei o desconto exclusivo e foi uma das melhores decisões. A imersão cultural é incrível e os professores são muito dedicados.",
      rating: 5
    },
    {
      name: "Ana Oliveira",
      role: "Desembargadora",
      quote: "Recomendo fortemente para todos os colegas. A combinação de aprendizado de qualidade com uma experiência cultural enriquecedora é simplesmente perfeita.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-background" id="depoimentos">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-4">
            Experiências Reais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos alunos têm a dizer sobre sua experiência com o CEPE Idiomas.
          </p>
        </div>

        {/* Video placeholder */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="aspect-video bg-gradient-to-br from-cepe-blue-dark to-cepe-blue rounded-2xl overflow-hidden shadow-card relative group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80"
              alt="Vídeo de depoimentos - placeholder"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-cepe-gold rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-foreground ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <h3 className="text-xl font-semibold mb-1">Assista aos Depoimentos</h3>
              <p className="text-sm text-primary-foreground/80">
                Ouça diretamente de quem já viveu essa experiência transformadora
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow border border-border relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-cepe-gold/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cepe-gold text-cepe-gold" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cepe-blue to-cepe-blue-light rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
