window.addEventListener("scroll", ()=> {
  if(window.scrollY > 40) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
});