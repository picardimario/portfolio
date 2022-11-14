const menu = document.querySelector(".nav");
const toggle = document.querySelector(".mobile__burger");

toggle.addEventListener("click", () => {
  if (menu.style.right === "0px") {
    menu.style.right = "-120%";
  } else {
    menu.style.right = "0px";
  }
});
window.addEventListener("scroll", () => {
  if (menu.style.right === "0px") {
    window.scrollTo(
      document.documentElement.scrollTop,
      document.documentElement.scrollLeft
    );
  }
});
