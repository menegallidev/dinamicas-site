"use client";

import { useState } from "react";

type FaqItem = {
  answer: string;
  icon?: "check" | "shield";
  question: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<boolean[]>(
    () => items.map(() => false),
  );

  function toggle(index: number) {
    setOpenItems((current) =>
      current.map((isOpen, currentIndex) =>
        currentIndex === index ? !isOpen : isOpen,
      ),
    );
  }

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = openItems[index];

        return (
          <article className={`faq-card ${isOpen ? "open" : ""}`} key={item.question}>
            <button
              aria-expanded={isOpen}
              className="faq-question"
              onClick={() => toggle(index)}
              type="button"
            >
              <span className={`faq-icon ${item.icon === "shield" ? "shield-icon" : ""}`}>
                {item.icon === "shield" ? "♢" : "✓"}
              </span>
              <strong>{item.question}</strong>
              <span className="faq-chevron" aria-hidden="true">
                {isOpen ? "⌃" : "⌄"}
              </span>
            </button>
            {isOpen ? <p>{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
