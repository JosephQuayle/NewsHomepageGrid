//get hamburger button
//onclick - make nav appear and disappear

//get nav, toggle display on click

const hamBtn = document.getElementById("hamBtn");
const mobNav = document.getElementById("mobNav");

hamBtn.addEventListener("click", toggleNav);
mobNav.style.display = "none";

function toggleNav() {
  if (mobNav.style.display === "") {
    mobNav.style.display = "none"; // This will use the value from the CSS, which is "none"
  } else {
    mobNav.style.display = "";
  }
}
