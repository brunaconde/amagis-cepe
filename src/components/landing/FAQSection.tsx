import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quem pode aproveitar o desconto de 15%?",
      answer: "O desconto é válido para todos os magistrados associados à AMAGIS e seus familiares diretos (cônjuges e filhos). Basta informar sua condição no formulário de interesse."
    },
    {
      question: "O desconto pode ser combinado com outras promoções?",
      answer: "O desconto de 15% da parceria AMAGIS é exclusivo e não cumulativo com outras promoções ou descontos do CEPE Idiomas. Porém, é garantido ser aplicado em qualquer programa disponível."
    },
    {
      question: "Quais programas estão incluídos no desconto?",
      answer: "O desconto se aplica a todos os programas de intercâmbio do CEPE Idiomas para Córdoba, Argentina, incluindo cursos de diferentes durações e intensidades."
    },
    {
      question: "Como funciona a acomodação durante o intercâmbio?",
      answer: "Oferecemos diversas opções de acomodação, incluindo casas de família, apartamentos compartilhados e residências estudantis. Cada opção é selecionada criteriosamente para garantir conforto e segurança."
    },
    {
      question: "Preciso ter conhecimento prévio de espanhol?",
      answer: "Não! Aceitamos alunos de todos os níveis, desde iniciantes até avançados. Realizamos um teste de nivelamento na chegada para alocá-lo na turma mais adequada ao seu perfil."
    },
    {
      question: "O que está incluído no pacote de intercâmbio?",
      answer: "Geralmente inclui: curso de espanhol, material didático, acomodação, atividades culturais programadas, certificado de conclusão e suporte da equipe local. Os detalhes específicos variam conforme o programa escolhido."
    },
    {
      question: "Qual é o período mínimo de intercâmbio?",
      answer: "O período mínimo é de 1 semana, mas recomendamos pelo menos 2 a 3 semanas para uma experiência mais completa e resultados mais expressivos no aprendizado."
    },
    {
      question: "Como faço para me inscrever?",
      answer: "Basta preencher o formulário de interesse nesta página. Nossa equipe entrará em contato em até 48 horas para apresentar as opções de programa e guiá-lo no processo de inscrição."
    },
    {
      question: "Posso cancelar ou alterar minha inscrição?",
      answer: "Sim, temos uma política flexível de alteração e cancelamento. Os termos específicos serão apresentados no momento da inscrição formal. Recomendamos consultar nossa equipe para mais detalhes."
    },
    {
      question: "Córdoba é uma cidade segura?",
      answer: "Sim! Córdoba é considerada uma das cidades mais seguras da Argentina, com baixos índices de criminalidade na região central onde ocorrem as atividades do programa. Além disso, nossa equipe local oferece orientações de segurança."
    }
  ];

  return (
    <section className="section-padding bg-background" id="faq">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cepe-blue/10 text-cepe-blue rounded-full px-4 py-2 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </div>
          <h2 className="heading-lg text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as principais dúvidas sobre a parceria e o programa de intercâmbio.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
