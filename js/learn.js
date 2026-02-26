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

// LEARN VIDEO CODE

const videoContainer = document.querySelector('.video-container');
const videoContainerText = document.querySelector('.video-container-text');
const selectedVideo = document.querySelector('.selected-video');

const learnVideo1 = document.getElementById("learn-video-1");
let learnVideo1Link = "https://www.youtube.com/embed/KfevxT8a3nQ?si=Bme-MGPAWHUtFAXg";

const learnVideo2 = document.getElementById("learn-video-2");
let learnVideo2Link = "https://www.youtube.com/embed/U5qKUhY1e1k?si=i9EFwae34dAQdHEh";

const learnVideo3 = document.getElementById("learn-video-3");
let learnVideo3Link = "https://www.youtube.com/embed/FRIjS714zBk?si=i3Fx4P6tcVA56hMX";

const learnVideo4 = document.getElementById("learn-video-4");
let learnVideo4Link = "https://www.youtube.com/embed/MC-7sdmugMo?si=cwl6eRgU21E8wXBU";

const learnVideo5 = document.getElementById("learn-video-5");
let learnVideo5Link = "https://www.youtube.com/embed/xJNGfPmjQLw?si=QPMc-SKV7Wd4A3pQ";

let learnVideoArray = [learnVideo1, learnVideo2, learnVideo3, learnVideo4, learnVideo5];
let prevVideo;

function changePrevColor() {
    for(let i = 0; i < learnVideoArray.length; i++) {
        if(prevVideo === learnVideoArray[i]) {
            learnVideoArray[i].style.backgroundColor = "#FFFFFF";
            learnVideoArray[i].style.color = "#000000";
        }
    }
}

learnVideo1.addEventListener('click', () => {
    changePrevColor();
    selectedVideo.src = learnVideo1Link;
    learnVideo1.style.backgroundColor = "#000000";
    learnVideo1.style.color = "#FFFFFF";
    prevVideo = learnVideo1;
});

learnVideo2.addEventListener('click', () => {
    changePrevColor();
    selectedVideo.src = learnVideo2Link;
    learnVideo2.style.backgroundColor = "#000000";
    learnVideo2.style.color = "#FFFFFF";
    prevVideo = learnVideo2;
});

learnVideo3.addEventListener('click', () => {
    changePrevColor();
    selectedVideo.src = learnVideo3Link;
    learnVideo3.style.backgroundColor = "#000000";
    learnVideo3.style.color = "#FFFFFF";
    prevVideo = learnVideo3;
});

learnVideo4.addEventListener('click', () => {
    changePrevColor();
    selectedVideo.src = learnVideo4Link;
    learnVideo4.style.backgroundColor = "#000000";
    learnVideo4.style.color = "#FFFFFF";
    prevVideo = learnVideo4;
});

learnVideo5.addEventListener('click', () => {
    changePrevColor();
    selectedVideo.src = learnVideo5Link;
    learnVideo5.style.backgroundColor = "#000000";
    learnVideo5.style.color = "#FFFFFF";
    prevVideo = learnVideo5;
});
