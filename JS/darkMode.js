let darkmode = document.getElementById("dark-mode");
let black1 = document.getElementById("black1");
let txt = document.getElementById("txt");
let black2 = document.getElementById("black2");
darkmode.addEventListener("click", () => {
  darkmode.style.color = "#ffffff";
  txt.style.color = "#ffffff";
  document.body.classList.toggle("darkMode");
  black1.classList.toggle("darkMode");
  black2.classList.toggle("darkMode");
});
