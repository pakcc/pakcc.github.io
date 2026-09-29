(() => {
  "use strict";

  const menu = document.querySelector(".mobile-nav");
  if (menu) {
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => { menu.open = false; });
    });
  }

  const clock = document.querySelector("[data-paris-time]");
  if (clock) {
    const updateClock = () => {
      const now = new Date();
      clock.dateTime = now.toISOString();
      clock.textContent = "FRANCE / " + new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Paris",
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZoneName: "short"
      }).format(now).toUpperCase();
    };
    updateClock();
    window.setInterval(updateClock, 60000);
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const randomButton = document.querySelector("[data-random-memory]");
  if (randomButton) {
    const memoryPages = [
      "place-paris.html",
      "place-prague.html",
      "place-berlin.html",
      "fragment-001.html",
      "fragment-002.html",
      "fragment-003.html",
      "music-mianmian.html",
      "art-cowboy-bebop.html",
      "collection-ticket.html",
      "blog-between-stations.html",
      "blog-what-we-keep.html"
    ];
    randomButton.addEventListener("click", () => {
      const page = memoryPages[Math.floor(Math.random() * memoryPages.length)];
      window.location.href = page;
    });
  }

  console.info("See you, space traveler.");
})();
