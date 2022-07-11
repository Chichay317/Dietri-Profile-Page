const weight = document.querySelector(".weight");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
const btnClear = document.querySelector(".edit__link");
const inputs = document.querySelectorAll("input");
const modal = document.querySelector(".modal");
const image = document.querySelector(".flex__image");
const button = document.querySelector(".button-2");
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// DROP-DOWN
weight.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    weight.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

// CLEARING THE INPUT FIELDS
btnClear.addEventListener("click", () => {
  inputs.forEach((input) => (input.value = ""));
});

// MAKING THE MODAL WORK
const closeModal = function () {
  modal.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
};

image.addEventListener("click", openModal);

button.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// MAKE MOBILE NAVIGATION WORK
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// SMOOTH SCROLLING ANIMATION
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    // const href = link.getAttribute("href");

    // // SCROLL BACK TO TOP
    // if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    // // SCROLL TO OTHER LINKS
    // if (href !== "#" && href.startsWith("#")) {
    //   const sectionEl = document.querySelector(href);
    //   sectionEl.scrollIntoView({ behavior: "smooth" });
    // }

    // CLOSE MOBILE NAVIGATION
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
