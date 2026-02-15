const i18n = {
  fr: {
    meta_title: "Mariage — André & Lusiné",

    nav_home: "Accueil",
    nav_program: "Programme",
    nav_gallery: "Galerie",
    nav_places: "Nos lieux",
    nav_rsvp: "Formulaire de présence",

    hero_kicker: "Notre Mariage",
    hero_names: "André & Lusiné",
    hero_date: "Samedi 9 mai 2026",
    hero_city: "Nancy",
    hero_cta: "Confirmer ma présence",
    hero_secondary: "Voir le programme",

    cd_days: "Jours",
    cd_hours: "Heures",
    cd_minutes: "Minutes",
    cd_seconds: "Secondes",

    program_title: "Programme",
    program_subtitle: "Le programme de la journée",
    program_1: "Cérémonie civile — Hôtel de Ville de Nancy",
    program_1_hint: "Entrée par la place Stanislas",
    program_2: "Vin d’honneur — Château de Vandeléville",
    program_3: "Dîner assis — Château de Vandeléville",

    gallery_title: "Galerie",
    gallery_subtitle: "Nos souvenirs",
    gallery_note: "Cliquez sur une photo pour l’ouvrir.",

    places_title: "Nos lieux",
    places_subtitle: "Adresses, cartes et itinéraires",

    townhall_title: "Hôtel de Ville de Nancy",
    townhall_role: "Cérémonie civile — 16h00",
    townhall_desc: "Entrée par la place Stanislas.",
    townhall_addr_line1: "Hôtel de Ville de Nancy",
    townhall_addr_line2: "Place Stanislas, 54000 Nancy",

    castle_title: "Château de Vandeléville",
    castle_role: "Réception — 18h00 • Dîner assis — 20h00",
    castle_desc: "3, place du Château à Vandeléville.",
    castle_addr_line1: "Château de Vandeléville",
    castle_addr_line2: "3, place du Château, 54115 Vandeléville",

    btn_map: "Voir sur la carte",
    btn_route: "Itinéraire",

    rsvp_title: "Formulaire de présence",
    rsvp_subtitle: "Merci de compléter et confirmer votre présence",
    rsvp_deadline: "Merci de nous confirmer votre présence avant le 15 avril 2026.",

    footer_names: "André & Lusiné",
    footer_meta: "Samedi 9 mai 2026 — Nancy"
  },

  hy: {
    meta_title: "Հարսանիք — Անդրե և Լուսինե",

    nav_home: "Գլխավոր",
    nav_program: "Ծրագիր",
    nav_gallery: "Պատկերասրահ",
    nav_places: "Մեր վայրերը",
    nav_rsvp: "Մասնակցության ձև",

    hero_kicker: "Մեր հարսանիքը",
    hero_names: "Անդրե և Լուսինե",
    hero_date: "Շաբաթ, 9 մայիս 2026",
    hero_city: "Նանսի",
    hero_cta: "Հաստատել մասնակցությունը",
    hero_secondary: "Տեսնել ծրագիրը",

    cd_days: "Օր",
    cd_hours: "Ժամ",
    cd_minutes: "Րոպե",
    cd_seconds: "Վայրկյան",

    program_title: "Ծրագիր",
    program_subtitle: "Օրվա ծրագիրը",
    program_1: "Քաղաքացիական արարողություն — Նանսիի քաղաքապետարան",
    program_1_hint: "Մուտքը՝ Ստանիսլաս հրապարակից",
    program_2: "Ողջույնի գինի — Վանդելևիլի դղյակ",
    program_3: "Նստած ընթրիք — Վանդելևիլի դղյակ",

    gallery_title: "Պատկերասրահ",
    gallery_subtitle: "Մեր հիշողությունները",
    gallery_note: "Սեղմեք նկարի վրա՝ բացելու համար։",

    places_title: "Մեր վայրերը",
    places_subtitle: "Հասցեներ, քարտեզ և երթուղի",

    townhall_title: "Նանսիի քաղաքապետարան",
    townhall_role: "Քաղաքացիական արարողություն — 16:00",
    townhall_desc: "Մուտքը՝ Ստանիսլաս հրապարակից։",
    townhall_addr_line1: "Նանսիի քաղաքապետարան",
    townhall_addr_line2: "Place Stanislas, Nancy",

    castle_title: "Վանդելևիլի դղյակ",
    castle_role: "Ընդունելություն — 18:00 • Նստած ընթրիք — 20:00",
    castle_desc: "3, Place du Château, Vandeléville։",
    castle_addr_line1: "Վանդելևիլի դղյակ",
    castle_addr_line2: "3, Place du Château, Vandeléville",

    btn_map: "Բացել քարտեզը",
    btn_route: "Երթուղի",

    rsvp_title: "Մասնակցության ձև",
    rsvp_subtitle: "Խնդրում ենք լրացնել և հաստատել Ձեր մասնակցությունը",
    rsvp_deadline: "Խնդրում ենք հաստատել Ձեր մասնակցությունը մինչև 15 ապրիլ 2026։",

    footer_names: "Անդրե և Լուսինե",
    footer_meta: "9 մայիս 2026 — Նանսի"
  }
};

// Apply translations
function setLang(lang) {
  const dict = i18n[lang] || i18n.fr;
  document.documentElement.lang = lang;
  document.title = dict.meta_title || document.title;

  document.querySelectorAll(".lang__btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (typeof val === "string") el.textContent = val;
  });

  localStorage.setItem("lang", lang);
}

function getQueryLang() {
  const p = new URLSearchParams(location.search);
  const q = p.get("lang");
  if (q === "fr" || q === "hy") return q;
  return null;
}

function lockScroll(lock) {
  document.documentElement.classList.toggle("no-scroll", !!lock);
  document.body.classList.toggle("no-scroll", !!lock);
}

// Burger menu (avec overlay + clic extérieur + no-scroll)
function initBurger() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const overlay = document.getElementById("navOverlay");
  if (!burger || !nav || !overlay) return;

  const open = () => {
    nav.classList.add("is-open");
    burger.setAttribute("aria-expanded", "true");
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add("is-on"));
    lockScroll(true);
  };

  const close = () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
    overlay.classList.remove("is-on");
    lockScroll(false);
    setTimeout(() => { overlay.hidden = true; }, 180);
  };

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    isOpen ? close() : open();
  });

  overlay.addEventListener("click", close);

  nav.querySelectorAll("a.nav__link").forEach(a => {
    a.addEventListener("click", () => close());
  });

  document.addEventListener("click", (e) => {
    const isOpen = nav.classList.contains("is-open");
    if (!isOpen) return;
    const target = e.target;
    if (nav.contains(target) || burger.contains(target)) return;
    close();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

// Lightbox (focus + no-scroll)
function initLightbox() {
  const lb = document.getElementById("lightbox");
  const lbImg = lb?.querySelector(".lightbox__img");
  const closeBtn = lb?.querySelector(".lightbox__close");
  if (!lb || !lbImg || !closeBtn) return;

  let lastFocus = null;

  const open = (src) => {
    lastFocus = document.activeElement;
    lbImg.src = src;
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    lockScroll(true);
    closeBtn.focus({ preventScroll: true });
  };

  const close = () => {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    lbImg.src = "";
    lockScroll(false);
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus({ preventScroll: true });
    }
  };

  document.querySelectorAll(".gallery-bento a").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      open(a.getAttribute("href"));
    });
  });

  closeBtn.addEventListener("click", close);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

// Countdown
let countdownTimerId = null;

function startCountdown(targetISO) {
  const el = document.getElementById("countdown");
  if (!el) return;

  const nodes = {
    days: el.querySelector('[data-cd="days"]'),
    hours: el.querySelector('[data-cd="hours"]'),
    minutes: el.querySelector('[data-cd="minutes"]'),
    seconds: el.querySelector('[data-cd="seconds"]')
  };

  const target = new Date(targetISO).getTime();

  const tick = () => {
    const now = Date.now();
    let diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    nodes.days.textContent = String(days);
    nodes.hours.textContent = String(hours).padStart(2, "0");
    nodes.minutes.textContent = String(minutes).padStart(2, "0");
    nodes.seconds.textContent = String(seconds).padStart(2, "0");
  };

  tick();
  if (countdownTimerId) clearInterval(countdownTimerId);
  countdownTimerId = setInterval(tick, 1000);
}

// Init
(function init() {
  initBurger();
  initLightbox();

  // lang init priority: query > saved > browser
  const q = getQueryLang();
  const saved = localStorage.getItem("lang");
  const browser = (navigator.language || "fr").startsWith("hy") ? "hy" : "fr";
  const initial = q || saved || browser;

  setLang(initial);

  document.querySelectorAll(".lang__btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // Countdown vers la cérémonie civile à Nancy (CEST +02:00)
  startCountdown("2026-05-09T16:00:00+02:00");
})();
