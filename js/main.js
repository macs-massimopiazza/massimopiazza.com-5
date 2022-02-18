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
