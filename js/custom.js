const body = $("html, body");
const navLink = $(".navLink");
// function here..
navLink.on("click", (event) => {
  const targetElement = $(event.currentTarget).attr("data-scrolling");
  const foo = document.getElementById(targetElement);
  const pixelsToscrollDown = foo.offsetTop - 160;
  body.stop().animate({ scrollTop: pixelsToscrollDown }, 900, "swing");
});
