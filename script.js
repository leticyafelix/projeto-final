
const WHATSAPP = "5583986555108"; 
// Catálogo de produtos e cristais da loja
const products = [
  {
    id: 1,
    name: "Ametista",
    price: 39.90,
    image: "https://images.openai.com/static-rsc-4/QhWF4smR9qplBpW57ED0aDHa-uCCailuLRpd04jb792t2DK3vXfCq3wARpCt-9MXrGvbdYvgX0dzR9SDX1xhM-roLUbzpDuo4jquoUJABfQIyZUJg6NeOtcUXw4nE5543HS99KwArjkwjJCw9FCMFzST3nxOiXBtAQzAJjIU82y5kb1BTB9gZPSnvWG9Z-pV?purpose=fullsize",
    description: "A ametista é um cristal violeta tradicionalmente associado à tranquilidade, espiritualidade e equilíbrio.",
    care: [
      "Evite exposição prolongada ao sol forte.",
      "Limpe com pano macio e seco."
    ]
  },
  {
    id: 2,
    name: "Quartzo Rosa",
    price: 34.90,
    image: "https://images.openai.com/static-rsc-4/ToaBcji842QD76XPl-t6rXanmHHyGOe7jJ3wM7QKoMLUN8lmttIOFNClfpFQYD6HZv_c-nipHHSV1VwYDyz5yYyLSRPbf7mx-2WrwUHvjy5kRjYSN7yciqeVS2-PjVgbNh6mWd85lt9Pv4mVWzjg62FgZf1VTMHlA2WmdwHQStoT2mbVtZyWhbSXz8yye6yK?purpose=fullsize",
    description: "O quartzo rosa é conhecido como o cristal do amor e simboliza carinho, afeto e autoestima.",
    care: [
      "Evite quedas e impactos.",
      "Limpe com pano macio e água, secando bem."
    ]
  },
  {
    id: 3,
    name: "Quartzo Cristal",
    price: 29.90,
    image: "https://images.openai.com/static-rsc-4/osGJHsdaM2EJ0H53cgI5RxYQzgU_SMXsexbCUP4IvwPJ5TUZIWNS5C4MIo1O7xfz4A2TBLkpCx-XWCGoD3aOE5FkwgYQAHZziVU5eZSjPRMk-oQwLYIJ6OwBWraWqVx0YsrCWZdHKVQenQ5JfxTzSG9V3sVpmWwMzwOkDAtEQwVLGdmIwhHwXfN3NR9aC3Fa?purpose=fullsize",
    description: "Um cristal transparente muito apreciado por sua beleza e tradicional associação à clareza e harmonia.",
    care: [
      "Guarde separado de pedras que possam riscar.",
      "Limpe delicadamente com água e seque."
    ]
  },
  {
    id: 4,
    name: "Fluorita",
    price:  45.90,
    image: "https://images.openai.com/static-rsc-4/8xf5F9AJVaiqdmp8Ja3zs0w471ole301DVuiCtwluoiwmDVx0hwayEFCkFy-DI-Z8AalSXXLKMuvRrc3b_XpJZDE4pk98v20ANTzHkYeoK1VOVTLTjaOnYS7inf8hYkmHEH-SUQHKzbLULyaisbLuKUaZxxzre3G27D9hL-GupiRUF3Ma4aKoXgubmOK7AAi?purpose=fullsize",
    description: "A fluorita apresenta cores encantadoras e é tradicionalmente associada ao foco e à organização.",
    care: [
      "Evite contato com produtos químicos.",
      "Não deixe de molho na água."
    ]
  },
  {
    id: 5,
    name: "Labradorita",
    price: 49.90,
    image:"https://images.openai.com/static-rsc-4/MYhBYannC-gYGTgrpxIjLxawbKk-wjxRaPSU9YzWup213sUVaOzOgsQhfyiEDFUHwE8w8lLiWSpqucXAMz6-0tFpMnHrquwsSy2WJIfZSJ8R9cWmsxjnOByBdnGuRHEKeQcy2HBx6RcOarRhU3EsXK5zfkVjvU_q9KgrzaWGMhMX56v4uYK1E2hzvEbeWnCY?purpose=fullsize",
    description: "A Labradorita é uma pedra encantadora, conhecida por seus reflexos azulados, violetas e dourados que brilham conforme a luz. Sua beleza misteriosa simboliza transformação, intuição e proteção. Um cristal especial para quem ama a magia e a conexão com o universo.",
care: [
  "evite quedas e impactos.",
  "limpe com pano macio e seco."
]
  },
  {
    id: 6,
    name: "Pedra da Lua",
    price: 42.90,
    image: "https://images.openai.com/static-rsc-4/rR-Ue0nJWDkZZECuj6HT_7cp4HOo8o3rgMK4eDUwdec5aXnafixYUZFzjV4OCmF93gehIs280vC-LbWSXCW4iWvEYEv8wDTO2B9VmPlkR0u2Agu_9LZvs38wGg0Rrh3JjTDmA9OUj3uhzNI2eJfXev59G-JiD8LPSz-5O3GZsvbL4dXNbiaWGDjOIP-P4JkF?purpose=fullsize",
    description: "A Pedra da Lua é conhecida por seu brilho delicado e reflexos azulados que lembram a luz da lua. Tradicionalmente associada à feminilidade, intuição, novos ciclos e equilíbrio emocional, é um cristal perfeito para quem busca conexão com sua própria essência.",
  care: [
    "Evite quedas e Impactos",
    "Limpe delicadamente com um pano macio e seco."
  ]
  }
  
];

let cart = [];

const money = value =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

function renderProducts() {
  const container = document.getElementById("products");

  container.innerHTML = products.map(product => `
    <article class="product-card">
      <img
        src="${product.image}"
        alt="${product.name}"
        onclick="openProduct(${product.id})"
      >
      <h3>${product.name}</h3>
      <p>Descubra a beleza deste cristal.</p>
      <div class="price">${money(product.price)}</div>
      <button onclick="openProduct(${product.id})">
        Conhecer cristal
      </button>
      <button onclick="addToCart(${product.id})">
        Comprar
      </button>
    </article>
  `).join("");
}

function openProduct(id) {
  const product = products.find(p => p.id === id);

  document.getElementById("detail-image").src = product.image;
  document.getElementById("detail-name").textContent = product.name;
  document.getElementById("detail-description").textContent =
    product.description;
  document.getElementById("detail-price").textContent =
    money(product.price);

  document.getElementById("detail-care").innerHTML =
    product.care.map(tip => `<li>${tip}</li>`).join("");

  document.getElementById("detail-add").onclick = () => {
    addToCart(id);
    closeProduct();
  };

  document.getElementById("product-modal").style.display = "flex";
}

function closeProduct() {
  document.getElementById("product-modal").style.display = "none";
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateCart() {
  const count = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  document.getElementById("cart-count").textContent = count;
  document.getElementById("cart-total").textContent = money(total);

  document.getElementById("cart-items").innerHTML =
    cart.length
      ? cart.map(item => `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong><br>
            ${item.quantity} x ${money(item.price)}
          </div>
          <button onclick="removeFromCart(${item.id})">
            Remover
          </button>
        </div>
      `).join("")
      : "<p>Seu carrinho está vazio. 💜</p>";
}

function toggleCart() {
  const modal = document.getElementById("cart-modal");
  const isOpen = modal.style.display === "flex";

  modal.style.display = isOpen ? "none" : "flex";
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  if (!/^\d{12,13}$/.test(WHATSAPP)) {
    alert("Configure o número correto do WhatsApp no arquivo script.js.");
    return;
  }

  const items = cart.map(item =>
    `• ${item.name} - ${item.quantity}x - ${money(item.price * item.quantity)}`
  ).join("\n");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  const message =
    `Olá! 💜 Vim pela loja Moon Mary e gostaria de fazer um pedido:\n\n` +
    `${items}\n\nTotal: ${money(total)}\n\n` +
    `Gostaria de confirmar meu pedido!`;

  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

renderProducts();
updateCart();
