import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Henrique",
      role: "Representante CEPE junto à AMAGIS",
      quote: "Eu e meu irmão saímos de Belo Horizonte e fizemos uma viagem de carro de 4.000 km até Córdoba, na Argentina, onde ficamos três semanas mergulhados na cultura e no aprendizado na CEPE Idiomas. Além de estudar espanhol, vivi algo que vai muito além do idioma: entender de verdade as nuances, expressões e detalhes que fazem toda a diferença no dia a dia. Tem uma distância enorme entre \"achar que sabe\" espanhol e realmente falar e entender, sabe?\n\nA CEPE foi fundamental nisso. Eles não só ensinam o idioma, mas também nos conectam com a cultura de um jeito único. E vou te dizer: aprender espanhol foi uma das melhores escolhas que já fiz. Muita gente só pensa no inglês ou no francês, mas o espanhol abre portas gigantes no mundo – tanto na vida pessoal quanto na profissional.\n\nSe você está querendo dar um passo pra evoluir, explorar o mundo e abrir novas oportunidades, o espanhol da CEPE é o caminho certo. A vivência que eles proporcionam vai além das aulas e realmente amplia nossos horizontes.",
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
        <div className="max-w-2xl mx-auto">
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
