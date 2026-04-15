(() => {
  const name = "Michael Mansour";
  const tagline = "Software Developer | UCLA Mathematics Alum";
  const typewriterEl = document.getElementById("typewriter");
  const subtitleEl = document.getElementById("subtitle");
  const heroLinks = document.getElementById("hero-links");
  const avatar = document.getElementById("avatar");
  const nav = document.getElementById("nav");
  const main = document.getElementById("main-content");
  const footer = document.getElementById("footer");

  subtitleEl.textContent = tagline;

  let i = 0;
  const speed = 90; // ms per character

  function type() {
    if (i < name.length) {
      typewriterEl.textContent += name.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      typewriterEl.classList.add("done");
      revealContent();
    }
  }

  function revealContent() {
    setTimeout(() => {
      subtitleEl.classList.add("visible");
      heroLinks.classList.add("visible");
      avatar.classList.add("visible");
    }, 300);

    setTimeout(() => {
      nav.classList.remove("hidden");
      nav.style.opacity = "1";
      nav.style.transform = "translateY(0)";
      nav.style.pointerEvents = "auto";
    }, 600);

    setTimeout(() => {
      main.classList.remove("hidden");
      main.style.opacity = "1";
      main.style.transform = "translateY(0)";
      main.style.pointerEvents = "auto";
    }, 900);

    setTimeout(() => {
      footer.classList.remove("hidden");
      footer.style.opacity = "1";
      footer.style.transform = "translateY(0)";
      footer.style.pointerEvents = "auto";
    }, 1100);
  }

  // Start after a short pause
  setTimeout(type, 500);
})();
