// menu profissional
const header = document.querySelector(".header");
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu-mobile");
const overlay = document.querySelector(".menu-overlay");

let lastScroll = 0;

// ABRIR / FECHAR MENU
toggle.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", closeMenu);

function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
}

// HEADER INTELIGENTE (SCROLL)
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 120) {
    header.classList.add("hide"); // descendo
  } else {
    header.classList.remove("hide"); // subindo
  }

  lastScroll = currentScroll;
});
document
  .getElementById("form-whatsapp")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = this.nome.value;
    const telefone = this.telefone.value;
    const cidade = this.cidade.value;
    const servico = this.servico.value;

    const mensagem = `
Olá, gostaria de solicitar um orçamento.

Nome: ${nome}
WhatsApp: ${telefone}
Cidade/Bairro: ${cidade}
Serviço: ${servico}
    `.trim();

    const numeroWhatsApp = "5531982112125"; // TROQUE PELO NÚMERO DA WMA

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  });

// lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".gallery-item img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});

// faq
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    const icon = button.querySelector(".faq-icon");

    const isOpen = faqItem.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".faq-answer").style.maxHeight = null;
      item.querySelector(".faq-icon").textContent = "+";
    });

    if (!isOpen) {
      faqItem.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "–";
    }
  });
});

// formulario cta
document.querySelectorAll(".form-whatsapp").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const origem = form.dataset.origem || "Site";
    const dados = new FormData(form);

    let mensagem = `Olá, gostaria de um orçamento.%0A`;
    mensagem += `Origem: ${origem}%0A`;

    for (let [campo, valor] of dados.entries()) {
      if (valor) {
        mensagem += `${campo}: ${valor}%0A`;
      }
    }

    const telefoneEmpresa = "5531982112125"; // ALTERE AQUI
    const url = `https://wa.me/${telefoneEmpresa}?text=${mensagem}`;

    window.open(url, "_blank");
  });
});

// ano atual automatico
document.getElementById("ano").textContent = new Date().getFullYear();
