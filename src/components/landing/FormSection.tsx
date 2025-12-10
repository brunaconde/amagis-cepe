import { Shield, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nomeCompleto: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  relacaoAmagis: z.string().min(1, "Selecione sua relação com AMAGIS"),
  duracaoPreferencial: z.string().min(1, "Selecione a duração preferencial"),
  cidadeOrigem: z.string().optional(),
  privacidade: z.boolean().refine((val) => val === true, "Você deve aceitar a política de privacidade"),
});

type FormData = z.infer<typeof formSchema>;

const FormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeCompleto: "",
      email: "",
      telefone: "",
      relacaoAmagis: "",
      duracaoPreferencial: "",
      cidadeOrigem: "",
      privacidade: false,
    },
  });

  const privacidade = watch("privacidade");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simula envio (será substituído pela integração real depois)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form data:", data);
    
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Entraremos em contato em até 48 horas úteis.",
    });
    
    reset();
    setIsSubmitting(false);
  };

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

          {/* Form */}
          <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Nome Completo */}
              <div className="space-y-2">
                <Label htmlFor="nomeCompleto" className="text-foreground">
                  Nome Completo <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nomeCompleto"
                  placeholder="Seu nome completo"
                  {...register("nomeCompleto")}
                  className={errors.nomeCompleto ? "border-destructive" : ""}
                />
                {errors.nomeCompleto && (
                  <p className="text-sm text-destructive">{errors.nomeCompleto.message}</p>
                )}
              </div>

              {/* E-mail */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  E-mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-foreground">
                  Telefone com DDD <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="telefone"
                  type="tel"
                  placeholder="(31) 99999-9999"
                  {...register("telefone")}
                  className={errors.telefone ? "border-destructive" : ""}
                />
                {errors.telefone && (
                  <p className="text-sm text-destructive">{errors.telefone.message}</p>
                )}
              </div>

              {/* Relação com AMAGIS */}
              <div className="space-y-2">
                <Label htmlFor="relacaoAmagis" className="text-foreground">
                  Relação com AMAGIS <span className="text-destructive">*</span>
                </Label>
                <Select onValueChange={(value) => setValue("relacaoAmagis", value)}>
                  <SelectTrigger className={errors.relacaoAmagis ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecione sua relação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="associado">Associado</SelectItem>
                    <SelectItem value="dependente">Dependente</SelectItem>
                    <SelectItem value="colaborador">Colaborador</SelectItem>
                  </SelectContent>
                </Select>
                {errors.relacaoAmagis && (
                  <p className="text-sm text-destructive">{errors.relacaoAmagis.message}</p>
                )}
              </div>

              {/* Duração Preferencial */}
              <div className="space-y-2">
                <Label htmlFor="duracaoPreferencial" className="text-foreground">
                  Duração Preferencial <span className="text-destructive">*</span>
                </Label>
                <Select onValueChange={(value) => setValue("duracaoPreferencial", value)}>
                  <SelectTrigger className={errors.duracaoPreferencial ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecione a duração" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2-semanas">2 Semanas</SelectItem>
                    <SelectItem value="3-semanas">3 Semanas</SelectItem>
                    <SelectItem value="4-semanas">4 Semanas</SelectItem>
                  </SelectContent>
                </Select>
                {errors.duracaoPreferencial && (
                  <p className="text-sm text-destructive">{errors.duracaoPreferencial.message}</p>
                )}
              </div>

              {/* Cidade de Origem */}
              <div className="space-y-2">
                <Label htmlFor="cidadeOrigem" className="text-foreground">
                  Cidade de Origem
                </Label>
                <Input
                  id="cidadeOrigem"
                  placeholder="Ex: Belo Horizonte"
                  {...register("cidadeOrigem")}
                />
              </div>

              {/* Checkbox de Privacidade */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacidade"
                    checked={privacidade}
                    onCheckedChange={(checked) => setValue("privacidade", checked as boolean)}
                    className={errors.privacidade ? "border-destructive" : ""}
                  />
                  <Label htmlFor="privacidade" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Concordo com a política de privacidade e autorizo o contato por e-mail ou telefone. <span className="text-destructive">*</span>
                  </Label>
                </div>
                {errors.privacidade && (
                  <p className="text-sm text-destructive">{errors.privacidade.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cepe-green hover:bg-cepe-green/90 text-white font-semibold py-6 text-lg"
              >
                {isSubmitting ? "Enviando..." : "Receber Meu Desconto e Contato!"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
