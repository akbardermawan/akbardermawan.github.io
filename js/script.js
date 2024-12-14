const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// clik diluar seidbar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// animasi pada home
const text = "Hello, I'm Akbar. I'm ready to join and share positive energy.";

const typingTextElement = document.getElementById("typing-text");
typingTextElement.style.fontSize = "1rem";

function typeText() {
  typingTextElement.textContent = "";
  let index = 0;

  const interval = setInterval(() => {
    typingTextElement.textContent += text[index];
    index++;

    if (index === text.length) {
      clearInterval(interval);
      setTimeout(() => {
        // Restart the typing animation after a delay
      }, 2000);
    }
  }, 100);
}

typeText(); // Start the typing animation

// Modal Box 1
const modalBox1 = document.querySelector(".modalbox1");
const detailButtons1 = document.querySelectorAll(".detail1");

detailButtons1.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modalBox1.style.display = "flex";
    e.preventDefault();
  });
});

const closeIcon1 = document.querySelector(".close-icon1");
closeIcon1.addEventListener("click", (e) => {
  modalBox1.style.display = "none";
  e.preventDefault();
});
// Modal1 box container
document.querySelectorAll(".modalbox1 .doc").forEach((img) => {
  img.addEventListener("click", function () {
    const mainImage = document.getElementById("mainImage1");
    mainImage.src = this.src;
    mainImage.alt = this.alt;
  });
});

// Modal Box 2
const modalBox2 = document.querySelector(".modalbox2");
const detailButtons2 = document.querySelectorAll(".detail2");

detailButtons2.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modalBox2.style.display = "flex";
    e.preventDefault();
  });
});

const closeIcon2 = document.querySelector(".close-icon2");
closeIcon2.addEventListener("click", (e) => {
  modalBox2.style.display = "none";
  e.preventDefault();
});

// Modal2 box container
document.querySelectorAll(".modalbox2 .doc").forEach((img) => {
  img.addEventListener("click", function () {
    const mainImage = document.getElementById("mainImage2");
    mainImage.src = this.src;
    mainImage.alt = this.alt;
  });
});

// Modal Box 3
const modalBox3 = document.querySelector(".modalbox3");
const detailButtons3 = document.querySelectorAll(".detail3");

detailButtons3.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modalBox3.style.display = "flex";
    e.preventDefault();
  });
});

const closeIcon3 = document.querySelector(".close-icon3");
closeIcon3.addEventListener("click", (e) => {
  modalBox3.style.display = "none";
  e.preventDefault();
});

// Modal3 box container
document.querySelectorAll(".modalbox3 .doc").forEach((img) => {
  img.addEventListener("click", function () {
    const mainImage = document.getElementById("mainImage3");
    mainImage.src = this.src;
    mainImage.alt = this.alt;
  });
});

// autoScroll
function startAutoscroll() {
  const sections = document.querySelectorAll("section");
  let currentSection = 0;

  const scrollNext = () => {
    if (currentSection < sections.length - 1) {
      currentSection++;
    } else {
      currentSection = 0; // Reset to the first section
    }

    sections[currentSection].scrollIntoView({ behavior: "smooth" });

    // If we reached the last section, schedule return to the first section
    if (currentSection === 0) {
      return; // Stop further scrolling
    } else {
      setTimeout(scrollNext, 1500); // Delay before next scroll
    }
  };

  scrollNext(); // Start scrolling
}

// Add event listener to button
document
  .getElementById("startScroll")
  .addEventListener("click", startAutoscroll);

// SlideBar
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;

function updateSlider() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
}

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length;
  updateSlider();
  resetAutoSlide();
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slide.length;
  updateSlider();
  resetAutoSlide();
});

indicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    currentIndex = parseInt(indicator.dataset.slide);
    updateSlider();
    resetAutoSlide();
  });
});

// Automatic slide function
function autoSlide() {
  currentIndex = (currentIndex + 1) % slide.length;
  updateSlider();
}

let autoSlideInterval = setInterval(autoSlide, 3000); // Change slide every 3 seconds

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 4000);
}

// Initialize the slider
updateSlider();
