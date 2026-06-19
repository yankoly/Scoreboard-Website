import {
  business,
  navItems,
  weeklySchedule,
  reasons,
  featuredMenu,
  eventsPreview,
  taps,
  gallery,
  proofCards,
  menuItems,
  drinkNotes
} from "/data.js";

const page = document.body.dataset.page || "home";

const icons = {
  arrow:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m13 5 7 7-7 7"></path></svg>',
  phone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 5.5c0 8.284 5.716 14 14 14l1-4-4-2-1.6 1.2c-2.1-1-3.8-2.7-4.8-4.8L10.3 8l-2-4-3.8 1.5Z"></path></svg>',
  map:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 20 4 22V6l5-2 6 2 5-2v16l-5 2-6-2z"></path><path d="M9 4v16"></path><path d="M15 6v16"></path></svg>',
  menu:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M4 12h16"></path><path d="M4 17h16"></path></svg>',
  calendar:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15" rx="3"></rect><path d="M8 3.5v3M16 3.5v3M3.5 9h17"></path></svg>',
  beer:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 10h7a4 4 0 0 1 0 8H6z"></path><path d="M13 11h2.5a2.5 2.5 0 0 1 0 5H13"></path><path d="M8 6v4M11 6v4M14 6v4"></path></svg>',
  tv:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="6" width="17" height="11" rx="2.5"></rect><path d="M8 19h8"></path></svg>',
  plate:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 16 0"></path><path d="M8 12h8"></path></svg>',
  cue:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m5 19 14-14"></path><path d="M4 20h4"></path></svg>',
  mic:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="8.5" y="3.5" width="7" height="12" rx="3.5"></rect><path d="M5.5 12a6.5 6.5 0 0 0 13 0"></path><path d="M12 18.5V22"></path></svg>',
  people:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M17 20a5 5 0 0 0-10 0"></path><circle cx="12" cy="9" r="3.5"></circle></svg>',
  pin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"></path><circle cx="12" cy="10" r="2.2"></circle></svg>'
};

const iconFor = (name) => icons[name] || icons.pin;

const fmtDay = (weekday, timeZone = "America/Los_Angeles") =>
  new Intl.DateTimeFormat("en-US", { weekday, timeZone }).format(new Date());

const currentDay = fmtDay("long");

function navHTML() {
  const links = navItems
    .map((item) => {
      const current = isCurrent(item.href) ? ' aria-current="page"' : "";
      return `<a href="${item.href}"${current}>${item.label}</a>`;
    })
    .join("");

  const mobileLinks = navItems
    .map((item) => {
      const current = isCurrent(item.href) ? ' aria-current="page"' : "";
      return `<a href="${item.href}"${current}>${item.label}</a>`;
    })
    .join("");

  return `
    <header class="site-header">
      <div class="site-shell header-inner">
        <a class="brand" href="/" aria-label="${business.name} home">
          <span class="brand-mark" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </span>
          <span>
            <strong>${business.name}</strong>
            <small>Imperial Beach, CA</small>
          </span>
        </a>
        <div class="header-tools">
          <nav class="desktop-nav" aria-label="Primary">
            ${links}
          </nav>
          <details class="mobile-nav">
            <summary>${icons.menu}<span>Menu</span></summary>
            <div class="mobile-nav-panel" role="menu">
              ${mobileLinks}
            </div>
          </details>
          <div class="nav-actions">
            <a class="button-ghost" href="${business.phoneHref}">${icons.phone} Call Now</a>
            <a class="button-accent" href="/visit/">${icons.map} Get Directions</a>
          </div>
        </div>
      </div>
    </header>
  `;
}

function footerHTML() {
  return `
    <footer class="footer">
      <div class="site-shell footer-grid">
        <div>
          <a class="brand" href="/" aria-label="${business.name} home">
            <span class="brand-mark" aria-hidden="true">
              <span></span><span></span><span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span>
            </span>
            <span>
              <strong>${business.name}</strong>
              <small>Imperial Beach, CA</small>
            </span>
          </a>
          <p style="margin-top:16px; max-width: 42ch;">${business.description}</p>
        </div>
        <div>
          <h3>Explore</h3>
          <div class="footer-links">
            ${navItems
              .map((item) => `<a href="${item.href}">${item.label}</a>`)
              .join("")}
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <div class="footer-links">
            <a href="${business.phoneHref}">${business.phone}</a>
            <a href="${business.mapsHref}">${business.address}</a>
          </div>
        </div>
      </div>
      <div class="site-shell footer-note">
        <span>Hours may vary. Call ahead for current kitchen and bar hours.</span>
        <span>&copy; <span data-year></span> ${business.name}</span>
      </div>
    </footer>
  `;
}

function mobileCTA() {
  return `
    <div class="mobile-cta" aria-label="Quick actions">
      <div class="site-shell inner">
        <a class="mobile-action" href="${business.phoneHref}">${icons.phone} Call</a>
        <a class="mobile-action" href="${business.mapsHref}">${icons.map} Directions</a>
        <a class="mobile-action" href="/menu/">${icons.menu} Menu</a>
        <a class="mobile-action" href="/events/">${icons.calendar} Events</a>
      </div>
    </div>
  `;
}

function isCurrent(href) {
  const path = window.location.pathname.replace(/index\.html$/, "");
  if (href === "/") return path === "/" || path === "";
  return path === href;
}

function revealOnScroll() {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 }
  );

  nodes.forEach((node) => io.observe(node));
}

function renderIcon(name) {
  return `<span class="card-icon" aria-hidden="true">${iconFor(name)}</span>`;
}

function renderReasonCard(item) {
  return `
    <article class="reason-card" data-reveal>
      ${renderIcon(item.icon)}
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `;
}

function renderMenuCard(item) {
  return `
    <article class="menu-row" data-reveal data-category="${item.section}">
      <div class="menu-row-head">
        <h3>${item.name}</h3>
        ${item.price ? `<span class="price">${item.price}</span>` : ""}
      </div>
      ${item.note ? `<p>${item.note}</p>` : ""}
    </article>
  `;
}

function renderEventCard(item) {
  return `
    <article class="event-card" data-reveal>
      <div class="tag">${item.tag}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="thumb" style="margin: 16px -20px -20px; aspect-ratio: 16 / 10;">
        <img src="${item.image}" alt="${item.title} at ${business.name}" loading="lazy">
      </div>
    </article>
  `;
}

function renderTapCard(item) {
  return `
    <article class="tap-card" data-reveal>
      <div class="thumb small">
        <img src="${item.image}" alt="${item.name} beer pour" loading="lazy">
      </div>
      <div class="tag">${item.style}</div>
      <h3>${item.name}</h3>
      <p>${item.note}</p>
    </article>
  `;
}

function renderGalleryCard(item, widthClass = "") {
  return `
    <article class="gallery-card ${widthClass}" data-reveal data-category="${item.category}">
      <img src="${item.image}" alt="${item.title} at ${business.name}" loading="lazy">
      <div class="overlay">
        <div class="tag">${item.category}</div>
        <h3>${item.title}</h3>
      </div>
    </article>
  `;
}

function renderProofCard(item) {
  return `
    <article class="proof-card" data-reveal>
      <div class="tag">Owner value</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `;
}

function renderTonightCard(container) {
  if (!container) return;
  const current = weeklySchedule.find((entry) => entry.day === currentDay) || weeklySchedule[0];
  const otherDays = weeklySchedule.filter((entry) => entry.day !== current.day);
  const html = `
    <article class="score-card" data-reveal>
      <div class="day">Tonight at ${business.name}</div>
      <h3>${current.day}: ${current.special}</h3>
      <p>${current.detail}</p>
      <ul>
        <li><span class="dot"></span><span>Call to confirm tonight's schedule.</span></li>
        <li><span class="dot"></span><span>Game-day energy, comfort food, and cold drinks.</span></li>
      </ul>
    </article>
    <article class="score-card" data-reveal>
      <div class="day">This week</div>
      <h3>Weekly scoreboard</h3>
      <p>Plan ahead for the whole week. Every night has a simple reason to come through.</p>
      <ul>
        ${otherDays
          .slice(0, 4)
          .map((day) => `<li><span class="dot"></span><span><strong>${day.day}:</strong> ${day.special}</span></li>`)
          .join("")}
      </ul>
    </article>
  `;
  container.innerHTML = html;
}

function renderSectionList(container, items, renderer) {
  if (!container) return;
  container.innerHTML = items.map(renderer).join("");
}

function renderScoreboardTicker() {
  const container = document.querySelector("[data-scoreboard-ticker]");
  if (!container) return;
  const items = [...weeklySchedule, ...weeklySchedule]
    .map((entry) => `<span class="ticker-pill"><b>${entry.day}</b> ${entry.special}</span>`)
    .join("");
  container.innerHTML = `<div class="ticker-track">${items}</div><div class="ticker-track" aria-hidden="true">${items}</div>`;
}

function renderHome() {
  renderScoreboardTicker();
  renderTonightCard(document.querySelector("[data-tonight]"));
  renderSectionList(document.querySelector("[data-reasons]"), reasons, renderReasonCard);
  renderSectionList(document.querySelector("[data-menu-preview]"), featuredMenu.slice(0, 6), renderMenuCard);
  renderSectionList(document.querySelector("[data-events-preview]"), eventsPreview, renderEventCard);
  renderSectionList(document.querySelector("[data-taps-preview]"), taps, renderTapCard);
  renderSectionList(
    document.querySelector("[data-gallery-preview]"),
    gallery.slice(0, 4),
    (item, index) => renderGalleryCard(item, index === 0 ? "wide" : index === 3 ? "tall" : "")
  );
  renderSectionList(document.querySelector("[data-proof]"), proofCards, renderProofCard);
}

function renderMenuPage() {
  const container = document.querySelector("[data-menu-sections]");
  if (!container) return;

  const sections = [...new Set(menuItems.map((item) => item.section))];
  container.innerHTML = sections
    .map((section) => {
      const items = menuItems.filter((item) => item.section === section);
      const sectionNote = {
        Breakfast: "Happy Hour Monday-Friday 2-6pm. Bottomless mimosas available at breakfast.",
        "Pre-Game": "Best pulled up before the first whistle or first pitch.",
        Burgers: "Classic bar burgers on brioche and grilled rye.",
        "The Papas": "Fries, tots, chips, and loaded sides.",
        "The Dog House": "Jumbo dogs with the kind of toppings regulars know by name.",
        "The SB Sands": "Sandwiches, melts, clubs, and wraps.",
        "Big Salads": "Heavier salads that still eat like a meal.",
        "Scoreboard Faves": "The bigger plates that anchor the menu.",
        "Side Piece": "Sides, add-ons, and drink prices."
      }[section] || "Classic Scoreboard staples.";

      return `
        <section class="menu-section" data-reveal>
          <div class="section-header">
            <div>
              <h2 style="font-size: clamp(1.6rem, 3vw, 2.4rem);">${section}</h2>
              <p class="section-lead">${sectionNote}</p>
            </div>
            ${section === "Breakfast" ? '<div class="tag">Happy Hour Monday-Friday 2-6pm</div>' : ""}
          </div>
          <div class="menu-list">
            ${items.map(renderMenuCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderEventsPage() {
  renderSectionList(document.querySelector("[data-week-board]"), weeklySchedule, (item) => {
    const isCurrent = item.day === currentDay;
    return `
      <article class="day-card ${isCurrent ? "is-current" : ""}" data-reveal>
        <div class="abbr">${item.abbr}</div>
        <h3>${item.day}</h3>
        <div class="special">${item.special}</div>
        <div class="mini">${item.detail}</div>
      </article>
    `;
  });

  renderSectionList(
    document.querySelector("[data-event-highlights]"),
    eventsPreview,
    (item) => `
      <article class="event-card" data-reveal>
        <div class="tag">${item.tag}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
  );
}

function renderDrinksPage() {
  renderSectionList(
    document.querySelector("[data-drink-grid]"),
    taps,
    (item) => `
      <article class="tap-card" data-reveal>
        <div class="thumb small">
          <img src="${item.image}" alt="${item.name} at ${business.name}" loading="lazy">
        </div>
        <div class="tag">${item.style}</div>
        <h3>${item.name}</h3>
        <p>${item.note}</p>
      </article>
    `
  );
}

function renderGalleryPage() {
  const controls = document.querySelector("[data-gallery-controls]");
  const container = document.querySelector("[data-gallery-grid]");
  if (!controls || !container) return;

  const categories = ["All", ...new Set(gallery.map((item) => item.category))];
  controls.innerHTML = categories
    .map(
      (category, index) =>
        `<button class="chip ${index === 0 ? "is-active" : ""}" type="button" data-gallery-filter="${category}">${category}</button>`
    )
    .join("");

  container.innerHTML = gallery
    .map((item, index) => renderGalleryCard(item, index % 5 === 0 ? "wide" : index % 7 === 0 ? "tall" : ""))
    .join("");

  const buttons = controls.querySelectorAll("[data-gallery-filter]");
  const cards = container.querySelectorAll("[data-category]");

  const apply = () => {
    const active = controls.querySelector(".chip.is-active")?.dataset.galleryFilter || "All";
    cards.forEach((card) => {
      const matches = active === "All" || card.dataset.category === active;
      card.classList.toggle("hidden", !matches);
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((node) => node.classList.remove("is-active"));
      button.classList.add("is-active");
      apply();
    });
  });

  apply();
}

function renderVisitPage() {
  const hours = document.querySelector("[data-hours-note]");
  if (hours) {
    hours.innerHTML = `
      <article class="visit-card" data-reveal>
        <div class="tag">Hours note</div>
        <h3>Hours may vary</h3>
        <p>Call ahead for current kitchen and bar hours.</p>
      </article>
    `;
  }
}

function renderSharedFooterBits() {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
}

function renderJSONLD() {
  const script = document.querySelector("script[data-jsonld]");
  if (!script) return;
  const data = JSON.parse(script.textContent || "{}");
  script.replaceWith(Object.assign(document.createElement("script"), { type: "application/ld+json", textContent: JSON.stringify(data) }));
}

function init() {
  const headerMount = document.querySelector("[data-header]");
  const footerMount = document.querySelector("[data-footer]");
  const mobileMount = document.querySelector("[data-mobile-cta]");

  if (headerMount) headerMount.innerHTML = navHTML();
  if (footerMount) footerMount.innerHTML = footerHTML();
  if (mobileMount) mobileMount.innerHTML = mobileCTA();

  renderSharedFooterBits();
  renderJSONLD();

  if (page === "home") renderHome();
  if (page === "menu") renderMenuPage();
  if (page === "events") renderEventsPage();
  if (page === "drinks") renderDrinksPage();
  if (page === "gallery") renderGalleryPage();
  if (page === "visit") renderVisitPage();

  revealOnScroll();
}

init();
