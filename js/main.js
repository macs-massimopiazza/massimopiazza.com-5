const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const container = $(".container");
const body = document.body;

const elements = {
  links: {
    about: $("#link-about"),
    doingNow: $("#link-doing-now"),
    done: $("#link-done"),
  },
  sideLinks: {
    about: $("#side-link-about"),
    doingNow: $("#side-link-doing-now"),
    done: $("#side-link-done"),
  },
  sections: {
    about: $("#about"),
    doingNow: $("#doing-now"),
    done: $("#done"),
  },
  arrows: {
    left: $("#arrow-left"),
    right: $("#arrow-right"),
  },
  ui: {
    switchContainer: $("#switch-container"),
    switchCircle: $(".switch-circle"),
    hamburger: $("#side-menu-toggle"),
    overlay: $(".overlay"),
    sideMenu: $(".sidemenu"),
    sideClose: $("#side-close"),
    stickman: $(".stickman"),
    star1: $(".star-1"),
    star2: $(".star-2"),
    hours: $("#hours"),
    minutes: $("#minutes"),
  }
};

const state = {
  currentPage: localStorage.getItem("current-page") || "about",
  darkTheme: localStorage.getItem("dark-theme") === "true"
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => container.classList.add("loaded"), 100);
  setTimeout(() => container.classList.add("settle"), 800);

  applyTheme(state.darkTheme);
  setPage(state.currentPage, false);
  initEvents();
  initClock();
});

const pagesOrder = ["about", "doingNow", "done"];

function clearActive() {
  $$(".active").forEach(el => el.classList.remove("active"));
}

function animate(section, direction = "right") {
  const offset = direction === "right" ? "10%" : "-10%";
  section.style.transform = `translateX(${offset})`;
  section.style.opacity = "0";

  setTimeout(() => {
    section.style.transform = "none";
    section.style.opacity = "1";
  }, 200);
}

function setPage(page, animateDir = null) {
  const section = elements.sections[page];
  if (!section) return;

  if (animateDir) animate(section, animateDir);

  clearActive();

  elements.links[page]?.classList.add("active");
  elements.sideLinks[page]?.classList.add("active");
  section.classList.add("active");

  state.currentPage = page;
  localStorage.setItem("current-page", page);
}

function nextPage(dir) {
  const index = pagesOrder.indexOf(state.currentPage);
  const nextIndex = (index + dir + pagesOrder.length) % pagesOrder.length;
  return pagesOrder[nextIndex];
}

function applyTheme(isDark) {
  body.classList.toggle("dark", isDark);

  elements.ui.stickman.src = isDark
    ? "img/foto-sinistra-dark.png"
    : "img/foto-sinistra.png";

  elements.ui.star1.src = isDark
    ? "img/star-dark-1.svg"
    : "img/star-light-1.svg";

  elements.ui.star2.src = isDark
    ? "img/star-dark-2.svg"
    : "img/star-light-2.svg";

  elements.ui.hamburger.src = isDark
    ? "img/hamburger-menu-dark.svg"
    : "img/hamburger-menu.svg";

  elements.ui.switchCircle.textContent = isDark ? "🌚" : "🌞";

  localStorage.setItem("dark-theme", isDark);
}

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");

  elements.ui.hours.textContent = h;
  elements.ui.minutes.textContent = m;
}

function initClock() {
  updateClock();
  setInterval(updateClock, 20000);
}

function openMenu() {
  elements.ui.overlay.style.display = "block";
  elements.ui.sideMenu.style.transform = "translateX(0)";
}

function closeMenu() {
  elements.ui.overlay.style.display = "none";
  elements.ui.sideMenu.style.transform = "translateX(-110%)";
}

function initEvents() {
  Object.keys(elements.links).forEach(page => {
    elements.links[page].addEventListener("click", () => {
      const dir = getDirection(page);
      setPage(page, dir);
    });
  });

  Object.keys(elements.sideLinks).forEach(page => {
    elements.sideLinks[page].addEventListener("click", () => {
      const dir = getDirection(page);
      setPage(page, dir);
      closeMenu();
    });
  });

  elements.arrows.right.addEventListener("click", () => {
    const next = nextPage(1);
    setPage(next, "left");
  });

  elements.arrows.left.addEventListener("click", () => {
    const prev = nextPage(-1);
    setPage(prev, "right");
  });

  elements.ui.switchContainer.addEventListener("click", () => {
    state.darkTheme = !state.darkTheme;
    applyTheme(state.darkTheme);
  });

  elements.ui.hamburger.addEventListener("click", openMenu);
  elements.ui.overlay.addEventListener("click", closeMenu);
  elements.ui.sideClose.addEventListener("click", closeMenu);
}

function getDirection(targetPage) {
  const currentIndex = pagesOrder.indexOf(state.currentPage);
  const targetIndex = pagesOrder.indexOf(targetPage);

  return targetIndex > currentIndex ? "left" : "right";
}

const lastUpdateEl = $("#last-update");
if (lastUpdateEl?.textContent.includes("LAST_UPDATE")) {
  lastUpdateEl.style.display = "none";
}