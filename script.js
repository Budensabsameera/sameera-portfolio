/* ----- NAVIGATION MENU TOGGLE ----- */
function myMenuFunction() {
  const navMenu = document.getElementById("myNavMenu");
  navMenu.classList.toggle("active");
}


/* ----- ADD SHADOW TO NAVBAR ON SCROLL ----- */
window.addEventListener("scroll", () => {
  const navHeader = document.getElementById("header");
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
});

/* ----- TYPING EFFECT ----- */
const typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Presenter", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- SCROLL REVEAL ANIMATIONS ----- */
const srOptions = {
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
};

const sr = ScrollReveal(srOptions);

sr.reveal(".featured-text-card");
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header");

/* ScrollReveal from left */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* ScrollReveal from right */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- DOWNLOAD CV FUNCTION ----- */
function downloadCV() {
  const link = document.createElement("a");
  link.href = "./assets/Resume.pdf"; // Your CV file path
  link.download = "My_CV.pdf"; // Default filename on download
  document.body.appendChild(link); // Append to DOM to make it work in Firefox
  link.click();
  document.body.removeChild(link); // Clean up
}

/* ----- ACTIVE NAV LINK ON SCROLL ----- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

    if (!navLink) return; // Safety check if link not found

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
    } else {
      navLink.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
