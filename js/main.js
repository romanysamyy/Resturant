let nav = document.getElementById(`navbar`);
window.addEventListener("scroll", function () {
  let scrollPosition = document.documentElement.scrollTop;
  if (scrollPosition >= 0 && scrollPosition < 10) {
    let cssNavRules = nav.style.cssText;
    let num = cssNavRules.indexOf(`animation: sticky-slide-down 1s forwards;`);
    nav.style.cssText = cssNavRules.slice(0, Number(num) - 1);
  } else {
    nav.style.cssText += `animation: sticky-slide-down 1s forwards;`;
  }
});
