const navToggle = document.querySelector('.nav-toggle');

const navLinks = document.querySelector('.nav-links');
const navLinksMobile = document.querySelector('.nav-links-mobile');

const dropToggle = document.querySelector('.drop-toggle');
const aboutDropdownMobile = document.querySelector('.about-dropdown-mobile');
const subNavMobile = document.querySelector('.sub-nav-mobile');

const socialsDonate = document.querySelector('.socials-donate');
const socialsDonateMobile = document.querySelector('.socials-donate-mobile');


console.log(subNavMobile);
console.log(dropToggle);

let nav_toggle_bool = false;
let drop_toggle_bool = false;

console.log(drop_toggle_bool);

navToggle.addEventListener("click", () => {
    if (nav_toggle_bool == false) {
        navLinksMobile.style.display = "flex";
        aboutDropdownMobile.style.display = "block";
        socialsDonateMobile.style.display = "flex";
       // navBurger.ariaLabel = "nav bar";
        nav_toggle_bool = true;
        console.log("runs");

    }
    else {
        navLinksMobile.style.display = "none";
        socialsDonateMobile.style.display = "none";
        aboutDropdownMobile.style.display = "none";
        //aboutDropdownMobile.style.display = "none";
        nav_toggle_bool = false;
    }
})

dropToggle.addEventListener("click", () => {
    if (drop_toggle_bool == false) {

        subNavMobile.style.display = "block";
        drop_toggle_bool = true;
        console.log("runs");
    }
    else {
        subNavMobile.style.display = "none";
        drop_toggle_bool = false;
    }
})

