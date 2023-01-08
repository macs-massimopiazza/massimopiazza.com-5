function getCurrentAge() {
    const ageElement = document.getElementById("age");
    let dateElement = new Date();
    let currentYear = dateElement.getFullYear();
    let currentMonth = dateElement.getMonth();
    let currentDate = dateElement.getDate();
    let age
    
    if(currentDate < 24 && currentMonth < 9) {
        age = (currentYear - 1999) - 1;
    } else {
        age = currentYear - 1999;
    }
    
    ageElement.innerHTML = age
}

const italian = {
    "testo": "prova",

    //about page
    "img_caption": "mia rappresentazione abbastanza fedele...",
    "img_caption2": "scherzone, passa sulla foto col mouse per vedermi",
    "ab-title": "ciao",
    "ab-name": "sono massimo piazza",
    "ab-age": "ho <span id='age'></span> anni",
    "ab-city": "vivo a verooona",
    "ab-occupation": "professione non ben definita, diciamo programmatore",
    "ab-hobbies": "scio, suono la batteria, mi piacciono tanto moto e auto (e lavoro hihi)",
    //TODO change cv source file on lang change
    "ab-cv": "clicca qui, scarica il mio cv 📄",
    "ab-funny1": "ho finito le cose da dire",
    "ab-funny2": "questa lista deve essere più lunga",
    "ab-funny3": "ultimo punto e poi apposto",
    "ab-dog_text": "guarda questo",

    //nav menu links
    "link_about": "chi sono",
    "link_doing_now": "cosa sto facendo",
    "link_done": "cosa ho fatto",
    "link_contacts": "contatti :)",

    //footer
    "footer_disclaimer": "attenzione, sito ancora in costruzione <span class='no-select'>🔨</span>"
};

const english = {
    "testo": "prova",

    //about page
    "img_caption": "my fairly faithful representation...",
    "img_caption2": "big joke, hover on the photo to see me",
    "ab-title": "hello",
    "ab-name": "I'm massimo piazza",
    "ab-age": "I'm <span id='age'></span>",
    "ab-city": "living in verooona",
    "ab-occupation": "hard to explain my occupation, let's say programmer",
    "ab-hobbies": "skiing, playing drums, I like cars & motorcycles (also I work hihi)",
    //TODO change cv source file on lang change
    "ab-cv": "click me, download my cv 📄",
    "ab-funny1": "I ran out of things to say",
    "ab-funny2": "this list should be longer",
    "ab-funny3": "last one and that's it",
    "ab-dog_text": "watch this",

    //nav menu links
    "link_about": "about me",
    "link_doing_now": "what I am doing ",
    "link_done": "what I've done",
    "link_contacts": "contacts :)",

    //footer
    "footer_disclaimer": "warning, website under costruction <span class='no-select'>🔨</span>"
};


const langSwitch = new I18NSwitch(
    "switch",
    {
        flag: CountryFlags.ITALY,
        language: italian
    },
    {
        flag: CountryFlags.UNITED_KINGDOM,
        language: english
    },
    italian
)

getCurrentAge();

document.getElementById("switch").addEventListener("click", () => {
    getCurrentAge();
    if(langSwitch.isSecondaryLanguageOn()) {
        document.getElementById('cv_link').setAttribute("href", "altro");
    } else if (langSwitch.isMainLanguageOn()) {
        document.getElementById('cv_link').setAttribute("href", "/resources/cv-aggiornato-feb-22.pdf");
    }
})