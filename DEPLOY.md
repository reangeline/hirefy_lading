# 🚀 GUIA RÁPIDO - COLOCAR NO AR EM 10 MINUTOS

## Passo 1: Preparar o Projeto

```bash
# Entre na pasta
cd hirefy-landing

# Instale as dependências
npm install

# Teste localmente
npm run dev
```

Abra http://localhost:3000 - você verá a landing page funcionando! 🎉

## Passo 2: Criar Repositório no GitHub

```bash
# Inicialize git
git init
git add .
git commit -m "Landing page Hirefy pronta"

# Crie um novo repositório no GitHub e depois:
git remote add origin https://github.com/SEU-USUARIO/hirefy-landing.git
git branch -M main
git push -u origin main
```

## Passo 3: Deploy no Vercel (GRÁTIS e AUTOMÁTICO)

1. Acesse [vercel.com](https://vercel.com) e faça login com GitHub
2. Clique em "Add New Project"
3. Selecione o repositório `hirefy-landing`
4. Clique em "Deploy" (não precisa configurar nada!)
5. Aguarde 2 minutos ⏱️
6. **PRONTO!** Seu site está no ar! 🎉

Você receberá um link tipo: `hirefy-landing-xyz.vercel.app`

## Passo 4: Conectar Domínio Próprio (hirefy.careers)

### No Vercel:
1. Vá em "Settings" → "Domains"
2. Adicione `hirefy.careers`
3. Adicione `www.hirefy.careers`

### No Namecheap:
1. Vá em "Domain List" → "Manage" → "Advanced DNS"
2. Delete todos os registros A/CNAME existentes
3. Adicione estes registros:

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

4. Salve
5. Aguarde 5-30 minutos para propagar

**PRONTO!** Seu site estará em https://hirefy.careers 🎉

## ✅ Checklist Final

- [ ] Site rodando localmente
- [ ] Código no GitHub
- [ ] Deploy no Vercel
- [ ] Domínio configurado
- [ ] SSL habilitado (automático no Vercel)
- [ ] Email configurado (Zoho - já feito por você)

## 🎯 Próximos Passos

1. **Google Analytics** (opcional mas recomendado)
   - Crie conta em [analytics.google.com](https://analytics.google.com)
   - Copie o ID (G-XXXXXXXXXX)
   - Adicione no código (veja README.md)

2. **Search Console** (para SEO)
   - Acesse [search.google.com/search-console](https://search.google.com/search-console)
   - Adicione hirefy.careers
   - Verifique propriedade

3. **Product Hunt**
   - Prepare assets (screenshots, logo, vídeo)
   - Agende lançamento
   - Anuncie para sua rede

## 💡 Dicas Importantes

- **Deploy automático**: Cada push no GitHub atualiza o site automaticamente
- **Preview URLs**: Cada branch/PR gera uma URL de preview
- **Rollback fácil**: Pode voltar para versões anteriores com 1 clique
- **Zero configuração**: Vercel otimiza tudo automaticamente
- **HTTPS grátis**: SSL/TLS automático
- **CDN global**: Site rápido no mundo todo

## 🆘 Problemas Comuns

**"npm install" falhou**
```bash
# Use Node.js 18 ou superior
node --version

# Se precisar atualizar Node.js:
# Baixe em nodejs.org
```

**"Site não atualiza"**
- Limpe cache do navegador (Ctrl + Shift + R)
- Aguarde 1-2 minutos após deploy

**"Domínio não funciona"**
- DNS pode levar até 48h (geralmente 30 min)
- Verifique em [whatsmydns.net](https://whatsmydns.net)

## 📞 Precisa de Ajuda?

Se algo não funcionar:
1. Verifique os logs no Vercel Dashboard
2. Me chame que eu ajudo! 👋

---

Boa sorte com o lançamento! 🚀
