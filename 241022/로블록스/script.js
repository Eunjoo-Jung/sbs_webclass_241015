const femaleBtn = document.getElementById("femaleBtn");
femaleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#femaleBtn i").classList.add("filledA");
  document.querySelector("#maleBtn i").classList.remove("filledB");
});

// const maleBtn = document.getElementById("maleBtn");
// console.log(maleBtn)
// maleBtn.querySelector("click", (e) => {
//   e.preventDefault();
//   console.log("test")
//   // document.querySelector("#maleBtn i").classList.add("filledB");
//   // document.querySelector("#femaleBtn i").classList.remove("filledA");
// });

const maleBtn = document.querySelector("#maleBtn");
maleBtn.addEventListener("click", (e) => {
  e.preventDefault();
document.querySelector("#maleBtn i").classList.add("filledB");
document.querySelector("#femaleBtn i").classList.remove("filledA");
});