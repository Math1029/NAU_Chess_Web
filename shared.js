var toggleButton = document.querySelector(".toggle-button")
var backdrop = document.querySelector(".backdrop");
var mobileNav = document.querySelector(".mobile-nav__background");

function openMenu()
{
    backdrop.classList.add("open");
    mobileNav.classList.add("open");
}

function closeMenu()
{
    backdrop.classList.remove("open");
    mobileNav.classList.remove("open");

}

toggleButton.addEventListener("click", openMenu);

backdrop.addEventListener("click", closeMenu);