import type { ReactNode } from "react";
import { BasicOfferModal } from "./BasicOfferModal";
import { FaqAccordion } from "./FaqAccordion";
import { PurchaseToast } from "./PurchaseToast";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { VideoPlayer } from "./VideoPlayer";

const transformations = [
  ["Planejamento demorado e estressante", "Aulas prontas em minutos"],
  ["Alunos desinteressados e desmotivados", "Dinamicas que engajam qualquer turma"],
  ["Material caro e desatualizado", "400+ dinamicas e atividades prontas para usar"],
  ["Domingos perdidos preparando aulas", "Sua paz de espirito e domingos livres de volta"],
];

const metrics = [
  ["📚", "Aulas Dinamicas"],
  ["⏰", "Economia de Tempo"],
  ["🎯", "Alunos Engajados"],
  ["✨", "Resultados Visiveis"],
];

const featureCards = [
  ["📦", "+400 Dinamicas Prontas", "prontas pra imprimir e aplicar"],
  ["👥", "Para Todos os Niveis (A1-C1)", "funciona com qualquer turma"],
  ["🕒", "Acesso Vitalicio", "compre uma vez, use sempre"],
  ["🔄", "Atualizacoes Semanais", "material sempre novo"],
  ["🛡️", "Garantia de 7 Dias", "sem risco nenhum"],
  ["⚡", "Entrega Imediata", "acesso liberado na hora"],
];

const bonuses = [
  ["/assets/bonus/bonus-1.jpg", "250+ Flashcards Prontos", "Centenas de Flashcards prontos e separados por temas para praticar vocabulario de forma divertida."],
  ["/assets/bonus/bonus-2.jpg", "500+ Atividades Para Imprimir", "500+ atividades para todos os niveis (A1 a C1) e para alunos especiais. Todas prontas para imprimir e aplicar nas suas aulas."],
  ["/assets/bonus/bonus-3.jpg", "Slides Prontos Para Aula", "Slides didaticos prontos, cobrindo os principais conteudos gramaticais do ingles."],
  ["/assets/bonus/bonus-4.jpg", "Kit Ingles Interativo", "Pacote de 30 materiais visuais e jogos ludicos, prontos para imprimir, montar e aplicar nas suas aulas."],
  ["/assets/bonus/bonus-5.jpg", "Guia de Planejamento", "Planejamento anual de ingles pronto para usar, alinhado a BNCC e adequado para todos os niveis."],
  ["/assets/bonus/bonus-6.jpg", "Kit de Aulas de Emergencia", "Aulas dinamicas prontas para aqueles dias em que voce precisa de algo rapido e eficaz."],
];

const faqs: {
  answer: string;
  icon?: "check" | "shield";
  question: string;
}[] = [
  {
    question: "O acesso chega na hora?",
    answer:
      "Sim! O sistema é automatizado. Assim que o pagamento for confirmado, você receberá o acesso instantaneamente no seu e-mail e no seu WhatsApp.",
  },
  {
    question: "Serve para quais níveis e idades?",
    answer:
      "O material é extremamente versátil e inclui atividades para todos os níveis, desde o básico até o avançado, atendendo crianças, adolescentes e adultos.",
  },
  {
    icon: "shield",
    question: "É pagamento único ou mensalidade?",
    answer:
      "Pagamento único! Você paga uma única vez e garante o acesso vitalício a todo o material, incluindo as futuras atualizações.",
  },
  {
    question: "Qual a diferença entre o Pacote Básico e o Completo?",
    answer:
      "O Pacote Básico foca nas dinâmicas e atividades principais. O Pacote Completo inclui todos os bônus exclusivos, além de suporte prioritário e atualizações vitalícias.",
  },
  {
    icon: "shield",
    question: "E se eu não gostar do material?",
    answer:
      "Você tem 7 dias de garantia incondicional. Se não gostar, basta pedir o reembolso que devolvemos 100% do seu investimento.",
  },
  {
    question: "Funciona para aulas Online e Presenciais?",
    answer:
      "Com certeza! As atividades foram pensadas para serem facilmente adaptadas tanto para o ambiente presencial quanto para o ensino online.",
  },
];

const checkoutLinks = {
  basic: "https://pay.lowify.com.br/checkout.php?product_id=QZjeXg",
  complete: "https://pay.lowify.com.br/go.php?offer=q1zasdy",
  discountComplete: "https://pay.lowify.com.br/go.php?offer=v0t2ghe",
};

function Button({ children, className = "", href = "#ofertas" }: { children: ReactNode; className?: string; href?: string }) {
  const buttonClassName = [
    "cta-button",
    href.startsWith("https://pay.lowify.com.br/") ? "btn-ic" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={buttonClassName} href={href}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <PurchaseToast />
      <div className="top-ribbon">🔥 Oferta especial por tempo limitado</div>

      <section className="hero section-white">
        <div className="trust-badge">⭐⭐⭐⭐⭐ Aprovado por | <strong>1.250+ professores de inglês</strong></div>
        <h1>
          <span className="desktop-title">
            Teacher, <span className="blue-word">economize tempo</span> e<br />
            tenha <span className="blue-word">aulas incríveis prontas</span><br />
            em minutos
          </span>
          <span className="mobile-title">
            Teacher,<br />
            <span className="blue-word">economize tempo</span><br />
            e tenha aulas<br />
            <span className="blue-word">incríveis prontas</span><br />
            em minutos
          </span>
        </h1>
        <p className="hero-subtitle">
          Chega de perder horas planejando. +400 dinâmicas e recursos extras prontos pra aplicar em sala.
        </p>
        <p className="watch-label">👇 Assista o vídeo abaixo</p>
        <VideoPlayer
          className="hero-video"
          poster="/assets/videos/hero-poster.jpg"
          src="/assets/videos/content-video.mp4"
          title="video de apresentacao"
        />
        <Button>Quero Acessar Agora</Button>
      </section>

      <section className="transformation section-white">
        <h2>Sua <span>Transformação</span></h2>
        <p className="section-subtitle">Reconhece alguma dessas situações?<br />Veja como sua rotina vai mudar</p>

        <div className="transform-list">
          {transformations.map(([before, after]) => (
            <div className="transform-row" key={before}>
              <div className="before"><b>×</b>{before}</div>
              <span className="row-arrow">→</span>
              <div className="after"><b>✓</b>{after}</div>
            </div>
          ))}
        </div>

        <div className="metric-grid">
          {metrics.map(([icon, title]) => (
            <div className="metric-card" key={title}>
              <span>{icon}</span>
              <strong>{title}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="receive section-soft">
        <div className="divider-mark">⌄</div>
        <h2><span>Veja o que você vai receber</span></h2>
        <VideoPlayer
          className="phone-video"
          poster="/assets/videos/phone-poster.jpg"
          src="/assets/videos/hero-video.mp4"
          title="video do material recebido"
        />
      </section>

      <section className="blue-strip">
        <strong>Pronto para transformar suas aulas?</strong>
        <Button>Começar Agora</Button>
      </section>

      <section className="features section-white">
        <h2>Tudo o que você precisa<br /><span>em um só lugar</span></h2>
        <div className="feature-grid">
          {featureCards.map(([icon, title, text]) => (
            <div className="feature-card" key={title}>
              <span>{icon}</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="bonus-pill">💎 BÔNUS EXCLUSIVOS</div>
        <h3>E tem mais! Leve também:</h3>

        <div className="bonus-list">
          {bonuses.map(([image, title, text]) => (
            <article className="bonus-card" key={title}>
              <div className="bonus-art">
                <img src={image} alt="" />
              </div>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="bonus-value">
          <span>VALOR TOTAL DOS BÔNUS</span>
          <s>R$ 97,24</s>
          <strong>Inclusos <mark>GRÁTIS</mark> no Pacote Completo!</strong>
        </div>
      </section>

      <section className="middle-cta section-soft">
        <em>Já imaginou ter tudo isso nas suas mãos?</em>
        <h2>Comece a transformar suas aulas <span>agora mesmo</span></h2>
        <Button>Ver Ofertas Especiais</Button>
        <p>🔒 Garantia de 7 dias • Pagamento único</p>
      </section>

      <section className="testimonials section-white">
        <em>Mas não acredite só na gente — veja os resultados de quem já usa em sala de aula:</em>
        <h2><span>O que dizem nossos clientes</span></h2>
        <div className="proof-note">Prints Reais de Depoimentos e Entregas do material.<br />Nosso Suporte sempre à sua disposição! 💙</div>
        <TestimonialCarousel />
      </section>

      <section className="pricing section-white" id="ofertas">
        <em>Você já viu o que tem lá dentro. Agora...</em>
        <h2>Quanto vale o seu domingo de volta?</h2>
        <p>Acesso completo por um preço que cabe no seu bolso.</p>
        <div className="price-badges">
          <span>◯ Enviado no seu e-mail e WhatsApp</span>
          <span>▣ Pode ser impresso</span>
          <span>♢ Garantia de 7 dias</span>
        </div>

        <div className="price-grid">
          <article className="price-card">
            <h3>Pacote Básico</h3>
            <s>R$ 37,90</s>
            <strong className="price">R$10</strong>
            <small>Pagamento único</small>
            <mark>ECONOMIZE R$ 27,90</mark>
            <ul>
              <li>+400 Dinâmicas de Inglês Prontas</li>
              <li>+500 Atividades Para Imprimir</li>
              <li>Acesso Vitalício</li>
            </ul>
            <div className="download-box">Receba o link de download instantaneamente no seu e-mail e WhatsApp.</div>
            <BasicOfferModal
              basicCheckoutUrl={checkoutLinks.basic}
              discountCheckoutUrl={checkoutLinks.discountComplete}
            />
          </article>

          <article className="price-card featured-price">
            <div className="best-choice">★ MELHOR ESCOLHA ★</div>
            <h3>Pacote Completo</h3>
            <s>R$ 127,90</s>
            <strong className="price">R$27,90</strong>
            <small>Pagamento único</small>
            <mark>🔥 ECONOMIZE R$ 100,00</mark>
            <ul>
              <li>Tudo do Pacote Básico (+400 Dinâmicas + 500 Atividades) + Bônus Exclusivos</li>
              <li>Atualizações semanais com novos materiais</li>
              <li>Suporte Prioritário VIP</li>
              <li>Acesso vitalício ao material principal e bônus</li>
            </ul>
            <div className="exclusive-box">
              <strong>🎁 BÔNUS EXCLUSIVOS (VALOR: R$ 97,24 POR R$ 0,00):</strong>
              <span>📁 +250 Flashcards P/ Vocabulário</span>
              <span>🎥 Slides Prontos Para Aula</span>
              <span>🎮 Kit Inglês Interativo</span>
              <span>🧾 Guia de Planejamento</span>
              <span>🚨 Kit de Aulas de Emergência</span>
            </div>
            <div className="download-box">Receba o link de download instantaneamente no seu e-mail e WhatsApp.</div>
            <Button href={checkoutLinks.complete}>Quero o Pacote Completo</Button>
          </article>
        </div>
        <p className="limited">◷ OFERTA ESPECIAL DISPONÍVEL POR TEMPO LIMITADO</p>
      </section>

      <section className="guarantee section-soft">
        <div className="guarantee-card">
          <div className="shield">🛡️</div>
          <h2>Garantia Incondicional de 7 Dias</h2>
          <p>Se por qualquer motivo você não ficar satisfeito com o material, basta enviar um e-mail em até 7 dias que devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.</p>
          <div><span>✓ Reembolso total</span><span>✓ Sem perguntas</span><span>✓ Processo rápido</span></div>
        </div>
      </section>

      <section className="faq section-white" id="faq">
        <h2><span>Perguntas Frequentes</span></h2>
        <FaqAccordion items={faqs} />
      </section>

      <section className="final-cta" id="final">
        <h2>TEACHER TRANSFORME SUAS AULAS<br />HOJE MESMO!</h2>
        <p>Pare de perder tempo. Comece hoje a usar dinâmicas e atividades prontas que realmente funcionam em sala.</p>
        <Button className="final-button"><span className="book" aria-hidden="true" />Quero economizar tempo agora</Button>
        <div className="final-checks"><span>✓ Acesso imediato</span><span>✓ Garantia de 7 dias</span><span>✓ Sem mensalidade</span></div>
      </section>

      <footer>
        <div className="footer-inner">
          <p>© 2026 Dinâmicas de Inglês. Todos os direitos reservados.</p>
          <p>Segurança Garantida ♢ <span /> Dados Protegidos ▢</p>
        </div>
      </footer>
    </main>
  );
}
