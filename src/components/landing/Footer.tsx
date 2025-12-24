import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import logoCepeWhite from "@/assets/logo-cepe-white.png";

const Footer = () => {
  return (
    <footer className="bg-cepe-blue-dark text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logoCepeWhite} alt="CEPE Idiomas" className="h-10 w-auto" />
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Transformando vidas através do aprendizado de idiomas há mais de 15 anos. Parceria oficial com a AMAGIS
              para oferecer experiências educacionais exclusivas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cepecordoba/?utm_source=site&utm_medium=landingpage&utm_campaign=amagis_parceria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-cepe-gold hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/cepeidiomasintercambio?utm_source=site&utm_medium=landingpage&utm_campaign=amagis_parceria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-cepe-gold hover:text-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/school/cepeidiomas/?utm_source=site&utm_medium=landingpage&utm_campaign=amagis_parceria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-cepe-gold hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:cursos@cepeidiomas.com.br"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-cepe-gold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  amagis@cepeidiomas.com.br
                </a>
              </li>
              <li>
                <a
                  href="tel:+553199999999"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-cepe-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (31) 99519-5407
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-primary-foreground/80">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Córdoba - Argentina
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#parceria" className="text-primary-foreground/80 hover:text-cepe-gold transition-colors">
                  Sobre a Parceria
                </a>
              </li>
              <li>
                <a href="#cronograma" className="text-primary-foreground/80 hover:text-cepe-gold transition-colors">
                  Cronograma
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-foreground/80 hover:text-cepe-gold transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#formulario" className="text-primary-foreground/80 hover:text-cepe-gold transition-colors">
                  Formulário de Interesse
                </a>
              </li>
              <li>
                <a
                  href="https://cepeidiomas.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-cepe-gold transition-colors"
                >
                  Site CEPE Idiomas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} CEPE Idiomas. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cepe-gold transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-cepe-gold transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
