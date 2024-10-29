const femaleBtn = document.getElementById("FemaleBtn");
femaleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#femaleBtn i").classList.add("filledA");
  document.querySelector("#femaleBtn i").classList.remove("filledB");
});

const maleBtn = document.getElementById("maleBtn");
maleBtn.querySelector("click", (e) => {
  e.preventDefault();
  document.querySelector("maleBtn i").classList. add("filledB");
  document.querySelector("#femaleBtn i").classList.remove("filledA");
});