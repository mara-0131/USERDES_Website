const SHIPPING_FEE = 150;

/* ---------- small helpers ---------- */
function $(sel, root = document) { return root.querySelector(sel); }

function esc(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function money(n) {
  return "₱" + Number(n).toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/* accepts "2026-09-04" or "March 27, 2026" and returns a Date (or null) */
function parseDate(s) {
  const str = String(s).trim();
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(str);
  if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));
  const d = new Date(str);
  return isNaN(d) ? null : d;
}

function formatDate(s) {
  const d = parseDate(s);
  if (!d) return String(s);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function findProduct(id) { return PRODUCTS.find(p => p.id === id); }

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch (e) { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage blocked */ }
}

/* ---------- toast (small message at the bottom right) ---------- */
let toastTimer;
function toast(msg) {
  let t = $("#toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.setAttribute("role", "status");
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 3200);
}

/* ==========================================================
   CART
   ========================================================== */
function getCart() { return load("rs_cart", []); }
function saveCart(cart) { save("rs_cart", cart); updateCartCount(); }

function addToCart(id, qty = 1) {
  const cart = getCart();
  const line = cart.find(l => l.id === id);
  if (line) line.qty = Math.min(99, line.qty + qty);
  else cart.push({ id, qty: Math.min(99, qty) });
  saveCart(cart);
}

function setQty(id, qty) {
  let cart = getCart();
  if (qty <= 0) cart = cart.filter(l => l.id !== id);
  else {
    const line = cart.find(l => l.id === id);
    if (line) line.qty = Math.min(99, qty);
  }
  saveCart(cart);
}

function cartCount() { return getCart().filter(l => findProduct(l.id)).reduce((n, l) => n + l.qty, 0); }
function cartLines() {
  return getCart().map(l => ({ product: findProduct(l.id), qty: l.qty })).filter(l => l.product);
}
function cartSubtotal(lines = cartLines()) {
  return lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
}
function updateCartCount() {
  const el = $("#cartCount");
  if (el) el.textContent = cartCount();
}

/* ==========================================================
   ACCOUNTS (login / register / guest)
   ========================================================== */
function getUsers() { return load("rs_users", []); }
function getUser() { return load("rs_session", null); }

function guestChosen() {
  try { return sessionStorage.getItem("rs_guest") === "1"; } catch (e) { return false; }
}
function setGuest() {
  try { sessionStorage.setItem("rs_guest", "1"); } catch (e) { /* ignore */ }
}

async function hashPassword(email, password) {
  const text = email + ":" + password;
  if (window.crypto && crypto.subtle) {
    const buf = new TextEncoder().encode(text);
    const digest = await crypto.subtle.digest("SHA-256", buf);
    return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, "0")).join("");
  }
  // simple fallback if the browser blocks crypto.subtle
  let h = 5381;
  for (let i = 0; i < text.length; i++) h = ((h << 5) + h + text.charCodeAt(i)) | 0;
  return "f" + h;
}

function setSession(user) {
  save("rs_session", { name: user.name, email: user.email });
  try { sessionStorage.removeItem("rs_guest"); } catch (e) { /* ignore */ }
}

async function registerUser(name, email, password) {
  const users = getUsers();
  if (users.some(u => u.email === email)) {
    return { ok: false, error: "That email is already registered. Try logging in." };
  }
  users.push({ name, email, hash: await hashPassword(email, password) });
  save("rs_users", users);
  setSession({ name, email });
  return { ok: true, name };
}

async function loginUser(email, password) {
  const user = getUsers().find(u => u.email === email);
  const hash = await hashPassword(email, password);
  if (!user || user.hash !== hash) return { ok: false, error: "Wrong email or password." };
  setSession(user);
  return { ok: true, name: user.name };
}

function logout() {
  try {
    localStorage.removeItem("rs_session");
    sessionStorage.setItem("rs_guest", "1");
  } catch (e) { /* ignore */ }
  location.reload();
}

/* ---------- login / register popup ---------- */
let authMode = "welcome";      // "welcome" | "login" | "checkout"
let authCallback = null;

function buildAuthModal() {
  const ov = document.createElement("div");
  ov.className = "overlay";
  ov.id = "authOverlay";
  ov.hidden = true;
  ov.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="authTitle">
      <button type="button" class="modal-close" id="authClose" aria-label="Close">X</button>
      <h2 id="authTitle">WELCOME</h2>
      <p id="authMsg" class="modal-msg"></p>

      <div class="tabs" role="tablist">
        <button type="button" role="tab" class="tab" id="tabLogin" data-tab="login">LOGIN</button>
        <button type="button" role="tab" class="tab" id="tabRegister" data-tab="register">REGISTER</button>
      </div>

      <form id="loginForm" novalidate>
        <div class="field"><label for="loginEmail">EMAIL</label>
          <input id="loginEmail" type="email" autocomplete="email"></div>
        <div class="field"><label for="loginPassword">PASSWORD</label>
          <input id="loginPassword" type="password" autocomplete="current-password"></div>
        <p class="form-error" id="loginError" role="alert"></p>
        <button type="submit" class="btn full">LOGIN</button>
      </form>

      <form id="registerForm" novalidate hidden>
        <div class="field"><label for="regName">FULL NAME</label>
          <input id="regName" type="text" autocomplete="name"></div>
        <div class="field"><label for="regEmail">EMAIL</label>
          <input id="regEmail" type="email" autocomplete="email"></div>
        <div class="field"><label for="regPassword">PASSWORD (6+ CHARACTERS)</label>
          <input id="regPassword" type="password" autocomplete="new-password"></div>
        <div class="field"><label for="regConfirm">CONFIRM PASSWORD</label>
          <input id="regConfirm" type="password" autocomplete="new-password"></div>
        <p class="form-error" id="registerError" role="alert"></p>
        <button type="submit" class="btn full">CREATE ACCOUNT</button>
      </form>

      <button type="button" class="btn ghost full guest-btn" id="guestBtn">CONTINUE AS GUEST</button>
    </div>`;
  document.body.appendChild(ov);

  $("#authClose").addEventListener("click", closeAuth);
  ov.addEventListener("mousedown", e => { if (e.target === ov) closeAuth(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !ov.hidden) closeAuth(); });
  $("#guestBtn").addEventListener("click", closeAuth);
  ov.querySelectorAll(".tab").forEach(t => t.addEventListener("click", () => switchTab(t.dataset.tab)));

  $("#loginForm").addEventListener("submit", async e => {
    e.preventDefault();
    const email = $("#loginEmail").value.trim().toLowerCase();
    const pw = $("#loginPassword").value;
    const err = $("#loginError");
    err.textContent = "";
    if (!email || !pw) { err.textContent = "Enter your email and password."; return; }
    const r = await loginUser(email, pw);
    if (!r.ok) { err.textContent = r.error; return; }
    authSuccess(r.name);
  });

  $("#registerForm").addEventListener("submit", async e => {
    e.preventDefault();
    const name = $("#regName").value.trim();
    const email = $("#regEmail").value.trim().toLowerCase();
    const pw = $("#regPassword").value;
    const confirm = $("#regConfirm").value;
    const err = $("#registerError");
    err.textContent = "";
    if (!name) { err.textContent = "Enter your name."; return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { err.textContent = "Enter a valid email address."; return; }
    if (pw.length < 6) { err.textContent = "Password must be at least 6 characters."; return; }
    if (pw !== confirm) { err.textContent = "Passwords do not match."; return; }
    const r = await registerUser(name, email, pw);
    if (!r.ok) { err.textContent = r.error; return; }
    authSuccess(r.name);
  });
}

function switchTab(tab) {
  const isLogin = tab === "login";
  $("#loginForm").hidden = !isLogin;
  $("#registerForm").hidden = isLogin;
  $("#tabLogin").setAttribute("aria-selected", isLogin);
  $("#tabRegister").setAttribute("aria-selected", !isLogin);
  $("#tabLogin").classList.toggle("active", isLogin);
  $("#tabRegister").classList.toggle("active", !isLogin);
}

function openAuth(opts = {}) {
  authMode = opts.mode || "welcome";
  authCallback = opts.onSuccess || null;

  const titles = { welcome: "WELCOME", login: "LOGIN OR REGISTER", checkout: "LOG IN TO CHECK OUT" };
  const msgs = {
    welcome: "Log in, register, or keep browsing as a guest.",
    login: "Log in to your account or create a new one.",
    checkout: "Guests can't check out. Log in or register to place your order."
  };
  $("#authTitle").textContent = titles[authMode];
  $("#authMsg").textContent = msgs[authMode];
  $("#guestBtn").hidden = authMode !== "welcome";
  ["loginError", "registerError"].forEach(id => { $("#" + id).textContent = ""; });
  switchTab("login");
  $("#authOverlay").hidden = false;
  $("#loginEmail").focus();
}

function closeAuth() {
  $("#authOverlay").hidden = true;
  // closing the welcome popup = browsing as a guest
  if (authMode === "welcome" && !getUser()) setGuest();
}

function authSuccess(name) {
  $("#authOverlay").hidden = true;
  ["loginForm", "registerForm"].forEach(id => $("#" + id).reset());
  renderTopbar();
  toast("Welcome, " + name.split(" ")[0] + "!");
  if (authCallback) authCallback();
}

/* ---------- top bar: account + cart ---------- */
function renderTopbar() {
  const bar = $("#topbar");
  if (!bar) return;
  const u = getUser();
  bar.innerHTML =
    `<span class="shop-tag"><img class="shop-tag-logo" src="graphics/logo.png" alt="" width="24" height="24">VINYL RECORDS SHOP</span>` +
    `<div class="topbar-right">` +
      (u
        ? `<span class="who">HI, ${esc(u.name.split(" ")[0].toUpperCase())}</span>
           <button type="button" class="link-btn" id="logoutBtn">LOGOUT</button>`
        : `<span class="who">GUEST</span>
           <button type="button" class="link-btn" id="loginBtn">LOGIN / REGISTER</button>`) +
      `<a class="link-btn" href="cartPage.html">CART (<span id="cartCount">${cartCount()}</span>)</a>` +
    `</div>`;

  const lb = $("#loginBtn");
  if (lb) lb.addEventListener("click", () => openAuth({ mode: "login" }));
  const ob = $("#logoutBtn");
  if (ob) ob.addEventListener("click", logout);
}

/* ==========================================================
   PAGES
   ========================================================== */
function coverHTML(p) {
  const inner = p.image
    ? `<img class="cover" src="${esc(p.image)}" alt="${esc(p.title)} cover">`
    : `<div class="cover ${p.cover}" role="img" aria-label="${esc(p.title)} cover"></div>`;
  return `<div class="cover-wrap">${inner}</div>`;
}

/* ---------- Home page: carousel, genres, latest release, best selling ---------- */
function carouselHTML() {
  if (!BANNERS.length) return "";
  return `
    <section class="carousel" id="carousel" aria-roledescription="carousel" aria-label="Featured banners">
      <div class="slides">
        ${BANNERS.map((b, i) => `
          <a class="slide${b.image ? " has-img" : ""}${i === 0 ? " active" : ""}" href="${esc(b.link || "vinylPage.html")}"
             style="${b.bg ? "background:" + esc(b.bg) : ""}" aria-label="Slide ${i + 1} of ${BANNERS.length}">
            ${b.image ? `<img src="${esc(b.image)}" alt="${esc(b.alt || b.title || "Banner")}">` : ""}
            <span class="slide-text">
              <span class="slide-title">${esc(b.title || "")}</span>
              <span class="slide-sub">${esc(b.text || "")}</span>
            </span>
          </a>`).join("")}
      </div>
      <button type="button" class="car-btn prev" aria-label="Previous slide">&lt;</button>
      <button type="button" class="car-btn next" aria-label="Next slide">&gt;</button>
      <div class="dots">
        ${BANNERS.map((_, i) => `<button type="button" class="dot${i === 0 ? " active" : ""}" data-i="${i}" aria-label="Go to slide ${i + 1}"></button>`).join("")}
      </div>
    </section>`;
}

function initCarousel() {
  const root = $("#carousel");
  if (!root) return;
  const slides = Array.from(root.querySelectorAll(".slide"));
  const dots = Array.from(root.querySelectorAll(".dot"));
  let current = 0;
  let timer = null;

  // if a banner picture can't be found, show the colour + text instead
  root.querySelectorAll(".slide img").forEach(img => {
    const bad = () => { img.closest(".slide").classList.remove("has-img"); img.remove(); };
    if (img.complete && img.naturalWidth === 0) bad();
    else img.addEventListener("error", bad);
  });

  function show(n) {
    current = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("active", k === current));
    dots.forEach((d, k) => {
      d.classList.toggle("active", k === current);
      d.setAttribute("aria-current", k === current ? "true" : "false");
    });
  }
  function stop() { clearInterval(timer); timer = null; }
  function start() {
    stop();
    if (slides.length > 1) timer = setInterval(() => show(current + 1), 3000);
  }

  root.querySelector(".prev").addEventListener("click", () => { show(current - 1); start(); });
  root.querySelector(".next").addEventListener("click", () => { show(current + 1); start(); });
  dots.forEach(d => d.addEventListener("click", () => { show(Number(d.dataset.i)); start(); }));

  // pause while the mouse or keyboard is on the carousel
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);

  show(0);
  start();
}

function homeCardHTML(p) {
  const href = "productPage.html?id=" + encodeURIComponent(p.id);
  return `
    <div class="home-card">
      <a class="hc-cover" href="${href}">${coverHTML(p)}</a>
      <a class="hc-title" href="${href}">${esc(p.title)}</a>
      <p class="hc-artist">${esc(p.artist)}</p>
      <div class="hc-buy">
        <p class="hc-price">${money(p.price)}</p>
        <button type="button" class="btn small" data-add="${esc(p.id)}">ADD TO CART</button>
      </div>
    </div>`;
}

/* makes the ADD TO CART buttons inside a container work (home + vinyl pages) */
function bindAddToCart(container) {
  container.addEventListener("click", e => {
    const b = e.target.closest("[data-add]");
    if (!b) return;
    const p = findProduct(b.dataset.add);
    if (!p) return;
    addToCart(p.id, 1);
    toast(`Added 1 x ${p.title} to your cart`);
  });
}

function renderHome() {
  const box = $("#homeView");
  if (!box) return;

  const time = p => { const d = parseDate(p.releaseDate); return d ? d.getTime() : 0; };
  const latest = PRODUCTS.slice().sort((a, b) => time(b) - time(a)).slice(0, 5);
  const best = PRODUCTS.slice().sort((a, b) => (b.sold || 0) - (a.sold || 0)).slice(0, 5);
  const genres = Array.from(new Set(PRODUCTS.map(p => p.genre))).sort();

  box.innerHTML = `
    ${carouselHTML()}

    <section class="home-section">
      <h2 class="home-heading">GENRES</h2>
      <div class="chips">
        <a class="chip" href="vinylPage.html">ALL</a>
        ${genres.map(g => `<a class="chip" href="vinylPage.html?genre=${encodeURIComponent(g)}">${esc(g.toUpperCase())}</a>`).join("")}
      </div>
    </section>

    <section class="home-section">
      <h2 class="home-heading">LATEST RELEASE</h2>
      <div class="home-grid">${latest.map(homeCardHTML).join("")}</div>
    </section>

    <section class="home-section">
      <h2 class="home-heading">BEST SELLING</h2>
      <div class="home-grid">${best.map(homeCardHTML).join("")}</div>
    </section>`;

  initCarousel();
  bindAddToCart(box);
}

/* ---------- Vinyls list (all, or one genre: vinylPage.html?genre=Synthpop) ---------- */
const SORT_MODES = ["default", "az", "za"];

function getSavedSort() {
  try {
    const v = sessionStorage.getItem("rs_sort");
    return SORT_MODES.includes(v) ? v : "default";
  } catch (e) { return "default"; }
}
function saveSort(mode) {
  try { sessionStorage.setItem("rs_sort", mode); } catch (e) { /* ignore */ }
}

function sortItems(list, mode) {
  const sorted = list.slice();
  // sorts by album title; change "title" to "artist" to sort by artist instead
  const byTitle = (a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base", numeric: true });
  if (mode === "az") sorted.sort(byTitle);
  if (mode === "za") sorted.sort((a, b) => byTitle(b, a));
  return sorted;   // "default" keeps the order from products.js (grouped by genre)
}

function renderListing() {
  const box = $("[data-category]");
  if (!box) return;
  const genre = new URLSearchParams(location.search).get("genre");

  let items = PRODUCTS.filter(p => p.category === box.dataset.category);
  if (genre) {
    items = items.filter(p => p.genre === genre);
    $("#pageTitle").textContent = genre.toUpperCase();
  }

  if (!items.length) {
    box.innerHTML = `<div class="empty"><p>NO VINYLS FOUND</p><a class="btn" href="vinylPage.html">SEE ALL VINYLS</a></div>`;
    return;
  }

  // same card as the homepage: cover, title, artist, price, ADD TO CART
  function draw(mode) {
    box.innerHTML = sortItems(items, mode).map(homeCardHTML).join("");
  }
  bindAddToCart(box);

  const sel = $("#sortSelect");
  const mode = getSavedSort();
  if (sel) {
    sel.value = mode;
    sel.addEventListener("change", () => {
      saveSort(sel.value);
      draw(sel.value);
    });
  }
  draw(mode);
}

/* ---------- One album's page ---------- */
function renderProduct() {
  const box = $("#productDetail");
  if (!box) return;
  const p = findProduct(new URLSearchParams(location.search).get("id"));
  if (!p) {
    box.innerHTML = `<div class="empty"><p>ALBUM NOT FOUND</p><a class="btn" href="HomePage.html">GO HOME</a></div>`;
    return;
  }
  const cat = CATEGORIES[p.category];
  document.title = p.title + " - " + p.artist;
  $("#pageTitle").textContent = cat.label;
  if (cat.page) $("#backBtn").dataset.fallback = cat.page;

  box.innerHTML = `
    <div class="detail">
      <div class="detail-art">${coverHTML(p)}</div>
      <div class="detail-info">
        <h3 class="d-title">${esc(p.artist)}: ${esc(p.title)} - ${esc(cat.type)}</h3>
        <p class="d-artist"><span class="artist-link">${esc(p.artist)}</span><span class="sku">SKU: ${esc(p.sku)}</span></p>

        <p class="price-label">PRICE</p>
        <p class="price-big">${money(p.price)}</p>

        <div class="buy-row">
          <div class="qty" aria-label="Quantity">
            <button type="button" id="qtyMinus" aria-label="Decrease quantity">-</button>
            <span id="qtyNum">1</span>
            <button type="button" id="qtyPlus" aria-label="Increase quantity">+</button>
          </div>
          <button type="button" class="btn grow" id="addBtn">ADD TO CART</button>
        </div>
        <a class="cart-link" href="cartPage.html">VIEW CART</a>

        <ul class="details">
          <li><b>Title:</b> ${esc(p.title)}</li>
          <li><b>Artist:</b> ${esc(p.artist)}</li>
          <li><b>Label:</b> ${esc(p.label)}</li>
          <li><b>Product Type:</b> ${esc(cat.type)}</li>
          <li><b>Format:</b> ${esc(p.format)}</li>
          <li><b>Genre:</b> ${esc(p.genre)}</li>
          <li><b>Sub Genre:</b> ${esc(p.subGenre)}</li>
          <li><b>Release Date:</b> ${esc(formatDate(p.releaseDate))}</li>
          <li><b>${esc(cat.unit)}:</b> ${p.discs}</li>
          ${p.extra ? `<li><b>Additional Details:</b> ${esc(p.extra)}</li>` : ""}
        </ul>

        <p class="desc">${esc(p.description)}</p>

        <p class="tracks-title">Tracks:</p>
        <ul class="tracks">${p.tracks.map((t, i) => `<li>${i + 1}. ${esc(t)}</li>`).join("")}</ul>
      </div>
    </div>`;

  let qty = 1;
  const num = $("#qtyNum");
  $("#qtyMinus").addEventListener("click", () => { qty = Math.max(1, qty - 1); num.textContent = qty; });
  $("#qtyPlus").addEventListener("click", () => { qty = Math.min(99, qty + 1); num.textContent = qty; });
  $("#addBtn").addEventListener("click", () => {
    addToCart(p.id, qty);
    toast(`Added ${qty} x ${p.title} to your cart`);
  });
}

/* ---------- order summary (used on cart + checkout) ---------- */
function summaryHTML(lines) {
  const sub = cartSubtotal(lines);
  const ship = lines.length ? SHIPPING_FEE : 0;
  return `
    <h3 class="sub">ORDER SUMMARY</h3>
    <ul class="sum-items">
      ${lines.map(l => `<li><span>${l.qty} x ${esc(l.product.title)}</span><span>${money(l.product.price * l.qty)}</span></li>`).join("")}
    </ul>
    <div class="sum-row"><span>SUBTOTAL</span><span>${money(sub)}</span></div>
    <div class="sum-row"><span>SHIPPING</span><span>${money(ship)}</span></div>
    <div class="sum-row total"><span>TOTAL</span><span>${money(sub + ship)}</span></div>`;
}

/* ---------- Cart page ---------- */
function renderCart() {
  const box = $("#cartView");
  if (!box) return;
  const lines = cartLines();

  if (!box.dataset.bound) {
    box.dataset.bound = "1";
    box.addEventListener("click", e => {
      const btn = e.target.closest("[data-act]");
      if (btn) {
        const id = btn.dataset.id;
        const line = getCart().find(l => l.id === id);
        if (!line) return;
        if (btn.dataset.act === "inc") setQty(id, line.qty + 1);
        if (btn.dataset.act === "dec") setQty(id, line.qty - 1);
        if (btn.dataset.act === "remove") setQty(id, 0);
        renderCart();
      }
      if (e.target.closest("#checkoutBtn")) startCheckout();
    });
  }

  if (!lines.length) {
    box.innerHTML = `
      <div class="empty">
        <p>YOUR CART IS EMPTY</p>
        <div class="btn-row">
          <a class="btn" href="vinylPage.html">VINYLS</a>
        </div>
      </div>`;
    return;
  }

  box.innerHTML = `
    <div class="two-col">
      <div class="cart-list">
        ${lines.map(l => {
          const p = l.product;
          return `
          <div class="cart-item">
            <a href="productPage.html?id=${encodeURIComponent(p.id)}">${coverHTML(p)}</a>
            <div class="ci-info">
              <a class="ci-title" href="productPage.html?id=${encodeURIComponent(p.id)}">${esc(p.title)}</a>
              <p class="ci-sub">${esc(p.artist)} &ndash; ${esc(CATEGORIES[p.category].single)}</p>
              <p class="ci-sub">${money(p.price)} each</p>
              <div class="qty">
                <button type="button" data-act="dec" data-id="${p.id}" aria-label="Decrease quantity">-</button>
                <span>${l.qty}</span>
                <button type="button" data-act="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
              </div>
            </div>
            <div class="ci-right">
              <p class="ci-total">${money(p.price * l.qty)}</p>
              <button type="button" class="link-btn" data-act="remove" data-id="${p.id}">REMOVE</button>
            </div>
          </div>`;
        }).join("")}
      </div>
      <aside class="summary">
        ${summaryHTML(lines)}
        <button type="button" class="btn full" id="checkoutBtn">CHECK OUT</button>
        ${getUser() ? "" : `<p class="hint">You'll be asked to log in or register at checkout.</p>`}
      </aside>
    </div>`;
}

/* guests must log in or register before checking out */
function startCheckout() {
  if (!cartLines().length) { toast("Your cart is empty."); return; }
  if (!getUser()) {
    openAuth({ mode: "checkout", onSuccess: () => { location.href = "checkoutPage.html"; } });
    return;
  }
  location.href = "checkoutPage.html";
}

/* ---------- Checkout page ---------- */
function field(id, label, o = {}) {
  const { type = "text", value = "", placeholder = "", inputmode = "", maxlength = "" } = o;
  return `
    <div class="field">
      <label for="${id}">${label}</label>
      <input id="${id}" name="${id}" type="${type}" value="${esc(value)}" placeholder="${esc(placeholder)}"
        autocomplete="off" ${inputmode ? `inputmode="${inputmode}"` : ""} ${maxlength ? `maxlength="${maxlength}"` : ""}>
      <span class="err" id="err-${id}" role="alert"></span>
    </div>`;
}

function validateCheckout(v) {
  const e = {};
  const phoneOk = s => /^(09|\+639)\d{9}$/.test(s.replace(/[\s-]/g, ""));

  if (!v.fullName.trim()) e.fullName = "Enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(v.email.trim())) e.email = "Enter a valid email address.";
  if (!phoneOk(v.phone)) e.phone = "Use a PH mobile number, e.g. 09171234567.";
  if (!v.address.trim()) e.address = "Enter your street address.";
  if (!v.city.trim()) e.city = "Enter your city.";
  if (!v.province.trim()) e.province = "Enter your province.";
  if (!/^\d{4}$/.test(v.postal.trim())) e.postal = "Enter a 4-digit postal code.";

  if (v.pay === "card") {
    if (!v.cardName.trim()) e.cardName = "Enter the name on the card.";
    if (!/^\d{15,16}$/.test(v.cardNumber.replace(/\D/g, ""))) e.cardNumber = "Enter a 15 or 16-digit card number.";
    const m = /^(0[1-9]|1[0-2])\/(\d{2})$/.exec(v.cardExp.trim());
    if (!m) e.cardExp = "Use MM/YY.";
    else if (new Date(2000 + Number(m[2]), Number(m[1]), 1) <= new Date()) e.cardExp = "This card has expired.";
    if (!/^\d{3,4}$/.test(v.cardCvv.trim())) e.cardCvv = "Enter the 3 or 4-digit security code.";
  }
  if (v.pay === "gcash" && !phoneOk(v.gcashNumber)) e.gcashNumber = "Enter your GCash mobile number.";
  return e;
}

function renderCheckout() {
  const box = $("#checkoutView");
  if (!box) return;
  const lines = cartLines();
  const user = getUser();

  if (!lines.length) {
    box.innerHTML = `<div class="empty"><p>YOUR CART IS EMPTY</p><a class="btn" href="HomePage.html">GO HOME</a></div>`;
    return;
  }
  if (!user) {
    box.innerHTML = `<div class="empty"><p>PLEASE LOG IN OR REGISTER TO CHECK OUT</p>
      <button type="button" class="btn" id="gateBtn">LOG IN / REGISTER</button></div>`;
    $("#gateBtn").addEventListener("click", () =>
      openAuth({ mode: "checkout", onSuccess: () => location.reload() }));
    return;
  }

  box.innerHTML = `
    <div class="two-col">
      <form id="checkoutForm" class="panel" novalidate>

        <fieldset>
          <legend>CONTACT</legend>
          ${field("fullName", "FULL NAME", { value: user.name })}
          ${field("email", "EMAIL", { type: "email", value: user.email })}
          ${field("phone", "MOBILE NUMBER", { type: "tel", placeholder: "09171234567", inputmode: "tel" })}
        </fieldset>

        <fieldset>
          <legend>SHIPPING ADDRESS</legend>
          ${field("address", "STREET ADDRESS")}
          ${field("city", "CITY")}
          ${field("province", "PROVINCE")}
          ${field("postal", "POSTAL CODE", { inputmode: "numeric", maxlength: "4" })}
        </fieldset>

        <fieldset>
          <legend>PAYMENT</legend>
          <div class="radios">
            <label><input type="radio" name="pay" value="card" checked> CARD</label>
            <label><input type="radio" name="pay" value="gcash"> GCASH</label>
            <label><input type="radio" name="pay" value="cod"> CASH ON DELIVERY</label>
          </div>

          <div class="pay-panel" id="pay-card">
            ${field("cardName", "NAME ON CARD")}
            ${field("cardNumber", "CARD NUMBER", { inputmode: "numeric", placeholder: "1234 5678 9012 3456" })}
            <div class="row2">
              ${field("cardExp", "EXPIRY (MM/YY)", { inputmode: "numeric", placeholder: "MM/YY", maxlength: "5" })}
              ${field("cardCvv", "CVV", { type: "password", inputmode: "numeric", maxlength: "4" })}
            </div>
          </div>
          <div class="pay-panel" id="pay-gcash" hidden>
            ${field("gcashNumber", "GCASH MOBILE NUMBER", { type: "tel", placeholder: "09171234567", inputmode: "tel" })}
          </div>
          <div class="pay-panel" id="pay-cod" hidden>
            <p class="hint">Pay in cash when your order arrives.</p>
          </div>
        </fieldset>

        <button type="submit" class="btn full">PLACE ORDER &ndash; ${money(cartSubtotal(lines) + SHIPPING_FEE)}</button>
      </form>

      <aside class="summary">${summaryHTML(lines)}</aside>
    </div>`;

  const form = $("#checkoutForm");

  // show only the payment fields for the chosen method
  form.querySelectorAll('input[name="pay"]').forEach(r => r.addEventListener("change", () => {
    ["card", "gcash", "cod"].forEach(m => { $("#pay-" + m).hidden = (m !== r.value); });
  }));

  // tidy card number + expiry as the user types
  $("#cardNumber").addEventListener("input", e => {
    const d = e.target.value.replace(/\D/g, "").slice(0, 16);
    e.target.value = d.replace(/(.{4})/g, "$1 ").trim();
  });
  $("#cardExp").addEventListener("input", e => {
    let d = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (d.length >= 3) d = d.slice(0, 2) + "/" + d.slice(2);
    e.target.value = d;
  });
  $("#cardCvv").addEventListener("input", e => { e.target.value = e.target.value.replace(/\D/g, ""); });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(form));
    const errors = validateCheckout(v);

    form.querySelectorAll(".err").forEach(s => { s.textContent = ""; });
    form.querySelectorAll(".field").forEach(f => f.classList.remove("has-error"));
    const ids = Object.keys(errors);
    ids.forEach(id => {
      $("#err-" + id).textContent = errors[id];
      $("#" + id).closest(".field").classList.add("has-error");
    });
    if (ids.length) { $("#" + ids[0]).focus(); return; }

    placeOrder(v, lines, user);
  });
}

function placeOrder(v, lines, user) {
  const subtotal = cartSubtotal(lines);
  const order = {
    id: "RS-" + Date.now().toString(36).toUpperCase(),
    placedAt: new Date().toISOString(),
    userEmail: user.email,
    customer: { name: v.fullName.trim(), email: v.email.trim(), phone: v.phone.trim() },
    shipTo: { address: v.address.trim(), city: v.city.trim(), province: v.province.trim(), postal: v.postal.trim() },
    items: lines.map(l => ({ id: l.product.id, title: l.product.title, artist: l.product.artist, price: l.product.price, qty: l.qty })),
    subtotal, shipping: SHIPPING_FEE, total: subtotal + SHIPPING_FEE,
    // the full card number and CVV are never saved
    payment: { method: v.pay, last4: v.pay === "card" ? v.cardNumber.replace(/\D/g, "").slice(-4) : null }
  };

  const orders = load("rs_orders", []);
  orders.push(order);
  save("rs_orders", orders);
  saveCart([]);

  const payText = { card: "Card ending in " + order.payment.last4, gcash: "GCash", cod: "Cash on delivery" }[v.pay];

  $("#checkoutView").innerHTML = `<div class="empty"><p>ORDER PLACED</p><a class="btn" href="HomePage.html">BACK TO HOME</a></div>`;
  toast("Your order has been placed!");

  showNotice({
    title: "ORDER PLACED!",
    buttonLabel: "BACK TO HOME",
    onClose: () => { location.href = "HomePage.html"; },
    bodyHTML: `
      <p class="modal-msg">Thank you, ${esc(order.customer.name.split(" ")[0])}! Your order has been placed.</p>
      <p class="order-no">ORDER NO. ${esc(order.id)}</p>
      <ul class="sum-items">
        ${order.items.map(i => `<li><span>${i.qty} x ${esc(i.title)}</span><span>${money(i.price * i.qty)}</span></li>`).join("")}
      </ul>
      <div class="sum-row total"><span>TOTAL</span><span>${money(order.total)}</span></div>
      <p class="modal-msg">SHIPPING TO<br>${esc(order.shipTo.address)}, ${esc(order.shipTo.city)}, ${esc(order.shipTo.province)} ${esc(order.shipTo.postal)}</p>
      <p class="modal-msg">PAYMENT: ${esc(payText)}</p>`
  });
}

/* ---------- simple notification popup ---------- */
function showNotice({ title, bodyHTML, buttonLabel = "OK", onClose }) {
  const ov = document.createElement("div");
  ov.className = "overlay";
  ov.innerHTML = `
    <div class="modal" role="alertdialog" aria-modal="true" aria-labelledby="noticeTitle">
      <h2 id="noticeTitle">${esc(title)}</h2>
      ${bodyHTML}
      <button type="button" class="btn full" id="noticeBtn">${esc(buttonLabel)}</button>
    </div>`;
  document.body.appendChild(ov);

  function onKey(e) { if (e.key === "Escape") close(); }
  function close() {
    document.removeEventListener("keydown", onKey);
    ov.remove();
    if (onClose) onClose();
  }
  document.addEventListener("keydown", onKey);
  $("#noticeBtn", ov).addEventListener("click", close);
  $("#noticeBtn", ov).focus();
}

/* ==========================================================
   START
   ========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // "< BACK" buttons
  document.addEventListener("click", e => {
    const b = e.target.closest(".back-btn");
    if (!b) return;
    e.preventDefault();
    // album page: go back to whatever page the visitor came from
    if ($("#productDetail") && history.length > 1) {
      history.back();
      return;
    }
    location.href = b.dataset.fallback || "HomePage.html";
  });

  buildAuthModal();
  renderTopbar();
  renderHome();
  renderListing();
  renderProduct();
  renderCart();
  renderCheckout();

  if (!getUser()) {
    if ($("#checkoutView") && cartLines().length) {
      // a guest reached checkout: they must log in or register
      openAuth({ mode: "checkout", onSuccess: () => location.reload() });
    } else if (!guestChosen()) {
      openAuth({ mode: "welcome" });
    }
  }
});