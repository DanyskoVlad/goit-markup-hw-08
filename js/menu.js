(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-button__burger"),
    closeMenuBtn: document.querySelector(".menu-button__close"),
    menu: document.querySelector(".menu-mobile"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
