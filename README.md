# 🚀 Hirefy Landing Page

Landing page moderna e animada para o Hirefy - AI-powered resume optimization app.

## ✨ Features

- 🎨 Design moderno e profissional
- ⚡ Animações suaves com Framer Motion
- 📱 Totalmente responsivo
- 🎯 Otimizado para conversão
- 🔍 SEO-friendly
- ⚡ Performance otimizada com Next.js 14
- 🎭 Tema em verde (#0D9488) e branco

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (grátis)

## 📦 Instalação

### 1. Clone ou copie os arquivos

```bash
cd hirefy-landing
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🚀 Deploy no Vercel (GRÁTIS)

### Método 1: GitHub + Vercel (Recomendado)

1. **Crie um repositório no GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Hirefy landing page"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/hirefy-landing.git
   git push -u origin main
   ```

2. **Deploy no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Add New" → "Project"
   - Importe seu repositório GitHub
   - Vercel detecta automaticamente que é Next.js
   - Clique em "Deploy"
   - Pronto! Seu site estará no ar em ~2 minutos

3. **Configure o domínio customizado**
   - No dashboard do Vercel, vá em "Settings" → "Domains"
   - Adicione `hirefy.careers`
   - Siga as instruções para configurar DNS no Namecheap:
     - Type: A Record
     - Host: @
     - Value: 76.76.21.21
     - Type: CNAME
     - Host: www
     - Value: cname.vercel-dns.com

### Método 2: Deploy Direto (Sem GitHub)

```bash
# Instale Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

## 📁 Estrutura do Projeto

```
hirefy-landing/
├── app/
│   ├── layout.tsx         # Layout principal + SEO
│   ├── page.tsx          # Página home
│   └── globals.css       # Estilos globais
├── components/
│   ├── Navbar.tsx        # Header/navegação
│   ├── Hero.tsx          # Seção hero
│   ├── Problem.tsx       # Seção de problemas
│   ├── Features.tsx      # Funcionalidades
│   ├── HowItWorks.tsx    # Como funciona
│   ├── Pricing.tsx       # Preços
│   ├── Testimonials.tsx  # Depoimentos
│   ├── FAQ.tsx           # Perguntas frequentes
│   ├── CTA.tsx           # Call-to-action final
│   └── Footer.tsx        # Rodapé
├── public/
│   ├── logo.png          # Logo com fundo transparente
│   └── favicon.png       # Favicon
└── package.json
```

## 🎨 Personalização

### Cores

As cores estão definidas em `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#0D9488',
    500: '#0D9488',
    // ...outras variações
  }
}
```

### Conteúdo

Todo o conteúdo está nos componentes em `components/`. Para editar:

1. **Headline**: Edite `Hero.tsx`
2. **Preços**: Edite `Pricing.tsx` 
3. **Depoimentos**: Edite `Testimonials.tsx`
4. **FAQ**: Edite `FAQ.tsx`

### Logo

Substitua os arquivos em `public/`:
- `logo.png` - Logo principal
- `favicon.png` - Ícone do navegador

## 📊 Google Analytics (Opcional)

1. Crie uma propriedade GA4 em [analytics.google.com](https://analytics.google.com)
2. Copie o Measurement ID (formato: G-XXXXXXXXXX)
3. Adicione em `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🔧 Configuração de DNS

### No Namecheap (para hirefy.careers):

1. Vá em Domain List → Manage → Advanced DNS
2. Adicione os registros:

**Para Vercel:**
```
Type: A
Host: @
Value: 76.76.21.21
TTL: Automatic

Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

**Para Email (Zoho):**
```
Type: MX
Host: @
Value: mx.zoho.com
Priority: 10

Type: MX
Host: @
Value: mx2.zoho.com
Priority: 20
```

## 🎯 Otimizações Incluídas

- ✅ Lazy loading de componentes
- ✅ Imagens otimizadas
- ✅ Animações com GPU acceleration
- ✅ Code splitting automático
- ✅ SEO metadata completo
- ✅ Performance score 90+ no Lighthouse

## 📱 Links de Integração

Quando seus apps estiverem prontos, atualize os links em `CTA.tsx`:

```tsx
// Substitua pelos links reais da App Store e Google Play
<a href="https://apps.apple.com/app/hirefy/...">App Store</a>
<a href="https://play.google.com/store/apps/details?id=com.hirefy">Google Play</a>
```

## 🐛 Troubleshooting

**Erro: Module not found**
```bash
# Reinstale dependências
rm -rf node_modules package-lock.json
npm install
```

**Animações não funcionam**
```bash
# Verifique se Framer Motion está instalado
npm install framer-motion
```

**Imagens não aparecem**
- Verifique se os arquivos estão em `public/`
- Reinicie o servidor de desenvolvimento

## 📞 Suporte

Precisa de ajuda? Entre em contato:
- Email: support@hirefy.careers
- Website: hirefy.careers

## 📄 Licença

Proprietary - Todos os direitos reservados © 2024 Hirefy

---

Desenvolvido com ❤️ para o Hirefy
