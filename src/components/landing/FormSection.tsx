import { Shield, CheckCircle } from "lucide-react";

const FormSection = () => {
  return (
    <section className="section-padding bg-cepe-blue-dark relative overflow-hidden" id="formulario">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-cepe-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-cepe-green rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="text-primary-foreground">
            <h2 className="heading-lg mb-4">
              Pronto para Seu Intercâmbio? Preencha Seus Dados e Garanta Seu Desconto!
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Preencha o formulário abaixo e nossa equipe entrará em contato para apresentar todas as opções de programa e garantir seu desconto exclusivo de 15%.
            </p>

            <div className="space-y-4">
              {[
                "Resposta em até 48 horas úteis",
                "Orientação personalizada sobre programas",
                "Desconto aplicado automaticamente",
                "Sem compromisso de matrícula"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cepe-gold flex-shrink-0" />
                  <span className="text-primary-foreground/90">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-primary-foreground/10 rounded-xl flex items-start gap-3">
              <Shield className="w-6 h-6 text-cepe-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Seus dados estão seguros</p>
                <p className="text-sm text-primary-foreground/80">
                  Utilizamos criptografia e não compartilhamos suas informações com terceiros.
                </p>
              </div>
            </div>
          </div>

          {/* Google Forms Embed */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSe0TkAQey5KpONkK4k2UvbvUon_jtKqViHucSy3Z8UTM6Fkag/viewform?embedded=true" 
              width="100%" 
              height="1388"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
              title="Formulário de Interesse CEPE Idiomas"
            >
              Carregando formulário...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
