const smallmenu = document.querySelector("#menu");
const menuslide = document.querySelector("#menusl");
smallmenu.addEventListener("click", () => {
    menuslide.classList.toggle("disp");
});