// scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const gototop = document.querySelector(".gototop");
  if (window.scrollY > 50) {
    header.classList.add("active");
    gototop.classList.add("active");
  } else {
    header.classList.remove("active");
    gototop.classList.remove("active");
  }
});

// slick
$(".myslider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//common 
const menus = document.querySelectorAll(".gnb a");

// toggle menu
const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", function() {
  this.classList.toggle("active");
  document.querySelector(".gnb").classList.toggle("active");
});

// go to menu
menus.forEach((menu) => {
  menu.addEventListener("click", function (e)  { 
    e.preventDefault();
    const targetId = this.getAttribute("href"); 
    const targetElement = targetId ? document.querySelector(targetId) : null;
    const targetPosition = targetElement ? targetElement.offsetTop : 0;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    // 메뉴 누르면 해당 단락으로 이동 후 옆에 메뉴바가 사라지도록 함
    document.querySelector(".gnb").classList.remove("active");
    document.querySelector(".trigger").classList.remove("active");
  });
});

document.querySelector(".gototop").addEventListener("click", function(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = targetId ? document.querySelector(targetId) : null;
  // >이거 뭔가 잘못됨
  const targetPosition = targetElement ? targetElement.offsetTop : 0;
});