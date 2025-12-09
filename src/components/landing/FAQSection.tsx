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
      question: "Quem pode utilizar o desconto de 15%?",
      answer: "O desconto é exclusivo para associados, dependentes e colaboradores da AMAGIS. Sua relação com a AMAGIS será verificada pela nossa equipe."
    },
    {
      question: "O desconto é válido para qualquer programa?",
      answer: "Sim, os 15% de desconto são válidos sobre o valor tabelado de todos os programas de intercâmbio do CEPE Idiomas, seja qual for a duração (2, 3 ou 4 semanas) e o idioma escolhido (Espanhol, Inglês ou Português)."
    },
    {
      question: "Quais idiomas e durações estão disponíveis?",
      answer: "Oferecemos cursos de Espanhol, Inglês e Português, com durações de 2, 3 ou 4 semanas. Cada programa pode ser personalizado de acordo com suas necessidades e objetivos."
    },
    {
      question: "Como o desconto é aplicado?",
      answer: "Após o preenchimento do formulário, nossa equipe entrará em contato para verificar sua elegibilidade e aplicar o desconto de 15% automaticamente sobre o valor tabelado do programa escolhido."
    },
    {
      question: "O que está incluso no programa de intercâmbio?",
      answer: "Nossos programas incluem aulas intensivas de idiomas e diversas atividades culturais complementares. Acomodação, passagens aéreas e seguro-viagem não estão inclusos, mas podem ser cotados separadamente."
    },
    {
      question: "Preciso de visto para a Argentina?",
      answer: "Para cidadãos brasileiros, não é necessário visto para programas de intercâmbio de curta duração na Argentina. Apenas seu RG (com até 10 anos de emissão e boa foto) ou passaporte válido são documentos suficientes para entrada."
    },
    {
      question: "Posso levar minha família?",
      answer: "Sim! O desconto é extensivo a dependentes da AMAGIS. Converse com nossa equipe para planejar a melhor experiência de intercâmbio para toda a família."
    },
    {
      question: "Como faço o teste de nivelamento?",
      answer: "Basta clicar no botão \"Fazer Teste Gratuito de Espanhol!\" e responder às questões. O resultado será enviado por e-mail e nos ajudará a personalizar seu curso no CEPE Idiomas."
    },
    {
      question: "Quais são os custos adicionais?",
      answer: "Passagens aéreas, seguro-viagem, alimentação, passeios extras e acomodação são custos adicionais que podem ser cotados pela nossa equipe de acordo com suas preferências."
    },
    {
      question: "Como entro em contato para mais informações?",
      answer: "Preencha o formulário nesta página! A equipe do CEPE Idiomas entrará em contato para tirar todas as suas dúvidas e ajudar você a planejar seu intercâmbio com o desconto exclusivo AMAGIS."
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
