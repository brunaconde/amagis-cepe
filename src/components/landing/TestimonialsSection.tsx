import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alexandre",
      role: "Representante CEPE junto à AMAGIS",
      quote: "A experiência em Córdoba foi transformadora. A imersão cultural aliada ao método de ensino do CEPE proporciona um aprendizado único e eficaz. Recomendo a todos os associados da AMAGIS!",
      rating: 5
    },
    {
      name: "Henrique",
      role: "Representante CEPE junto à AMAGIS",
      quote: "O programa do CEPE Idiomas vai muito além das aulas. É uma verdadeira imersão na cultura argentina, com atividades culturais incríveis e a chance de fazer amigos do mundo todo.",
      rating: 5
    },
    {
      name: "Associado AMAGIS",
      role: "Magistrado",
      quote: "Aproveitei o desconto exclusivo da parceria AMAGIS e foi uma das melhores decisões. Em apenas 3 semanas, meu espanhol evoluiu mais do que em anos de estudo tradicional.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-background" id="depoimentos">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-foreground mb-4">
            Transforme Sua Vida: Quem Já Foi, Recomenda!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos alunos têm a dizer sobre sua experiência com o CEPE Idiomas.
          </p>
        </div>

        {/* Vídeo do Canva - Depoimentos */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-card" style={{ paddingTop: '56.25%' }}>
            <iframe 
              loading="lazy" 
              className="absolute inset-0 w-full h-full border-none"
              src="https://www.canva.com/design/DAG55h4Zgn4/51Dn5RXIph1oez5lk1dTAQ/view?embed" 
              allowFullScreen
              allow="fullscreen"
              title="Vídeo de depoimentos - Alexandre e Henrique"
            />
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
