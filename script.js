const WHATSAPP = "5583986555108"; 

const products = [
  {
    id: 1,
    name: " Drusa de Ametista",
    price: 29.90,
    image: "c:\\Users\\diasm\\Downloads\\Amethyst🐉.jpg",
    description: "A pedra ametista é um dos cristais mais conhecidos e valorizados no campo espiritual, símbolo de sabedoria, paz e elevação da consciência.",
    care: [
      "Também pode ser energizada com a luz da lua cheia ou selenita.",
      "Evite exposição prolongada ao sol forte.",
    ]
  },
  {
    id: 2,
    name: "Quartzo Rosa bruto",
    price: 12.90,
    image: "c:\\Users\\diasm\\Downloads\\crystals.jpg",
    description: "O quartzo rosa é conhecido espiritalmente como a pedra do amor-próprio, a pedra vibra diretamente em sintonia com o Chakra Cardíaco (Anahata), ajudando a abrir espaço para sentimentos de afeto, compaixão e acolhimento trazendo suavidade para o campo energético.",
    care: [
      "Pode ser limpo com apenas água corrente ou água corrente e sal grosso com o intuito de limpeza energética.",
      "energizado com a luz da lua cheia ou selenita."
    ]
  },
  {
    id: 3,
    name: "Pedra ônix rolada",
    price: 12.90,
    image: "c:\\Users\\diasm\\Downloads\\download (3).jpg",
    description: " É considerada uma das principais pedras de defesa contra energias densas, inveja, ataques espirituais e vibrações negativas do ambiente. Conecta-se diretamente ao primeiro chakra (Muladhara), ajudando a manter os pés no chão, trazendo estabilidade, segurança e foco em momentos de grande confusão mental ou estresse.",   
    care: [
      "Por absorver muita carga pesada, recomenda-se limpá-la periodicamente em água corrente com sal grosso, ou sobre uma drusa de cristal / selenita, e recarregá-la preferencialmente em contato com a terra.",
      "Evite exposição ao sol intenso."
    ]
  },
  {
    id: 4,
    name: "Selenita",
    price:  16.90,
    image: "c:\\Users\\diasm\\Downloads\\download (4).jpg",
    description: "É um dos cristais mais poderosos para limpar energias negativas de pessoas, ambientes e até de outros cristais (bastando apoiar outras pedras sobre uma placa de selenita).",
    care: [
      " Diferente de muitos minerais, a selenita não precisa ser limpa ou recarregada energeticamente, pois ela própria dissolve as energias densas que absorve.",
    ]
  },
  {
    id: 5,
    name: "Quartzo Azul bruto",
    price: 12.90,
    image: "c:\\Users\\diasm\\Downloads\\download (5).jpg",
    description: "O quartzo azul é uma pedra de comunicação, expressão e criatividade. Ele ajuda a acalmar a mente, promovendo clareza mental e facilitando a expressão de pensamentos e sentimentos.",
care: [
  "Pode ser limpo com apenas água corrente ou água corrente e sal grosso com o intuito de limpeza energética.",
      "energizado com a luz da lua cheia ou selenita.",
  
]
  },
  {
    id: 6,
    name: " Pirita bruta",
    price: 29.90,
    image:"c:\\Users\\diasm\\Downloads\\Pyrite.jpg",
    description: "A pirita é amplamente conhecida na espiritualidade e no misticismo como a pedra da prosperidade, da abundância e da força pessoal. Devido ao seu brilho metálico e tom dourado (que lhe rendeu historicamente o apelido de (ouro dos tolos), sua energia está fortemente ligada ao elemento fogo e ao chakra do plexo solar.",
  care: [
    " Por conter ferro em sua composição, evite o uso de água, sal ou umidade, pois isso pode oxidar e danificar a pedra. Prefira a limpeza a seco com um pincel ou pano macio, ou energize sob a luz da Lua por cerca de 6 horas ou do Sol por até 3 horas."
  ]
  },
  {
    id: 7,
    name: "Olho de Tigre rolado",
    price: 12.90,
    image: "c:\\Users\\diasm\\Downloads\\download (6).jpg",
    description: " Atua como uma barreira que repele energias negativas, inveja e mau-olhado, devolvendo a vibração pesada para a terra. Estimula a autoconfiança, a determinação e a capacidade de enfrentar momentos de mudança, medo ou grandes desafios.",
    care: [
      "Pode ser limpo com água corrente e sal grosso, ou sobre uma drusa de cristal / selenita, e recarregado preferencialmente em contato com a terra.",
      "Também pode ser energizada com a luz solar (cerca de 4 horas) ou da lua cheia (cerca de 6 horas)."
    ]
  },
  {   id: 8,
    name: "Quartzo verde rolado",
    price: 12.90,
    image: "c:\\Users\\diasm\\Downloads\\download (7).jpg", 
    description: "O Quartzo verde é uma pedra de cura poderosa, conhecida por sua capacidade de promover o equilíbrio emocional e a regeneração. É amplamente utilizada para fortalecer a conexão com a natureza e a vitalidade.",
    care: [
      "Pode ser limpo com apenas água corrente ou água corrente e sal grosso com o intuito de limpeza energética.",
      "energizado com a luz da lua cheia, solar ou selenita.",
      
    ]
  },
  {
    id: 9,
    name: "Cianita Azul bruta",
    price: 12.90,
    image: "c:\\Users\\diasm\\Downloads\\What Are Chakras_ (1).jpg",
    description: "A cianita azul é uma pedra de comunicação e expressão, conhecida por sua capacidade de facilitar a clareza mental e a conexão espiritual. Ela ajuda a equilibrar as energias do corpo e da mente, promovendo a harmonia interior.", 
    care: [
      "A cianita azul não acumula energias negativas e dispensa limpezas frequentes. Quando quiser limpar, você pode usar defumação (incenso ou sálvia) ou deixá-la sobre uma placa de selenita.",
      "Evitar exposição prolongada ao sol e à água"  
    ]
  },
  {
    id: 10,
    name: "Jaspe Vermelho rolado",
    price: 12.90,
    image: "c:\\Users\\diasm\\Downloads\\download (9).jpg",
    description: "O Jaspe Vermelho é uma pedra de cura poderosa, conhecida por sua capacidade de promover o equilíbrio emocional e a regeneração. É amplamente utilizada para fortalecer a conexão com a natureza e a vitalidade feminina.",
    care: [
      "Pode ser limpo com apenas água corrente ou água corrente e sal grosso com o intuito de limpeza energética.",
      "energizado com a luz da lua cheia, solar ou selenita.",
      
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
      <p>Unidade</p>
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
      : "<p>Seu carrinho está vazio. </p>";
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
    `Olá! Gostaria de fazer um pedido.:\n\n` +
    `${items}\n\nTotal: ${money(total)}\n\n` +
    `Gostaria de confirmar meu pedido!`;

  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

renderProducts();
updateCart();