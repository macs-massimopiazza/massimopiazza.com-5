const container = document.getElementsByClassName("container")[0]
const main = document.getElementsByTagName("main")[0]

window.addEventListener("DOMContentLoaded", function(){
    setTimeout(()=> {
        container.classList.add("loaded")
    }, 100)
    setTimeout(()=> {
        container.classList.add("settle")
    }, 800)
});

//show page content
const linkAbout = document.getElementById("link-about");
const linkDoingNow = document.getElementById("link-doing-now");
const linkDone = document.getElementById("link-done");
const linkContact = document.getElementById("link-contact");

const sideLinkAbout = document.getElementById("side-link-about");
const sideLinkDoingNow = document.getElementById("side-link-doing-now");
const sideLinkDone = document.getElementById("side-link-done");

const aboutSection = document.getElementById("about");
const doingNowSection = document.getElementById("doing-now");
const doneSection = document.getElementById("done");

const pageArrowLeft = document.getElementById("arrow-left");
const pageArrowRight = document.getElementById("arrow-right");

// const container = document.getElementsByClassName("container")[0]

const hamburgerMenu = document.getElementById("side-menu-toggle");

linkAbout.addEventListener("click", function() {
    //animate on click
    aboutSection.style.transform = "translateX(10%)"
    aboutSection.style.opacity = "0"
    setTimeout(()=> {
        aboutSection.style.transform = "none"
        aboutSection.style.opacity = "1"
    }, 200)

    currentActive = document.querySelectorAll("li.active, div.active, section.active")
    for(let i = 0; i < currentActive.length; i++) {
        currentActive[i].classList.remove("active")
    }
    linkAbout.classList.add("active");
    sideLinkAbout.classList.add("active");
    aboutSection.classList.add("active")
    localStorage.setItem("current-page", "about");
});

linkDoingNow.addEventListener("click", function() {
    if(localStorage.getItem("current-page") == "about") {
        //animate on click
        doingNowSection.style.transform = "translateX(-10%)"
        doingNowSection.style.opacity = "0"
        setTimeout(()=> {
            doingNowSection.style.transform = "none"
            doingNowSection.style.opacity = "1"
        }, 200)
    } else {
        //animate on click
        doingNowSection.style.transform = "translateX(10%)"
        doingNowSection.style.opacity = "0"
        setTimeout(()=> {
            doingNowSection.style.transform = "none"
            doingNowSection.style.opacity = "1"
        }, 200)
    }

    

    currentActive = document.querySelectorAll("li.active, div.active, section.active")
    for(let i = 0; i < currentActive.length; i++) {
        currentActive[i].classList.remove("active")
    }
    linkDoingNow.classList.add("active");
    sideLinkDoingNow.classList.add("active");
    doingNowSection.classList.add("active")
    localStorage.setItem("current-page", "doing-now");
});

linkDone.addEventListener("click", function() {
    //animate on click
    doneSection.style.transform = "translateX(-10%)"
    doneSection.style.opacity = "0"
    setTimeout(()=> {
        doneSection.style.transform = "none"
        doneSection.style.opacity = "1"
    }, 200)

    currentActive = document.querySelectorAll("li.active, div.active, section.active")
    for(let i = 0; i < currentActive.length; i++) {
        currentActive[i].classList.remove("active")
    }
    linkDone.classList.add("active");
    sideLinkDone.classList.add("active");
    doneSection.classList.add("active");
    localStorage.setItem("current-page", "done");
});

//dark-theme switch
const switchContainer = document.getElementById("switch-container");
const switchCircle = document.querySelector(".switch-circle");
const bodyElement = document.getElementsByTagName("body")[0];
const stickmanImg = document.getElementsByClassName("stickman")[0];
const starOne = document.getElementsByClassName("star-1")[0];
const starTwo = document.getElementsByClassName("star-2")[0];

switchContainer.addEventListener("click", function() { 
    bodyElement.classList.toggle("dark");
    if(bodyElement.classList[0] == "dark") {
        stickmanImg.src="img/foto-sinistra-dark.png"
        starOne.src="img/star-dark-1.svg"
        starTwo.src="img/star-dark-2.svg"
        hamburgerMenu.src="img/hamburger-menu-dark.svg"
        switchCircle.innerHTML = "🌚";
    } else {
        stickmanImg.src="img/foto-sinistra.png"
        starOne.src="img/star-light-1.svg"
        starTwo.src="img/star-light-2.svg"
        hamburgerMenu.src="img/hamburger-menu.svg"
        switchCircle.innerHTML = "🌞";
    }
    if(localStorage.getItem("dark-theme") == "false") {
        localStorage.setItem("dark-theme", "true");
    } else if (localStorage.getItem("dark-theme") == "true"){
        localStorage.setItem("dark-theme", "false");
    }
});

//save current page
if (localStorage.getItem("current-page") == null) {
    localStorage.setItem("current-page", "")
}
let currentActive = document.querySelectorAll("li.active, div.active, section.active")
switch(localStorage.getItem("current-page")){
    case "about":
        for(let i = 0; i < currentActive.length; i++) {
            currentActive[i].classList.remove("active")
        }
        linkAbout.classList.add("active");
        sideLinkAbout.classList.add("active");   
        aboutSection.classList.add("active");
        localStorage.setItem("current-page", "about");
    break;
    case "doing-now":
        for(let i = 0; i < currentActive.length; i++) {
            currentActive[i].classList.remove("active")
        }
        linkDoingNow.classList.add("active");
        sideLinkDoingNow.classList.add("active");   
        doingNowSection.classList.add("active")
        localStorage.setItem("current-page", "doing-now");
    break;
    case "done":
        for(let i = 0; i < currentActive.length; i++) {
            currentActive[i].classList.remove("active")
        }
        linkDone.classList.add("active");
        sideLinkDone.classList.add("active");   
        doneSection.classList.add("active");
        localStorage.setItem("current-page", "done");
        pageArrowRight.
    break;
}

//save dark theme preference
if (localStorage.getItem("dark-theme") == null) {
    localStorage.setItem("dark-theme", "false")
}
if (localStorage.getItem("dark-theme") == "true") {
    bodyElement.classList.add("dark");
    stickmanImg.src="img/foto-sinistra-dark.png"
    starOne.src="img/star-dark-1.svg"
    starTwo.src="img/star-dark-2.svg"
    hamburgerMenu.src="img/hamburger-menu-dark.svg"
    switchCircle.innerHTML = "🌚";
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

/* side menu */
const overlayElement = document.getElementsByClassName("overlay")[0];
const sideMenu = document.getElementsByClassName("sidemenu")[0];
const sideClose = document.getElementById("side-close");

sideClose.addEventListener("click", function(){
    overlayElement.style.display = "none"
    sideMenu.style.transform = "translateX(-110%)"
});

overlayElement.addEventListener("click", function(){
    overlayElement.style.display = "none"
    sideMenu.style.transform = "translateX(-110%)"
});

hamburgerMenu.addEventListener("click", function(){
    overlayElement.style.display = "block"
    sideMenu.style.transform = "translateX(0)"
});

sideLinkAbout.addEventListener("click", function() {
    //animate on click
    aboutSection.style.transform = "translateX(10%)"
    aboutSection.style.opacity = "0"
    setTimeout(()=> {
        aboutSection.style.transform = "none"
        aboutSection.style.opacity = "1"
    }, 200)

    currentActive = document.querySelectorAll("li.active, div.active, section.active")
    for(let i = 0; i < currentActive.length; i++) {
        currentActive[i].classList.remove("active")
    }
    linkAbout.classList.add("active");
    sideLinkAbout.classList.add("active");    
    aboutSection.classList.add("active");
    localStorage.setItem("current-page", "about");
    overlayElement.style.display = "none"
    sideMenu.style.transform = "translateX(-110%)"
});

sideLinkDoingNow.addEventListener("click", function() {
    //animate on click
    if(localStorage.getItem("current-page") == "about") {
        //animate on click
        doingNowSection.style.transform = "translateX(-10%)"
        doingNowSection.style.opacity = "0"
        setTimeout(()=> {
            doingNowSection.style.transform = "none"
            doingNowSection.style.opacity = "1"
        }, 200)
    } else {
        //animate on click
        doingNowSection.style.transform = "translateX(10%)"
        doingNowSection.style.opacity = "0"
        setTimeout(()=> {
            doingNowSection.style.transform = "none"
            doingNowSection.style.opacity = "1"
        }, 200)
    }

    currentActive = document.querySelectorAll("li.active, div.active, section.active")
    for(let i = 0; i < currentActive.length; i++) {
        currentActive[i].classList.remove("active")
    }
    linkDoingNow.classList.add("active");
    sideLinkDoingNow.classList.add("active");
    doingNowSection.classList.add("active")
    localStorage.setItem("current-page", "doing-now");
    overlayElement.style.display = "none"
    sideMenu.style.transform = "translateX(-110%)"
});

sideLinkDone.addEventListener("click", function() {
    //animate on click
    doneSection.style.transform = "translateX(-10%)"
    doneSection.style.opacity = "0"
    setTimeout(()=> {
        doneSection.style.transform = "none"
        doneSection.style.opacity = "1"
    }, 200)

    currentActive = document.querySelectorAll("li.active, div.active, section.active")
    for(let i = 0; i < currentActive.length; i++) {
        currentActive[i].classList.remove("active")
    }
    linkDone.classList.add("active");
    sideLinkDone.classList.add("active");
    doneSection.classList.add("active");
    localStorage.setItem("current-page", "done");
    overlayElement.style.display = "none"
    sideMenu.style.transform = "translateX(-110%)"
});

//change page arrows logic
pageArrowRight.addEventListener("click", function() {
    switch(localStorage.getItem("current-page")) {
        case "about":
            if(localStorage.getItem("current-page") == "about") {
                //animate on click
                doingNowSection.style.transform = "translateX(-10%)"
                doingNowSection.style.opacity = "0"
                setTimeout(()=> {
                    doingNowSection.style.transform = "none"
                    doingNowSection.style.opacity = "1"
                }, 200)
            } else {
                //animate on click
                doingNowSection.style.transform = "translateX(10%)"
                doingNowSection.style.opacity = "0"
                setTimeout(()=> {
                    doingNowSection.style.transform = "none"
                    doingNowSection.style.opacity = "1"
                }, 200)
            }
        
            
        
            currentActive = document.querySelectorAll("li.active, div.active, section.active")
            for(let i = 0; i < currentActive.length; i++) {
                currentActive[i].classList.remove("active")
            }
            linkDoingNow.classList.add("active");
            sideLinkDoingNow.classList.add("active");
            doingNowSection.classList.add("active")
            localStorage.setItem("current-page", "doing-now");
            
            break;
        case "doing-now":
            //animate on click
            doneSection.style.transform = "translateX(-10%)"
            doneSection.style.opacity = "0"
            setTimeout(()=> {
                doneSection.style.transform = "none"
                doneSection.style.opacity = "1"
            }, 200)

            currentActive = document.querySelectorAll("li.active, div.active, section.active")
            for(let i = 0; i < currentActive.length; i++) {
                currentActive[i].classList.remove("active")
            }
            linkDone.classList.add("active");
            sideLinkDone.classList.add("active");
            doneSection.classList.add("active");
            localStorage.setItem("current-page", "done");
            
            break;
        case "done":
            //animate on click
            aboutSection.style.transform = "translateX(-10%)"
            aboutSection.style.opacity = "0"
            setTimeout(()=> {
                aboutSection.style.transform = "none"
                aboutSection.style.opacity = "1"
            }, 200)

            currentActive = document.querySelectorAll("li.active, div.active, section.active")
            for(let i = 0; i < currentActive.length; i++) {
                currentActive[i].classList.remove("active")
            }
            linkAbout.classList.add("active");
            sideLinkAbout.classList.add("active");
            aboutSection.classList.add("active");
            localStorage.setItem("current-page", "about");
            break;
    }
})

pageArrowLeft.addEventListener("click", function() {
    switch(localStorage.getItem("current-page")) {
        case "about":
            //animate on click
            doneSection.style.transform = "translateX(10%)"
            doneSection.style.opacity = "0"
            setTimeout(()=> {
                doneSection.style.transform = "none"
                doneSection.style.opacity = "1"
            }, 200)

            currentActive = document.querySelectorAll("li.active, div.active, section.active")
            for(let i = 0; i < currentActive.length; i++) {
                currentActive[i].classList.remove("active")
            }
            linkDone.classList.add("active");
            sideLinkDone.classList.add("active");
            doneSection.classList.add("active");
            localStorage.setItem("current-page", "done");
            
            break;
        case "doing-now":
            //animate on click
            aboutSection.style.transform = "translateX(10%)"
            aboutSection.style.opacity = "0"
            setTimeout(()=> {
                aboutSection.style.transform = "none"
                aboutSection.style.opacity = "1"
            }, 200)

            currentActive = document.querySelectorAll("li.active, div.active, section.active")
            for(let i = 0; i < currentActive.length; i++) {
                currentActive[i].classList.remove("active")
            }
            linkAbout.classList.add("active");
            sideLinkAbout.classList.add("active");
            aboutSection.classList.add("active");
            localStorage.setItem("current-page", "about");
            
            break;
        case "done":
            if(localStorage.getItem("current-page") == "about") {
                //animate on click
                doingNowSection.style.transform = "translateX(-10%)"
                doingNowSection.style.opacity = "0"
                setTimeout(()=> {
                    doingNowSection.style.transform = "none"
                    doingNowSection.style.opacity = "1"
                }, 200)
            } else {
                //animate on click
                doingNowSection.style.transform = "translateX(10%)"
                doingNowSection.style.opacity = "0"
                setTimeout(()=> {
                    doingNowSection.style.transform = "none"
                    doingNowSection.style.opacity = "1"
                }, 200)
            }
        
            currentActive = document.querySelectorAll("li.active, div.active, section.active")
            for(let i = 0; i < currentActive.length; i++) {
                currentActive[i].classList.remove("active")
            }
            linkDoingNow.classList.add("active");
            sideLinkDoingNow.classList.add("active");
            doingNowSection.classList.add("active")
            localStorage.setItem("current-page", "doing-now");
            break;
    }
})