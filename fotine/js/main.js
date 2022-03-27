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

//dark-theme switch
const switchElement = document.getElementById("switch-container");
const bodyElement = document.getElementsByTagName("body")[0];

switchElement.addEventListener("click", function() { 
    bodyElement.classList.toggle("dark");
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

