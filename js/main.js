let dashed = document.querySelector(".mobile-nav");
let allLi = document.querySelectorAll("nav ul li");
let allA = document.querySelectorAll("nav ul li a");

dashed.onclick = function () {
  document.querySelector("nav ul").classList.toggle("links");
  document.querySelector("nav ul").classList.toggle("checked");
  document.querySelector(".intro").classList.toggle("checked");
  for (i = 0; i < allLi.length; i++) {
    allLi[i].classList.toggle("checked");
  }

  for (m = 0; m < allA.length; m++) {
    allA[m].classList.toggle("checked");
  }
};

// desktop slidr

let cards = document.querySelector(".cards"),
  leftArrow = document.querySelector(".left-arrow"),
  rightArrow = document.querySelector(".right-arrow"),
  current = 0;

checker();

rightArrow.onclick = function () {
  current++;
  document.querySelector(".cards").style.transform = "translate(-25% , 0)";
  checker();
};

leftArrow.onclick = function () {
  current--;
  document.querySelector(".cards").style.transform = "translate(0px , 0)";
  checker();
};

function checker() {
  if (current == 1) {
    rightArrow.style.display = "none";
  } else {
    rightArrow.style.display = "block";
  }

  if (current == 0) {
    leftArrow.style.display = "none";
  } else {
    leftArrow.style.display = "block";
  }
}

// Slider in the mobile

let currentSlide = 0,
  card = document.querySelectorAll(".cards .card"),
  bullets = document.querySelectorAll(".bullets .bullet");

bullets[0].classList.add("current-slide");
card[0].classList.add("current-slide");

mobileSlider();

function mobileSlider() {
  bullets.forEach((bullet) => {
    bullet.onclick = function () {
      mobileChecker();
      bullet.classList.add("current-slide");
      card[bullet.getAttribute("data-number")].classList.add("current-slide");
    };
  });
}

function mobileChecker() {
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].classList.remove("current-slide");
    card[i].classList.remove("current-slide");
  }
}
