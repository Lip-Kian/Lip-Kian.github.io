const toggleButton = document.getElementById("menu-toggle");
const closeButton = document.getElementById("close-menu");
const menu = document.getElementById("mobile-menu");


function openMenu() {
    menu.classList.add("active");
}

function closeMenu() {
    menu.classList.remove("active");

}

toggleButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);
