# Landing Page AMAGIS x CEPE

Landing page para a parceria entre AMAGIS e CEPE Idiomas, promovendo cursos de espanhol com desconto exclusivo para membros da comunidade AMAGIS.

## 📋 Informações Técnicas

| Item | Descrição |
|------|-----------|
| **Framework** | React 18.3 |
| **Build Tool** | Vite 5 |
| **Linguagem** | TypeScript |
| **Estilização** | Tailwind CSS |
| **Componentes UI** | shadcn/ui |

## 🗂️ Estrutura do Projeto

```
├── src/
│   ├── assets/           # Imagens e recursos estáticos
│   ├── components/
│   │   ├── landing/      # Componentes da landing page
│   │   └── ui/           # Componentes UI reutilizáveis
│   ├── pages/            # Páginas da aplicação
│   ├── hooks/            # React hooks customizados
│   ├── lib/              # Utilitários
│   ├── index.css         # Estilos globais e design tokens
│   ├── App.tsx           # Componente raiz com rotas
│   └── main.tsx          # Ponto de entrada
├── public/               # Arquivos públicos estáticos
└── dist/                 # Build de produção (gerado)
```

## 🚀 Como Servir os Arquivos Compilados (dist)

Os arquivos na pasta `dist/` são estáticos, mas **não podem ser abertos diretamente no navegador** (clicando no `index.html`) devido a restrições de segurança do navegador com módulos ES6 e CORS.

### Opção 1: VS Code com Live Server (Recomendado)

1. Abra a pasta `dist/` no VS Code
2. Instale a extensão **Live Server** (se ainda não tiver)
3. Clique com botão direito no `index.html`
4. Selecione **"Open with Live Server"**
5. O site abrirá automaticamente no navegador

### Opção 2: Python (já vem instalado no Mac/Linux)

```bash
cd dist
python -m http.server 8000
```
Acesse: `http://localhost:8000`

### Opção 3: Node.js

```bash
# Instalar servidor (uma vez)
npm install -g serve

# Servir a pasta dist
cd dist
serve .
```
Ou sem instalar globalmente:
```bash
npx serve dist
```

### Opção 4: PHP (se disponível)

```bash
cd dist
php -S localhost:8000
```

## 🛠️ Desenvolvimento Local (Código Fonte)

Se precisar modificar o código fonte:

### Pré-requisitos

- Node.js 18+ (recomendado: 20 LTS)
- npm 9+ ou yarn

### Instalação

```bash
# Clonar o repositório
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_PROJETO>

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O servidor de desenvolvimento estará disponível em `http://localhost:8080`

### Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção na pasta `dist/` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa verificação de código |

## 📦 Dependências Principais

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.30.1",
  "tailwindcss": "^3.x",
  "lucide-react": "^0.462.0"
}
```

## 🎨 Design System

O projeto utiliza um design system customizado com cores definidas via CSS variables:

- **Cores primárias**: Azul escuro (#1a365d) e dourado (#c4a962)
- **Tipografia**: Montserrat (Google Fonts)
- **Responsividade**: Mobile-first com breakpoints Tailwind padrão

## 📱 Seções da Landing Page

1. **Header** - Navegação fixa com logo e menu
2. **Hero** - Banner principal com CTA
3. **Partnership** - Informações da parceria AMAGIS x CEPE
4. **Benefits** - Benefícios e desconto de 15%
5. **Why CEPE** - Diferenciais da escola
6. **Schedule** - Horários disponíveis
7. **Testimonials** - Depoimentos de alunos
8. **Test** - CTA para teste de nivelamento
9. **Steps** - Passo a passo para se inscrever
10. **Form** - Formulário de contato/inscrição
11. **FAQ** - Perguntas frequentes
12. **Footer** - Informações de contato e links

## 🔗 Links Externos Utilizados

- Formulário de teste: Google Forms (link no componente TestSection)
- Formulário de contato: A definir integração

## 📝 Notas Importantes

1. **Imagens**: Todas as imagens estão na pasta `src/assets/` e são otimizadas durante o build
2. **Fonte**: A fonte Montserrat é carregada via Google Fonts no `index.css`
3. **SEO**: Meta tags básicas estão configuradas no `index.html`
4. **Deploy**: O projeto está configurado para deploy via GitHub Pages

## 🆘 Problemas Comuns

### Página em branco ao abrir index.html diretamente
**Solução**: Use um servidor local (veja seções acima)

### Fontes não carregam
**Solução**: Verifique conexão com internet (fonte é carregada do Google Fonts)

### Imagens não aparecem
**Solução**: Verifique se os caminhos das imagens estão corretos no build

---

**Desenvolvido com** ❤️ **usando Lovable**
