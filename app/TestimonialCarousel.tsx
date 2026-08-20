"use client";

import { useState } from "react";

const slides = [
  { src: "/assets/testimonials/01.jpeg", alt: "Depoimento de cliente com atividade impressa" },
  { src: "/assets/testimonials/02.jpeg", alt: "Depoimento de cliente pelo WhatsApp" },
  { src: "/assets/testimonials/03.jpeg", alt: "Depoimento sobre jogo interativo aplicado em casa" },
  { src: "/assets/testimonials/04.png", alt: "Mensagem de suporte e envio do acesso" },
  { src: "/assets/testimonials/05.jpeg", alt: "Mensagem de agradecimento apos acesso aprovado" },
  { src: "/assets/testimonials/06.jpeg", alt: "Depoimento de cliente sobre engajamento dos alunos" },
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  function move(direction: -1 | 1) {
    setIndex((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <div className="testimonial-carousel" aria-label="Carrossel de depoimentos">
      <button
        className="carousel-arrow carousel-arrow-left"
        type="button"
        aria-label="Depoimento anterior"
        onClick={() => move(-1)}
      >
        ‹
      </button>

      <div className="testimonial-phone">
        <img src={slides[index].src} alt={slides[index].alt} />
      </div>

      <button
        className="carousel-arrow carousel-arrow-right"
        type="button"
        aria-label="Proximo depoimento"
        onClick={() => move(1)}
      >
        ›
      </button>

      <div className="carousel-dots" aria-label="Selecionar depoimento">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            className={slideIndex === index ? "active" : ""}
            aria-label={`Mostrar depoimento ${slideIndex + 1}`}
            aria-current={slideIndex === index ? "true" : undefined}
            onClick={() => setIndex(slideIndex)}
          />
        ))}
      </div>
    </div>
  );
}
