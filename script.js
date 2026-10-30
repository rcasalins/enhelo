// ============================================================
//  NÚMERO DE WHATSAPP
//  Escríbelo con el código del país y sin espacios ni símbolos.
//  Ejemplo para Colombia: 573001234567
// ============================================================
const WHATSAPP = "573043629835";

// Todos los enlaces con data-wa abren WhatsApp con su mensaje ya escrito.
document.querySelectorAll("[data-wa]").forEach((link) => {
  const text = encodeURIComponent(link.dataset.wa || "Hola Enhelo.");
  link.href = `https://wa.me/${WHATSAPP}?text=${text}`;
  link.target = "_blank";
  link.rel = "noopener";
});

document.getElementById("year").textContent = new Date().getFullYear();
