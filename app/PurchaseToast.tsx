"use client";

import { useEffect, useState } from "react";

const buyers = [
  "Renata Ribeiro",
  "Mariana Costa",
  "Juliana Martins",
  "Camila Oliveira",
  "Patricia Almeida",
  "Fernanda Souza",
  "Larissa Gomes",
  "Ana Paula Rocha",
  "Bianca Ferreira",
  "Sabrina Lima",
];

const times = [
  "há 57 minutos",
  "há 49 minutos",
  "há 42 minutos",
  "há 36 minutos",
  "há 31 minutos",
  "há 24 minutos",
  "há 18 minutos",
  "há 12 minutos",
  "há 8 minutos",
  "há 3 minutos",
];

function shuffledNames() {
  const list = [...buyers];

  for (let index = list.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [list[index], list[swapIndex]] = [list[swapIndex], list[index]];
  }

  return list;
}

export function PurchaseToast() {
  const [names, setNames] = useState(buyers);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setNames(shuffledNames());

    let hideTimer = window.setTimeout(() => setVisible(false), 8500);

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % buyers.length);
      setVisible(true);
      window.clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => setVisible(false), 8500);
    }, 60000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <aside className={`purchase-toast ${visible ? "show" : ""}`} aria-live="polite" aria-atomic="true">
      <div className="purchase-check" aria-hidden="true">
        ✓
      </div>
      <div>
        <strong>{names[index]}</strong>
        <span>Adquiriu o Pacote Completo</span>
        <b>{times[index]}</b>
      </div>
    </aside>
  );
}
