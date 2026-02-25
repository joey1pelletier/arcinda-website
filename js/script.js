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

// Media Page Code


/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/oTOA8THbVkE?si=pISxpDLog6NHHTZ-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="560" height="315" src="https://www.youtube.com/embed/mzHy7JDyBM4?si=mWg3PPnTNdAW6AAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
*/
const videoContainer = document.querySelector('.video-container');
const videoContainerText = document.querySelector('.video-container-text');
const selectedVideo = document.querySelector('.selected-video');

const video1 = document.getElementById("video-1");
let video1Link = "https://www.youtube.com/embed/mzHy7JDyBM4?si=qVpTdsuEfhTcWVJg";

const video2 = document.getElementById("video-2");
let video2Link = "https://www.youtube.com/embed/oTOA8THbVkE?si=pISxpDLog6NHHTZ-";

const video3 = document.getElementById("video-3");
let video3Link = "https://www.youtube.com/embed/vn5WVjxi3Lw?si=6w4Rdae-1pAUyU0a";

const video4 = document.getElementById("video-4");
let video4Link = "https://www.youtube.com/embed/PrPNiYPm2Zc?si=Cq1OxPSwKob-zjMQ";

const video5 = document.getElementById("video-5");
let video5Link = "https://www.youtube.com/embed/P1kTBpRDG-g?si=HDOTqGMWzHRDUH03";

const video6 = document.getElementById("video-6");
let video6Link = "https://www.youtube.com/embed/hiOvSDfk-8o?si=5X602g1A0mczM8aC";

let videoArray = [video1, video2, video3, video4, video5, video6];
let prevVideo;

function changePrevColor() {
    for(let i = 0; i < 6; i++) {
        if(prevVideo === videoArray[i]) {
            videoArray[i].style.backgroundColor = "#FFFFFF";
            videoArray[i].style.color = "#000000";
        }
    }
}

video1.addEventListener('click', () => {
    changePrevColor();
    selectedVideo.src = video1Link;
    video1.style.backgroundColor = "#000000";
    video1.style.color = "#FFFFFF";
    prevVideo = video1;
});



video2.addEventListener('click', () => {
    changePrevColor();
    selectedVideo.src = video2Link;
    video2.style.backgroundColor = "#000000";
    video2.style.color = "#FFFFFF";
    prevVideo = video2;
});

video3.addEventListener('click', () => {
    changePrevColor();
    selectedVideo.src = video3Link;
    video3.style.backgroundColor = "#000000";
    video3.style.color = "#FFFFFF";
    prevVideo = video3;
});

video4.addEventListener('click', () => {
    changePrevColor();
    selectedVideo.src = video4Link;
    video4.style.backgroundColor = "#000000";
    video4.style.color = "#FFFFFF";
    prevVideo = video4;
});

video5.addEventListener('click', () => {
    changePrevColor();
    selectedVideo.src = video5Link;
    video5.style.backgroundColor = "#000000";
    video5.style.color = "#FFFFFF";
    prevVideo = video5;
});

video6.addEventListener('click', () => {
    changePrevColor();
    selectedVideo.src = video6Link;
    video6.style.backgroundColor = "#000000";
    video6.style.color = "#FFFFFF";
    prevVideo = video6;
});
