function searchTrip() {
  const destination = document
    .getElementById("destinationInput")
    .value
    .toLowerCase()
    .trim();

  const pages = {
    andaman: "andaman.html",
    goa: "goa.html",
    manali: "manali.html",
    puducherry: "puducherry.html",
    ooty: "ooty.html",
    jaipur: "jaipur.html",
    varanasi: "varanasi.html",
    munnar: "munnar.html"
  };

  if (pages[destination]) {
    window.location.href = pages[destination];
  } else {
    alert("Destination not found. Please try one from the list 😊");
  }
}

const ctaSection = document.querySelector(".compare-cta");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.4 }
);

observer.observe(ctaSection);

const plannerCTA = document.querySelector(".planner-cta");

const plannerObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.35 }
);

plannerObserver.observe(plannerCTA);

