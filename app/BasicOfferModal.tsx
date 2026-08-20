"use client";

import { useEffect, useRef, useState } from "react";

const missingItems = [
  "250+ Flashcards de Vocabulário",
  "Slides Prontos Para Aula",
  "Kit Inglês Interativo",
  "Guia de Planejamento",
  "Kit de Aulas de Emergência",
  "Atualizações Semanais",
];

type BasicOfferModalProps = {
  basicCheckoutUrl: string;
  discountCheckoutUrl: string;
};

export function BasicOfferModal({ basicCheckoutUrl, discountCheckoutUrl }: BasicOfferModalProps) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button className="cta-button basic-offer-trigger" type="button" onClick={() => setOpen(true)}>
        Quero o pacote básico
      </button>

      {open ? (
        <div
          aria-labelledby="basic-offer-title"
          aria-modal="true"
          className="basic-offer-overlay"
          role="dialog"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
        >
          <div className="basic-offer-modal">
            <div className="basic-offer-header">
              <div className="basic-offer-gift" aria-hidden="true">
                <span className="gift-icon">
                  <span />
                </span>
              </div>
              <button
                ref={closeButtonRef}
                aria-label="Fechar oferta"
                className="basic-offer-close"
                type="button"
                onClick={() => setOpen(false)}
              >
                ×
              </button>
              <h3 id="basic-offer-title">🎁 ESPERE! Vai deixar esses bônus incríveis?</h3>
            </div>

            <div className="basic-offer-body">
              <p className="basic-offer-kicker">
                O Pacote Básico <strong>NÃO INCLUI:</strong>
              </p>

              <ul className="basic-offer-missing">
                {missingItems.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">×</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="basic-offer-upgrade">
                <span>Por apenas + R$ 7,90, destrave o</span>
                <strong>PACOTE COMPLETO</strong>
                <small>com todos os Bônus (valem R$ 97,24)</small>
              </div>

              <a className="basic-offer-primary" href={discountCheckoutUrl}>
                SIM! Quero o Pacote Completo Com Desconto
                <span>(R$17,90)</span>
              </a>
              <a className="basic-offer-secondary" href={basicCheckoutUrl}>
                Continuar apenas com o pacote básico
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
