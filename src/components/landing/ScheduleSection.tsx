import { Calendar, AlertCircle } from "lucide-react";

const ScheduleSection = () => {
  const weeks = [
    {
      week: "Semana 1",
      title: "Chegada e Adaptação",
      activities: [
        "Recepção no aeroporto e transfer",
        "Instalação na acomodação",
        "Tour pela cidade de Córdoba",
        "Teste de nivelamento",
        "Início das aulas de espanhol"
      ]
    },
    {
      week: "Semana 2",
      title: "Imersão Cultural",
      activities: [
        "Aulas intensivas de espanhol",
        "Visita a pontos históricos",
        "Atividades culturais em grupo",
        "Prática com nativos",
        "Excursão regional"
      ]
    },
    {
      week: "Semana 3",
      title: "Consolidação e Encerramento",
      activities: [
        "Aprofundamento linguístico",
        "Projeto final de conversação",
        "Avaliação de progresso",
        "Cerimônia de certificação",
        "Transfer de retorno"
      ]
    }
  ];

  return (
    <section className="section-padding bg-muted/50" id="cronograma">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cepe-green/10 text-cepe-green rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Programação
          </div>
          <h2 className="heading-lg text-foreground mb-4">
            Cronograma de 3 Semanas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja como será sua experiência ao longo das três semanas de intercâmbio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {weeks.map((week, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cepe-blue to-cepe-blue-light rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{week.week}</span>
                  <h3 className="font-semibold text-foreground">{week.title}</h3>
                </div>
              </div>

              <ul className="space-y-3">
                {week.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-cepe-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-cepe-gold/10 border border-cepe-gold/30 rounded-xl p-4 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-cepe-gold flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-foreground font-medium">Cronograma Ilustrativo</p>
            <p className="text-sm text-muted-foreground">
              Este é um cronograma ilustrativo. A programação real pode variar de acordo com o programa escolhido, período do ano e condições locais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
