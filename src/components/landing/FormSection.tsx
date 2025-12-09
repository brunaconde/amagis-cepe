import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Shield, CheckCircle } from "lucide-react";

const FormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    relacaoAmagis: "",
    idioma: "",
    duracao: "",
    cidade: "",
    privacidade: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacidade) {
      toast({
        title: "Atenção",
        description: "Você precisa aceitar a política de privacidade para continuar.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Entraremos em contato em breve para apresentar seu desconto exclusivo.",
    });
    
    setIsSubmitting(false);
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      relacaoAmagis: "",
      idioma: "",
      duracao: "",
      cidade: "",
      privacidade: false
    });
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
              Formulário de Interesse
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
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-foreground">Nome Completo *</Label>
                <Input
                  id="nome"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-foreground">Telefone/WhatsApp *</Label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Relação com a AMAGIS *</Label>
                <Select
                  value={formData.relacaoAmagis}
                  onValueChange={(value) => setFormData({ ...formData, relacaoAmagis: value })}
                  required
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Selecione sua relação" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="magistrado">Magistrado(a) Associado(a)</SelectItem>
                    <SelectItem value="conjuge">Cônjuge de Associado(a)</SelectItem>
                    <SelectItem value="filho">Filho(a) de Associado(a)</SelectItem>
                    <SelectItem value="outro-familiar">Outro Familiar</SelectItem>
                    <SelectItem value="nao-associado">Não sou associado/familiar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Idioma de Interesse *</Label>
                  <Select
                    value={formData.idioma}
                    onValueChange={(value) => setFormData({ ...formData, idioma: value })}
                    required
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Selecione o idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="espanhol">Espanhol</SelectItem>
                      <SelectItem value="ingles">Inglês</SelectItem>
                      <SelectItem value="frances">Francês</SelectItem>
                      <SelectItem value="italiano">Italiano</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Duração Preferencial *</Label>
                  <Select
                    value={formData.duracao}
                    onValueChange={(value) => setFormData({ ...formData, duracao: value })}
                    required
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Selecione a duração" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-semana">1 Semana</SelectItem>
                      <SelectItem value="2-semanas">2 Semanas</SelectItem>
                      <SelectItem value="3-semanas">3 Semanas</SelectItem>
                      <SelectItem value="4-semanas">4 Semanas ou mais</SelectItem>
                      <SelectItem value="indefinido">Ainda não sei</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cidade" className="text-foreground">Cidade de Origem *</Label>
                <Input
                  id="cidade"
                  placeholder="Sua cidade"
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                  required
                  className="bg-background"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="privacidade"
                  checked={formData.privacidade}
                  onCheckedChange={(checked) => setFormData({ ...formData, privacidade: checked as boolean })}
                  className="mt-0.5"
                />
                <Label htmlFor="privacidade" className="text-sm text-muted-foreground font-normal leading-snug cursor-pointer">
                  Li e concordo com a <a href="#" className="text-primary hover:underline">Política de Privacidade</a> e autorizo o contato para informações sobre os programas.
                </Label>
              </div>

              <Button
                type="submit"
                variant="cta"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Receber Meu Desconto e Contato!
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
