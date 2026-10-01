const LANGUAGE_KEY = "beautyStoreLanguage";
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "pt";

const translations = {
  pt: {
    "brand.title": "Beauty Store | Loja Virtual de Cosméticos",
    "page.home": "Beauty Store | Loja de Cosméticos",
    "page.products": "Produtos | Beauty Store",
    "page.detail": "Comprar | Beauty Store",
    "page.cart": "Carrinho | Beauty Store",
    "page.checkout": "Checkout | Beauty Store",
    "page.login": "Login | Beauty Store",
    "nav.home": "Início",
    "nav.products": "Produtos",
    "nav.highlights": "Destaques",
    "nav.cart": "Carrinho",
    "nav.login": "Login",
    "nav.open": "Abrir menu",
    "nav.close": "Fechar menu",
    "language.label": "Idioma",
    "home.heroEyebrow": "Nova coleção 2026",
    "home.heroTitle": "Beleza pronta para brilhar.",
    "home.heroBody": "Maquiagens, perfumes e esmaltes selecionados para acompanhar seu estilo.",
    "home.products": "Ver produtos",
    "home.highlights": "Conhecer destaques",
    "home.favorites": "Favoritos",
    "home.featuredTitle": "Destaques da loja",
    "home.featuredBody": "Descubra alguns dos produtos escolhidos para você.",
    "home.allProducts": "Ver vitrine completa",
    "home.experience": "Sua experiência",
    "home.experienceTitle": "Comprar fica mais simples",
    "home.experienceBody": "Encontre seus favoritos, organize a sacola e confira seu pedido.",
    "home.catalog": "Catálogo selecionado",
    "home.catalogBody": "Produtos de beleza organizados por categoria, com detalhes e preços.",
    "home.easyCart": "Carrinho prático",
    "home.easyCartBody": "Ajuste quantidades e revise seus itens antes de continuar.",
    "home.checkout": "Checkout completo",
    "home.checkoutBody": "Confira os dados de entrega e a forma de pagamento do pedido.",
    "products.eyebrow": "Vitrine",
    "products.title": "Nossos produtos",
    "products.body": "Escolha por categoria e adicione seus favoritos ao carrinho.",
    "filter.all": "Todos",
    "filter.bases": "Bases",
    "filter.lips": "Batons",
    "filter.eyes": "Olhos",
    "filter.nails": "Esmaltes",
    "filter.fragrance": "Perfumes",
    "detail.eyebrow": "Detalhes",
    "detail.title": "Comprar produto",
    "detail.quantity": "Quantidade",
    "detail.add": "Adicionar ao carrinho",
    "detail.buyNow": "Comprar agora",
    "detail.shipping": "Frete grátis em compras acima de R$ 150,00.",
    "detail.returns": "Troca gratuita em até 30 dias.",
    "detail.original": "Produtos originais selecionados para maquiagem, unhas e perfumaria.",
    "cart.eyebrow": "Sacola",
    "cart.title": "Seu carrinho",
    "cart.body": "Revise os produtos, ajuste quantidades e finalize a compra.",
    "cart.summary": "Resumo",
    "cart.subtotal": "Subtotal",
    "cart.freeShipping": "Grátis acima de R$ 150,00",
    "cart.total": "Total estimado",
    "cart.finish": "Finalizar compra",
    "cart.continue": "Continuar comprando",
    "cart.empty": "Seu carrinho está vazio. Escolha seus favoritos na página de produtos.",
    "cart.remove": "Remover",
    "checkout.eyebrow": "Pagamento",
    "checkout.title": "Finalizar compra",
    "checkout.body": "Preencha seus dados para concluir o pedido.",
    "checkout.personal": "Dados pessoais",
    "checkout.fullName": "Nome completo",
    "checkout.cpf": "CPF",
    "checkout.email": "E-mail",
    "checkout.phone": "Telefone",
    "checkout.address": "Endereço",
    "checkout.city": "Cidade",
    "checkout.state": "Estado",
    "checkout.select": "Selecione",
    "checkout.payment": "Forma de pagamento",
    "checkout.card": "Cartão de crédito ou débito",
    "checkout.pix": "Pix",
    "checkout.boleto": "Boleto bancário",
    "checkout.confirm": "Confirmar pedido",
    "checkout.summary": "Resumo do pedido",
    "checkout.itemsEmpty": "Nenhum produto no carrinho.",
    "checkout.shipping": "Frete",
    "checkout.freeShipping": "Grátis",
    "login.account": "Minha conta",
    "login.welcome": "Bem-vinda de volta",
    "login.intro": "Entre para acompanhar pedidos e continuar comprando.",
    "login.password": "Senha",
    "login.emailPlaceholder": "seuemail@exemplo.com",
    "login.passwordPlaceholder": "Digite sua senha",
    "login.showPassword": "Mostrar senha",
    "login.hidePassword": "Ocultar senha",
    "login.enter": "Entrar",
    "login.or": "ou",
    "login.new": "Novo por aqui? Crie sua conta:",
    "login.register": "Criar conta",
    "footer.tagline": "Produtos de beleza escolhidos para você.",
    "footer.navigation": "Navegação",
    "footer.purchase": "Minha compra",
    "footer.buy": "Comprar",
    "footer.checkout": "Checkout",
    "footer.copyright": "© 2026 Beauty Store. Todos os direitos reservados.",
    "product.added": "adicionado ao carrinho.",
    "cart.removed": "Produto removido do carrinho.",
    "cart.addButton": "Adicionar",
    "product.details": "Detalhes",
    "cart.emptyCheckout": "Adicione produtos ao carrinho antes de finalizar.",
    "checkout.success": "Pedido confirmado. Obrigada por comprar na Beauty Store!",
    "checkout.localSuccess": "Pedido de demonstração salvo neste navegador. Nenhum pagamento foi processado.",
    "checkout.failed": "Não foi possível registrar o pedido. Seus itens continuam no carrinho.",
    "login.required": "Preencha e-mail e senha.",
    "login.success": "Login realizado com sucesso.",
    "login.failed": "E-mail ou senha inválidos.",
    "login.unavailable": "Servidor de login indisponível. Tente novamente mais tarde.",
    "category.Bases": "Bases",
    "category.Batons": "Batons",
    "category.Olhos": "Olhos",
    "category.Esmaltes": "Esmaltes",
    "category.Perfumes": "Perfumes"
  },
  en: {
    "brand.title": "Beauty Store | Online Cosmetics Store",
    "page.home": "Beauty Store | Cosmetics",
    "page.products": "Products | Beauty Store",
    "page.detail": "Shop | Beauty Store",
    "page.cart": "Shopping Cart | Beauty Store",
    "page.checkout": "Checkout | Beauty Store",
    "page.login": "Sign in | Beauty Store",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.highlights": "Highlights",
    "nav.cart": "Cart",
    "nav.login": "Sign in",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "language.label": "Language",
    "home.heroEyebrow": "New collection 2026",
    "home.heroTitle": "Beauty, ready to shine.",
    "home.heroBody": "Makeup, fragrances, and nail polish selected to complement your style.",
    "home.products": "Shop products",
    "home.highlights": "Explore highlights",
    "home.favorites": "Favorites",
    "home.featuredTitle": "Store highlights",
    "home.featuredBody": "Discover a few products selected for you.",
    "home.allProducts": "View all products",
    "home.experience": "Your experience",
    "home.experienceTitle": "Shopping made simple",
    "home.experienceBody": "Find your favorites, organize your cart, and review your order.",
    "home.catalog": "Curated catalog",
    "home.catalogBody": "Beauty products organized by category, with details and prices.",
    "home.easyCart": "Easy shopping cart",
    "home.easyCartBody": "Adjust quantities and review your items before continuing.",
    "home.checkout": "Simple checkout",
    "home.checkoutBody": "Review delivery details and choose a payment method.",
    "products.eyebrow": "Shop",
    "products.title": "Our products",
    "products.body": "Choose a category and add your favorites to the cart.",
    "filter.all": "All",
    "filter.bases": "Foundation",
    "filter.lips": "Lipstick",
    "filter.eyes": "Eyes",
    "filter.nails": "Nail polish",
    "filter.fragrance": "Fragrance",
    "detail.eyebrow": "Details",
    "detail.title": "Product details",
    "detail.quantity": "Quantity",
    "detail.add": "Add to cart",
    "detail.buyNow": "Buy now",
    "detail.shipping": "Free shipping on orders over R$150.00.",
    "detail.returns": "Free exchanges within 30 days.",
    "detail.original": "Authentic makeup, nail, and fragrance products, carefully selected.",
    "cart.eyebrow": "Shopping bag",
    "cart.title": "Your cart",
    "cart.body": "Review your products, adjust quantities, and complete your order.",
    "cart.summary": "Summary",
    "cart.subtotal": "Subtotal",
    "cart.freeShipping": "Free over R$150.00",
    "cart.total": "Estimated total",
    "cart.finish": "Proceed to checkout",
    "cart.continue": "Continue shopping",
    "cart.empty": "Your cart is empty. Find your favorites on the products page.",
    "cart.remove": "Remove",
    "checkout.eyebrow": "Payment",
    "checkout.title": "Complete your order",
    "checkout.body": "Enter your details to complete your order.",
    "checkout.personal": "Personal details",
    "checkout.fullName": "Full name",
    "checkout.cpf": "Tax ID (CPF)",
    "checkout.email": "Email",
    "checkout.phone": "Phone",
    "checkout.address": "Address",
    "checkout.city": "City",
    "checkout.state": "State",
    "checkout.select": "Select",
    "checkout.payment": "Payment method",
    "checkout.card": "Credit or debit card",
    "checkout.pix": "Pix",
    "checkout.boleto": "Bank slip",
    "checkout.confirm": "Place order",
    "checkout.summary": "Order summary",
    "checkout.itemsEmpty": "There are no products in your cart.",
    "checkout.shipping": "Shipping",
    "checkout.freeShipping": "Free",
    "login.account": "My account",
    "login.welcome": "Welcome back",
    "login.intro": "Sign in to track orders and keep shopping.",
    "login.password": "Password",
    "login.emailPlaceholder": "you@example.com",
    "login.passwordPlaceholder": "Enter your password",
    "login.showPassword": "Show password",
    "login.hidePassword": "Hide password",
    "login.enter": "Sign in",
    "login.or": "or",
    "login.new": "New here? Create your account:",
    "login.register": "Create account",
    "footer.tagline": "Beauty products selected for you.",
    "footer.navigation": "Navigation",
    "footer.purchase": "Your order",
    "footer.buy": "Shop",
    "footer.checkout": "Checkout",
    "footer.copyright": "© 2026 Beauty Store. All rights reserved.",
    "product.added": "added to your cart.",
    "cart.removed": "Product removed from your cart.",
    "cart.addButton": "Add",
    "product.details": "Details",
    "cart.emptyCheckout": "Add products to your cart before checking out.",
    "checkout.success": "Order confirmed. Thank you for shopping with Beauty Store!",
    "checkout.localSuccess": "Demo order saved in this browser. No payment was processed.",
    "checkout.failed": "We couldn't place your order. Your items are still in the cart.",
    "login.required": "Enter your email and password.",
    "login.success": "You are signed in.",
    "login.failed": "Email or password is incorrect.",
    "login.unavailable": "Sign-in service is unavailable. Please try again later.",
    "category.Bases": "Foundation",
    "category.Batons": "Lipstick",
    "category.Olhos": "Eyes",
    "category.Esmaltes": "Nail polish",
    "category.Perfumes": "Fragrance"
  }
};

function translate(key) {
  return translations[currentLanguage][key] || translations.pt[key] || key;
}

function aplicarIdioma() {
  const activeFilter = document.querySelector("[data-filter].active")?.dataset.filter || "all";
  document.documentElement.lang = currentLanguage === "en" ? "en" : "pt-BR";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menuIsOpen = document.querySelector("[data-nav-links]")?.classList.contains("open") || false;
  if (menuToggle) menuToggle.setAttribute("aria-label", translate(menuIsOpen ? "nav.close" : "nav.open"));
  const title = document.querySelector("title[data-i18n]");
  if (title) document.title = translate(title.dataset.i18n);
  document.querySelectorAll("[data-language-switch]").forEach((select) => {
    select.value = currentLanguage;
    select.setAttribute("aria-label", translate("language.label"));
  });
  const passwordForm = document.querySelector("[data-login-form]");
  const passwordToggle = document.querySelector("[data-toggle-password]");
  if (passwordForm && passwordToggle) {
    passwordToggle.textContent = translate(passwordForm.senha.type === "password" ? "login.showPassword" : "login.hidePassword");
  }
  renderDestaques();
  renderProdutos(activeFilter === "all" ? produtos : produtos.filter((produto) => produto.categoria === activeFilter));
  renderDetalheProduto();
  renderCarrinho();
  renderResumoCheckout();
}

function iniciarIdioma() {
  document.querySelectorAll("[data-language-switch]").forEach((select) => {
    select.addEventListener("change", () => {
      currentLanguage = select.value === "en" ? "en" : "pt";
      localStorage.setItem(LANGUAGE_KEY, currentLanguage);
      aplicarIdioma();
    });
  });
  aplicarIdioma();
}

const produtos = [
  {
    id: 1,
    nome: "Base Líquida HD",
    categoria: "Bases",
    descricao: "Cobertura uniforme, acabamento natural e longa duração.",
    nomeEn: "HD Liquid Foundation",
    descricaoEn: "Even coverage, a natural finish, and long-lasting wear.",
    preco: 89.9,
    imagem: "img/Base Líquida HD.jpg",
    selo: "Novo",
    seloEn: "New"
  },
  {
    id: 2,
    nome: "Batom Vermelho Matte",
    categoria: "Batons",
    descricao: "Cor intensa, textura aveludada e alta fixação.",
    nomeEn: "Matte Red Lipstick",
    descricaoEn: "Intense color, a velvety texture, and long-lasting wear.",
    preco: 49.9,
    imagem: "img/Batom Vermelho Matte.jpg",
    selo: "Mais vendido",
    seloEn: "Best seller"
  },
  {
    id: 3,
    nome: "Máscara de Cílios Volume+",
    categoria: "Olhos",
    descricao: "Volume, curvatura e definição sem pesar nos fios.",
    nomeEn: "Volume+ Mascara",
    descricaoEn: "Volume, curl, and definition without weighing down your lashes.",
    preco: 54.9,
    imagem: "img/Máscara de Cílios.jpg",
    selo: "Destaque",
    seloEn: "Featured"
  },
  {
    id: 4,
    nome: "Sombra Glitter Rose",
    categoria: "Olhos",
    descricao: "Brilho rosado sofisticado para produções especiais.",
    nomeEn: "Rose Glitter Eyeshadow",
    descricaoEn: "Sophisticated rosy shimmer for special occasions.",
    preco: 39.9,
    imagem: "img/Sombra Glitter Rose.jpg",
    selo: "Glow",
    seloEn: "Glow"
  },
  {
    id: 5,
    nome: "Kit Esmaltes Premium",
    categoria: "Esmaltes",
    descricao: "Cores vibrantes, acabamento brilhoso e secagem rápida.",
    nomeEn: "Premium Nail Polish Set",
    descricaoEn: "Vibrant colors, glossy finish, and quick drying.",
    preco: 69.9,
    imagem: "img/Esmaltes.jpg",
    selo: "Oferta",
    seloEn: "Sale"
  },
  {
    id: 6,
    nome: "Perfume Floral Luxe",
    categoria: "Perfumes",
    descricao: "Fragrância floral elegante com toque fresco e marcante.",
    nomeEn: "Floral Luxe Perfume",
    descricaoEn: "An elegant floral fragrance with fresh, memorable notes.",
    preco: 149.9,
    imagem: "img/Perfumes.jpg",
    selo: "Especial",
    seloEn: "Special"
  }
];

const CART_KEY = "beautyStoreCart";

let carrinho = JSON.parse(localStorage.getItem(CART_KEY) || "[]");

function salvarCarrinho() {
  localStorage.setItem(CART_KEY, JSON.stringify(carrinho));
  atualizarBadge();
}

function formatarPreco(valor) {
  const locale = currentLanguage === "en" ? "en-US" : "pt-BR";
  return valor.toLocaleString(locale, { style: "currency", currency: "BRL" });
}

function nomeProduto(produto) {
  return currentLanguage === "en" ? produto.nomeEn : produto.nome;
}

function descricaoProduto(produto) {
  return currentLanguage === "en" ? produto.descricaoEn : produto.descricao;
}

function categoriaProduto(produto) {
  return translate(`category.${produto.categoria}`);
}

function atualizarBadge() {
  const total = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    badge.textContent = total;
  });
}

function toast(mensagem) {
  let box = document.querySelector(".toast-box");
  if (!box) {
    box = document.createElement("div");
    box.className = "toast-box";
    document.body.appendChild(box);
  }

  const item = document.createElement("div");
  item.className = "toast";
  item.textContent = mensagem;
  box.appendChild(item);
  setTimeout(() => item.remove(), 2800);
}

function produtoPorId(id) {
  return produtos.find((produto) => produto.id === Number(id)) || produtos[0];
}

function adicionarCarrinho(id, quantidade = 1) {
  const produto = produtoPorId(id);
  const item = carrinho.find((produtoCarrinho) => produtoCarrinho.id === produto.id);

  if (item) {
    item.quantidade += quantidade;
  } else {
    carrinho.push({ ...produto, quantidade });
  }

  salvarCarrinho();
  toast(`${nomeProduto(produto)} ${translate("product.added")}`);
}

function alterarQuantidade(id, quantidade) {
  const item = carrinho.find((produtoCarrinho) => produtoCarrinho.id === Number(id));
  if (!item) return;

  item.quantidade = Math.max(1, Number(quantidade) || 1);
  salvarCarrinho();
  renderCarrinho();
  renderResumoCheckout();
}

function removerCarrinho(id) {
  carrinho = carrinho.filter((item) => item.id !== Number(id));
  salvarCarrinho();
  renderCarrinho();
  renderResumoCheckout();
  toast(translate("cart.removed"));
}

function totalCarrinho() {
  return carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
}

function cardProduto(produto) {
  const nome = nomeProduto(produto);
  const selo = currentLanguage === "en" ? produto.seloEn : produto.selo;
  return `
    <article class="card product-card" data-categoria="${produto.categoria}">
      <a class="product-media" href="comprar.html?id=${produto.id}">
        <img src="${produto.imagem}" alt="${nome}">
        <span class="badge">${selo}</span>
      </a>
      <div class="product-body">
        <h3 class="product-title">${nome}</h3>
        <p class="product-desc">${descricaoProduto(produto)}</p>
        <div class="price">${formatarPreco(produto.preco)}</div>
        <div class="actions">
          <button class="btn btn-primary" type="button" data-add-cart="${produto.id}">${translate("cart.addButton")}</button>
          <a class="btn btn-light" href="comprar.html?id=${produto.id}">${translate("product.details")}</a>
        </div>
      </div>
    </article>
  `;
}

function renderProdutos(lista = produtos) {
  const container = document.querySelector("[data-products]");
  if (!container) return;

  container.innerHTML = lista.map(cardProduto).join("");
}

function renderDestaques() {
  const container = document.querySelector("[data-featured]");
  if (!container) return;

  container.innerHTML = produtos.slice(0, 3).map(cardProduto).join("");
}

function iniciarFiltros() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      const categoria = button.dataset.filter;
      renderProdutos(categoria === "all" ? produtos : produtos.filter((produto) => produto.categoria === categoria));
    });
  });
}

function renderDetalheProduto() {
  const area = document.querySelector("[data-product-detail]");
  if (!area) return;

  const params = new URLSearchParams(window.location.search);
  const produto = produtoPorId(params.get("id") || 1);
  const thumbs = [produto, ...produtos.filter((item) => item.id !== produto.id).slice(0, 3)];
  const nome = nomeProduto(produto);

  document.title = `${nome} | Beauty Store`;
  area.innerHTML = `
    <div>
      <img class="main-photo" src="${produto.imagem}" alt="${nome}" data-main-photo>
      <div class="thumbs">
        ${thumbs.map((item, index) => `
          <button type="button" class="${index === 0 ? "active" : ""}" data-thumb="${item.imagem}" aria-label="${translate("product.details")}: ${nomeProduto(item)}">
            <img src="${item.imagem}" alt="${nomeProduto(item)}">
          </button>
        `).join("")}
      </div>
    </div>
    <div>
      <p class="eyebrow">${categoriaProduto(produto)}</p>
      <h1>${nome}</h1>
      <p class="lead">${descricaoProduto(produto)}</p>
      <div class="price">${formatarPreco(produto.preco)}</div>
      <div style="margin: 22px 0 10px; font-weight: 700;">${translate("detail.quantity")}</div>
      <div class="qty" data-qty>
        <button type="button" data-dec>-</button>
        <span>1</span>
        <button type="button" data-inc>+</button>
      </div>
      <div class="actions" style="margin-top: 24px;">
        <button class="btn btn-primary" type="button" data-detail-add="${produto.id}">${translate("detail.add")}</button>
        <button class="btn btn-dark" type="button" data-buy-now="${produto.id}">${translate("detail.buyNow")}</button>
      </div>
      <div class="info-list">
        <span>${translate("detail.shipping")}</span>
        <span>${translate("detail.returns")}</span>
        <span>${translate("detail.original")}</span>
      </div>
    </div>
  `;
}

function iniciarDetalhe() {
  const area = document.querySelector("[data-product-detail]");
  if (!area) return;

  area.addEventListener("click", (event) => {
    const mainPhoto = area.querySelector("[data-main-photo]");
    const qtyBox = area.querySelector("[data-qty]");
    const qtyText = qtyBox?.querySelector("span");

    if (event.target.closest("[data-thumb]")) {
      const button = event.target.closest("[data-thumb]");
      mainPhoto.src = button.dataset.thumb;
      area.querySelectorAll("[data-thumb]").forEach((thumb) => thumb.classList.remove("active"));
      button.classList.add("active");
    }

    if (event.target.closest("[data-inc]") && qtyText) {
      qtyText.textContent = Number(qtyText.textContent) + 1;
    }

    if (event.target.closest("[data-dec]") && qtyText) {
      qtyText.textContent = Math.max(1, Number(qtyText.textContent) - 1);
    }

    if (event.target.closest("[data-detail-add]")) {
      adicionarCarrinho(event.target.closest("[data-detail-add]").dataset.detailAdd, Number(qtyText.textContent));
    }

    if (event.target.closest("[data-buy-now]")) {
      adicionarCarrinho(event.target.closest("[data-buy-now]").dataset.buyNow, Number(qtyText.textContent));
      window.location.href = "checkout.html";
    }
  });
}

function renderCarrinho() {
  const lista = document.querySelector("[data-cart-list]");
  const subtotal = document.querySelector("[data-subtotal]");
  const total = document.querySelector("[data-total]");
  const frete = document.querySelector("[data-cart-shipping]");
  if (!lista) return;

  if (!carrinho.length) {
    lista.innerHTML = `<div class="card empty"><p>${translate("cart.empty")}</p><a class="btn btn-primary" href="produtos.html">${translate("cart.continue")}</a></div>`;
  } else {
    lista.innerHTML = carrinho.map((item) => {
      const produto = produtoPorId(item.id);
      return `
        <article class="card cart-item">
          <img src="${produto.imagem}" alt="${nomeProduto(produto)}">
          <div>
            <h3 class="product-title">${nomeProduto(produto)}</h3>
            <p class="product-desc">${categoriaProduto(produto)}</p>
            <strong>${formatarPreco(produto.preco)}</strong>
          </div>
          <div class="cart-actions">
            <div class="qty">
              <button type="button" data-cart-dec="${item.id}" aria-label="${currentLanguage === "en" ? "Decrease quantity" : "Diminuir quantidade"}">-</button>
              <span>${item.quantidade}</span>
              <button type="button" data-cart-inc="${item.id}" aria-label="${currentLanguage === "en" ? "Increase quantity" : "Aumentar quantidade"}">+</button>
            </div>
            <button class="btn btn-light" type="button" data-remove="${item.id}">${translate("cart.remove")}</button>
          </div>
        </article>
      `;
    }).join("");
  }

  const valor = totalCarrinho();
  const freteValor = valor === 0 || valor >= 150 ? 0 : 18.9;
  if (subtotal) subtotal.textContent = formatarPreco(valor);
  if (frete) frete.textContent = freteValor === 0 ? translate("checkout.freeShipping") : formatarPreco(freteValor);
  if (total) total.textContent = formatarPreco(valor + freteValor);
}

function iniciarCarrinho() {
  const lista = document.querySelector("[data-cart-list]");
  if (!lista) return;

  lista.addEventListener("click", (event) => {
    const inc = event.target.closest("[data-cart-inc]");
    const dec = event.target.closest("[data-cart-dec]");
    const remove = event.target.closest("[data-remove]");

    if (inc) {
      const item = carrinho.find((produto) => produto.id === Number(inc.dataset.cartInc));
      if (item) alterarQuantidade(item.id, item.quantidade + 1);
    }

    if (dec) {
      const item = carrinho.find((produto) => produto.id === Number(dec.dataset.cartDec));
      if (item) alterarQuantidade(item.id, item.quantidade - 1);
    }

    if (remove) {
      removerCarrinho(remove.dataset.remove);
    }
  });
}

function renderResumoCheckout() {
  const resumo = document.querySelector("[data-checkout-items]");
  const subtotal = document.querySelector("[data-checkout-subtotal]");
  const frete = document.querySelector("[data-checkout-frete]");
  const total = document.querySelector("[data-checkout-total]");
  if (!resumo) return;

  if (!carrinho.length) {
    resumo.innerHTML = `<p class="product-desc">${translate("checkout.itemsEmpty")}</p><a href="produtos.html">${translate("cart.continue")}</a>`;
  } else {
    resumo.innerHTML = carrinho.map((item) => {
      const produto = produtoPorId(item.id);
      return `
        <div class="summary-row">
          <span>${item.quantidade}x ${nomeProduto(produto)}</span>
          <strong>${formatarPreco(produto.preco * item.quantidade)}</strong>
        </div>
      `;
    }).join("");
  }

  const valor = totalCarrinho();
  const valorFrete = valor === 0 || valor >= 150 ? 0 : 18.9;
  if (subtotal) subtotal.textContent = formatarPreco(valor);
  if (frete) frete.textContent = valorFrete === 0 ? translate("checkout.freeShipping") : formatarPreco(valorFrete);
  if (total) total.textContent = formatarPreco(valor + valorFrete);
  const submit = document.querySelector("[data-checkout-form] button[type='submit']");
  if (submit) submit.disabled = carrinho.length === 0;
}

function iniciarCheckout() {
  const form = document.querySelector("[data-checkout-form]");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!carrinho.length) {
      toast(translate("cart.emptyCheckout"));
      return;
    }

    const dados = Object.fromEntries(new FormData(form).entries());
    const subtotal = totalCarrinho();
    const frete = subtotal > 0 && subtotal < 150 ? 18.9 : 0;
    dados.total = (subtotal + frete).toFixed(2);
    dados.itens = carrinho;
    const button = form.querySelector("button[type='submit']");
    if (button) button.disabled = true;

    try {
      const response = await fetch("../app/controllers/checkout.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
      });
      const resultado = await response.json();
      if (!response.ok || !resultado.status) throw new Error(resultado.mensagem || translate("checkout.failed"));
      toast(translate("checkout.success"));
    } catch (error) {
      if (window.location.protocol === "file:" || error instanceof TypeError) {
        const pedidoLocal = { ...dados, data: new Date().toISOString(), status: "demo-local" };
        localStorage.setItem("beautyStoreLastOrder", JSON.stringify(pedidoLocal));
        toast(translate("checkout.localSuccess"));
      } else {
        if (button) button.disabled = false;
        toast(translate("checkout.failed"));
        return;
      }
    }

    carrinho = [];
    salvarCarrinho();
    renderCarrinho();
    renderResumoCheckout();
    setTimeout(() => window.location.href = "index.html", 1800);
  });
}

function iniciarLogin() {
  const form = document.querySelector("[data-login-form]");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();
    const senha = String(formData.get("senha") || "").trim();

    if (!email || !senha) {
      toast(translate("login.required"));
      return;
    }

    const button = form.querySelector("button[type='submit']");
    if (button) button.disabled = true;
    try {
      const response = await fetch("../app/controllers/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: new URLSearchParams({ email, senha })
      });
      const resultado = await response.json();
      if (!response.ok || !resultado.status) throw new Error(translate("login.failed"));
      localStorage.setItem("beautyStoreUser", email);
      toast(translate("login.success"));
      setTimeout(() => window.location.href = "index.html", 900);
    } catch (error) {
      if (button) button.disabled = false;
      toast(error instanceof TypeError ? translate("login.unavailable") : translate("login.failed"));
    }
  });

  const toggle = document.querySelector("[data-toggle-password]");
  toggle?.addEventListener("click", () => {
    form.senha.type = form.senha.type === "password" ? "text" : "password";
    toggle.textContent = translate(form.senha.type === "password" ? "login.showPassword" : "login.hidePassword");
  });
}

function iniciarMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const links = document.querySelector("[data-nav-links]");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", translate(isOpen ? "nav.close" : "nav.open"));
  });
  links.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", translate("nav.open"));
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", translate("nav.open"));
    }
  });
}

document.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add-cart]");
  if (add) {
    adicionarCarrinho(add.dataset.addCart);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  iniciarIdioma();
  atualizarBadge();
  iniciarMenu();
  renderDestaques();
  renderProdutos();
  iniciarFiltros();
  renderDetalheProduto();
  iniciarDetalhe();
  renderCarrinho();
  iniciarCarrinho();
  renderResumoCheckout();
  iniciarCheckout();
  iniciarLogin();
});
