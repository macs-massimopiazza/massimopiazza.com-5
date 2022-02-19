//show page content
const linkAbout = document.getElementById("link-about");
const linkDoingNow = document.getElementById("link-doing-now");
const linkDone = document.getElementById("link-done");
const linkContact = document.getElementById("link-contact");

const aboutSection = document.getElementById("about");
const doingNowSection = document.getElementById("doing-now");
const doneSection = document.getElementById("done");
const contactModal = document.getElementById("contact-modal");

const container = document.getElementsByClassName("container")[0]

linkAbout.addEventListener("click", function() {
    const currentActive = document.querySelectorAll("ul.links > .active, section.active, div.active");
    for(let i = 0; i < currentActive.length; i++) {
        currentActive[i].classList.remove("active")
    }
    linkAbout.classList.add("active");
    aboutSection.classList.add("active")
});

linkDoingNow.addEventListener("click", function() {
    const currentActive = document.querySelectorAll("ul.links > .active, section.active, div.active");
    for(let i = 0; i < currentActive.length; i++) {
        currentActive[i].classList.remove("active")
    }
    linkDoingNow.classList.add("active");
    doingNowSection.classList.add("active")
});

linkDone.addEventListener("click", function() {
    const currentActive = document.querySelectorAll("ul.links > .active, section.active, div.active");
    for(let i = 0; i < currentActive.length; i++) {
        currentActive[i].classList.remove("active")
    }
    linkDone.classList.add("active");
    doneSection.classList.add("active");
});

//dark-theme switch
const switchElement = document.getElementById("switch-container");
const bodyElement = document.getElementsByTagName("body")[0];
const stickmanImg = document.getElementsByClassName("stickman")[0];

switchElement.addEventListener("click", function() { 
    bodyElement.classList.toggle("dark");
    if(bodyElement.classList[0] == "dark") {
        stickmanImg.src="img/foto-sinistra-dark.png"
    } else {
        stickmanImg.src="img/foto-sinistra.png"
    }
    if(localStorage.getItem("dark-theme") == "false") {
        localStorage.setItem("dark-theme", "true");
    } else if (localStorage.getItem("dark-theme") == "true"){
        localStorage.setItem("dark-theme", "false");
    }
});

//save dark theme preference
if (localStorage.getItem("dark-theme") == null) {
    localStorage.setItem("dark-theme", "false")
}
if (localStorage.getItem("dark-theme") == "true") {
    console.log("cambio a dark se variaile ok")
    bodyElement.classList.add("dark");
}

//get time
function getTheTime() {
    let today = new Date();
    let hour = today.getHours()
    let minutes = today.getMinutes()
    if(hour < 10) {
        hour = "0" + hour;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    hoursElement.innerHTML = hour;
    minutesElement.innerHTML = minutes;
}

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");

getTheTime();
setInterval(getTheTime, 20000);

