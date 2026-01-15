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

    const numeroWhatsApp = "5531999999999"; // TROQUE PELO NÚMERO DA WMA

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  });
