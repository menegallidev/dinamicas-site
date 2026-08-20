# Dinamicas de Ingles - Site de Vendas

Este pacote contem o codigo-fonte completo do site, incluindo paginas, estilos, videos, imagens, carrossel, FAQ, modal de oferta e links de checkout.

## Requisitos

- Node.js 22.13 ou superior
- npm

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra o endereco exibido no terminal, normalmente:

```text
http://127.0.0.1:3000/
```

## Como gerar a versao de producao

```bash
npm install
npm run build
```

O projeto usa Vinext/Vite e gera a versao de producao na pasta `dist`.

## Links de checkout configurados

- Pacote Basico R$10: `https://pay.lowify.com.br/checkout.php?product_id=QZjeXg`
- Oferta com desconto R$17,90: `https://pay.lowify.com.br/go.php?offer=v0t2ghe`
- Pacote Completo R$27,90: `https://pay.lowify.com.br/go.php?offer=q1zasdy`

## Arquivos principais

- `app/page.tsx`: conteudo principal da landing page.
- `app/globals.css`: estilos visuais e responsividade.
- `app/BasicOfferModal.tsx`: modal de oferta do pacote completo com desconto.
- `app/FaqAccordion.tsx`: perguntas frequentes fechadas inicialmente.
- `app/TestimonialCarousel.tsx`: carrossel dos prints de WhatsApp.
- `app/PurchaseToast.tsx`: pop-up de compra no canto superior direito.
- `app/VideoPlayer.tsx`: players de video.
- `public/assets`: imagens, prints, videos e posters usados no site.

## Observacao sobre hospedagem

Este projeto nao precisa enviar a pasta `node_modules` para a hospedagem. A hospedagem deve instalar as dependencias com `npm install` e rodar `npm run build`.
