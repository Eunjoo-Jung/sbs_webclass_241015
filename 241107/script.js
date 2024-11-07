/* anime.js  -> download -> lib -> anime.js -> download -> 폴더 붙여넣기 */
const path = anime.path(".svg path");

anime({
  target: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  diration: 10000,
  loop: true,
});
