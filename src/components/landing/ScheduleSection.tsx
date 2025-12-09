import { Calendar, AlertCircle } from "lucide-react";

const ScheduleSection = () => {
  const weeks = [
    {
      week: "1ª Semana",
      title: "Chegada e Imersão",
      activities: [
        "Domingo: Chegada em Córdoba e ida ao alojamento",
        "Segunda: Credenciamento, aula de pronúncia e almoço de boas-vindas",
        "Terça: Curso + Classe de Tango",
        "Quarta: Curso + Visita aos museus (Palacio Ferreyra, Caraffa)",
        "Quinta: Curso + Passeio Nueva Córdoba e Paseo del Buen Pastor",
        "Sexta: Curso + Degustação de vinhos e queijos em Colonia Caroya",
        "Sábado: Dia livre - passeios opcionais",
      ],
    },
    {
      week: "2ª Semana",
      title: "Cultura e Aventura",
      activities: [
        "Segunda: Curso + Picnic no Parque Sarmiento",
        "Terça: Curso + Aula de Salsa e Bachata",
        "Quarta: Curso + Museu Genaro Pérez e Museu do Cuarteto",
        "Quinta: Passeio Alta Gracia + Museu Casa do Che Guevara",
        "Sexta: Curso + Visita ao Plaza Cielo y Tierra",
        "Sábado: Dia livre - passeios opcionais",
        "Entrega de certificados para alunos de 2 semanas",
      ],
    },
    {
      week: "3ª Semana",
      title: "Consolidação",
      activities: [
        "Segunda: Curso + Academia de Ciências e Centro Cultural",
        "Terça: Curso + Tarde livre para compras",
        "Quarta: Curso + Museo Marqués de Sobremonte + Mundolingo",
        "Quinta: Revisão e Exame escrito",
        "Sexta: Exame oral e entrega de certificados",
        "Sábado: Saída do alojamento - Aeroporto",
      ],
    },
  ];

  return (
    <section className="section-padding bg-muted/50" id="cronograma">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cepe-green/10 text-cepe-green rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Programa de Intercâmbio
          </div>
          <h2 className="heading-lg text-foreground mb-4">Viva a Experiência: Seu Intercâmbio de 3 Semanas!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Prepare-se para dias de muito aprendizado e aventura! Este é um exemplo de como seria seu programa de
            intercâmbio, mesclando aulas interativas com o melhor da cultura e lazer de Córdoba.
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
            <p className="text-foreground font-medium">Programação Sujeita a Alterações</p>
            <p className="text-sm text-muted-foreground">
              Este é um cronograma ilustrativo. A programação real pode variar decorrente de condições climáticas,
              feriados ou logística. Consulte a equipe do CEPE Idiomas para detalhes sobre seu programa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
