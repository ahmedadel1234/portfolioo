document.addEventListener("DOMContentLoaded", function () {
  let letter = 0;
  const text = "Hi, Iam Ahmed Adel Elghiaty";
  function typeText() {
    if (letter < text.length) {
      document.getElementById("type-js").innerHTML += text.charAt(letter);
      letter++;
      let speed = Math.floor(Math.random() * 150) + 50;
      setTimeout(typeText, speed);
    }
  }
  typeText();
});

let totopBtn = document.querySelector(".totop");
let version = document.querySelector(".nupdate");

totopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  if (window.scrollY >= 600) {
    totopBtn.style.display = "block";
  } else {
    totopBtn.style.display = "none";
  }
};

//
