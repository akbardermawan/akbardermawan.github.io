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

// Modal Box 4
const modalBox4 = document.querySelector(".modalbox4");
const detailButtons4 = document.querySelectorAll(".detail4");

detailButtons4.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modalBox4.style.display = "flex";
    e.preventDefault();
  });
});

const closeIcon4 = document.querySelector(".close-icon4");
closeIcon4.addEventListener("click", (e) => {
  modalBox4.style.display = "none";
  e.preventDefault();
});

// Modal4 box container
document.querySelectorAll(".modalbox4 .doc").forEach((img) => {
  img.addEventListener("click", function () {
    const mainImage = document.getElementById("mainImage4");
    mainImage.src = this.src;
    mainImage.alt = this.alt;
  });
});

// Modal Box 5
const modalBox5 = document.querySelector(".modalbox5");
const detailButtons5 = document.querySelectorAll(".detail5");

detailButtons5.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modalBox5.style.display = "flex";
    e.preventDefault();
  });
});

const closeIcon5 = document.querySelector(".close-icon5");
closeIcon5.addEventListener("click", (e) => {
  modalBox5.style.display = "none";
  e.preventDefault();
});

// Modal5 box container
document.querySelectorAll(".modalbox5 .doc").forEach((img) => {
  img.addEventListener("click", function () {
    const mainImage = document.getElementById("mainImage5");
    mainImage.src = this.src;
    mainImage.alt = this.alt;
  });
});

// Modal Box 6
const modalBox6 = document.querySelector(".modalbox6");
const detailButtons6 = document.querySelectorAll(".detail6");

detailButtons6.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modalBox6.style.display = "flex";
    e.preventDefault();
  });
});

const closeIcon6 = document.querySelector(".close-icon6");
closeIcon6.addEventListener("click", (e) => {
  modalBox6.style.display = "none";
  e.preventDefault();
});

// Modal6 box container
document.querySelectorAll(".modalbox6 .doc").forEach((img) => {
  img.addEventListener("click", function () {
    const mainImage = document.getElementById("mainImage6");
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

//Dwonload file Assets
function downloadPDF() {
  const pdfUrl = "assets/fileku.pdf"; // Ganti dengan link file PDF kamu
  const fileName = "cv_akbar.pdf";

  const a = document.createElement("a");
  a.href = pdfUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ------------------------
// dark Mode
// ------------------------
const body = document.body;
const footer = document.getElementById("footer");
const toggleBtn = document.getElementById("toggleBtn");
const home = document.getElementById("home");
const about = document.getElementById("about");
const project = document.getElementById("project");
const contact = document.getElementById("contact");
const navbar = document.getElementById("navbar");
const navbar2 = document.getElementById("navbar2");
const content = document.getElementById("content");
const threejsContainer = document.getElementById("threejs-container");

// text berjalan
const textMove = document.createElement("div");
textMove.classList.add("marquee-container");

const marqueeDiv = document.createElement("div");
marqueeDiv.classList.add("marquee-text");
marqueeDiv.id = "marquee";
marqueeDiv.textContent = "Akbar Dermawan Mahbubillah";

textMove.appendChild(marqueeDiv);

let animationId; // Untuk menyimpan ID animasi agar bisa dihentikan

//Navbar

const homeNav = document.createElement("a");
homeNav.href = "#home";
const iHome = document.createElement("i");
iHome.setAttribute("data-feather", "home");
homeNav.appendChild(iHome);

const projectNav = document.createElement("a");
projectNav.href = "#project";
const iProject = document.createElement("i");
iProject.setAttribute("data-feather", "file-text");
projectNav.appendChild(iProject);

const buttonNav = document.createElement("button");
buttonNav.id = "toggleBtn2";
buttonNav.textContent = "Light Mode";

//Home
// Dark mode image
const darkImgDiv = document.createElement("div");
darkImgDiv.classList.add("img-dark");

const darkImg = document.createElement("img");
darkImg.src = "/img/kyboard.JPG";
darkImg.alt = "Foto Profil";
darkImg.style.width = "100%";
darkImg.style.borderRadius = "5px";
darkImgDiv.appendChild(darkImg);

// _____________
// About

// Clock untuk about
const clockDiv = document.createElement("div");
clockDiv.classList.add("clock-dark");

const clock = document.createElement("h2");
clock.id = "clock";
clockDiv.appendChild(clock);

let clockInterval; // Menyimpan interval clock

const pAbout = document.createElement("p");
pAbout.textContent = `I am a website developer with an educational background in Agricultural Engineering. 
I graduated from one of the universities in Indonesia in 2020. 
Although my career path slightly deviates from my academic background, I chose to focus on improving my skills in programming, specifically in web development. 
I decided to pursue a career as a website developer because of my interest in programming, animation, and design. 
Additionally, I enjoy working with computers more than doing other types of work. 
I gained my skills through self-learning via online tutorials and also through an intensive three-month training program at one of the well-known training institutions.`;

// Gears untuk efek scroll
const gearsDiv = document.createElement("div");
gearsDiv.classList.add("gears");

const gearsI = document.createElement("i");
gearsI.setAttribute("data-feather", "settings");
gearsDiv.appendChild(gearsI);

let gearIcon = null; // Nanti diisi setelah feather.replace()

// Event untuk toggle dark mode
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  home.classList.toggle("dark");
  about.classList.toggle("dark");
  project.classList.toggle("dark");
  contact.classList.toggle("dark");
  navbar.classList.toggle("dark");
  navbar2.classList.toggle("dark");
  footer.classList.toggle("dark");
  threejsContainer.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "Light Mode";

    if (!navbar.contains(homeNav)) {
      navbar.append(homeNav);
    }
    if (!navbar.contains(projectNav)) {
      navbar.append(projectNav);
    }
    if (!navbar.contains(buttonNav)) {
      navbar.append(buttonNav);
    }

    if (!home.contains(darkImgDiv)) {
      home.prepend(darkImgDiv);
    }

    if (!about.contains(clockDiv)) {
      about.append(clockDiv);
      startClock();
    }

    if (!about.contains(pAbout)) {
      about.append(pAbout);
    }

    if (!body.contains(gearsDiv)) {
      body.appendChild(gearsDiv);
    }
    if (!body.contains(textMove)) {
      body.appendChild(textMove);

      // Setelah ditambahkan ke DOM, baru ambil marquee dan jalankan animasi
      const marquee = document.getElementById("marquee");
      let position = -marquee.offsetWidth; // mulai dari luar kiri layar

      function moveMarquee() {
        position += 2; // kecepatan gerak
        marquee.style.left = position + "px";

        if (position > window.innerWidth) {
          position = -marquee.offsetWidth; // reset ke kiri
        }

        animationId = requestAnimationFrame(moveMarquee);
      }

      moveMarquee();
    }

    feather.replace(); // Replace <i> dengan SVG
    gearIcon = document.querySelector(".gears svg");
  } else {
    toggleBtn.textContent = "Dark Mode";
    if (navbar.contains(homeNav)) {
      homeNav.remove();
    }
    if (navbar.contains(projectNav)) {
      projectNav.remove();
    }

    if (home.contains(darkImgDiv)) {
      darkImgDiv.remove();
    }

    if (about.contains(clockDiv)) {
      clockDiv.remove();
      stopClock();
    }

    if (about.contains(pAbout)) {
      pAbout.remove();
    }

    if (body.contains(gearsDiv)) {
      gearsDiv.remove();
    }

    gearIcon = null;
  }
});

buttonNav.addEventListener("click", () => {
  body.classList.toggle("dark");
  home.classList.toggle("dark");
  about.classList.toggle("dark");
  project.classList.toggle("dark");
  contact.classList.toggle("dark");
  navbar.classList.toggle("dark");
  navbar2.classList.toggle("dark");
  footer.classList.toggle("dark");
  threejsContainer.classList.toggle("dark");
  toggleBtn.textContent = "Dark Mode";

  if (navbar.contains(homeNav)) {
    homeNav.remove();
  }
  if (navbar.contains(projectNav)) {
    projectNav.remove();
  }
  if (navbar.contains(buttonNav)) {
    buttonNav.remove();
  }
  if (navbar.contains(buttonNav)) {
    buttonNav.remove();
  }
  if (navbar.contains(homeNav)) {
    homeNav.remove();
  }
  if (navbar.contains(projectNav)) {
    projectNav.remove();
  }

  if (home.contains(darkImgDiv)) {
    darkImgDiv.remove();
  }

  if (about.contains(clockDiv)) {
    clockDiv.remove();
    stopClock();
  }

  if (about.contains(pAbout)) {
    pAbout.remove();
  }

  if (body.contains(gearsDiv)) {
    gearsDiv.remove();
  }
  if (body.contains(textMove)) {
    textMove.remove();
    cancelAnimationFrame(animationId); // hentikan animasi
  }

  gearIcon = null;
});

// Event untuk rotasi gear saat scroll
window.addEventListener("scroll", () => {
  if (gearIcon) {
    const rotation = window.scrollY;
    gearIcon.style.transform = `rotate(${rotation}deg)`;
  }
});

// Fungsi update jam
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Fungsi mulai clock
function startClock() {
  updateClock();
  clockInterval = setInterval(updateClock, 1000);
}

// Fungsi stop clock
function stopClock() {
  clearInterval(clockInterval);
}
