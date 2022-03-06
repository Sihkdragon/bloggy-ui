const menuHandler = () => {
    const button = document.querySelector("#button-menu");
    const menu = document.querySelector("#toggle-menu");
    // cons
    menu.classList.contains("-translate-y-96") ? menu.classList.remove("-translate-y-96") : menu.classList.add("-translate-y-96")
}
const LoginPopUpHandler = () => {
    const button = document.querySelector("#button-login");
    const menu = document.querySelector("#popup");
    // cons
    menu.classList.contains("hidden") ? menu.classList.remove("hidden") : menu.classList.add("hidden")
}

const topBtn = document.querySelector("#top-btn")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}
const toTop= () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}