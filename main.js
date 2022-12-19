const MENU = document.querySelector(".menu");
const CLOSE = document.querySelector(".close");
const NAV = document.querySelector("nav");

//WHEN OUR MENU IS CLICKED

MENU.addEventListener("click", () => {
  //ADDING CSS CLASS
  NAV.classList.add("open-nav");
});

CLOSE.addEventListener("click", () => {
  //ADDING CSS CLASS
  NAV.classList.remove("open-nav");
});
