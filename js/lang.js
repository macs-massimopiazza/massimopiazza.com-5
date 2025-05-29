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
    "ab-cv": "clicca qui, scarica il mio cv 📄",
    "ab-funny1": "ho finito le cose da dire",
    "ab-funny2": "questa lista deve essere più lunga",
    "ab-funny3": "ultimo punto e poi a posto",
    "ab-dog_text": "o guarda questo",

    //doing now page
    "dnjb-title": "lavoro veeeroo",
    "dnjb-job1_name": "tutor e pm presso <a href='https://boolean.careers' target='blank'>boolean careers</a>",
    "dnjb-job1_from": "da dicembre 2021",
    "dnjb-job1_tasks1": "correggo esercizi degli studenti",
    "dnjb-job1_tasks2": "li aiuto quando hanno problemini",
    "dnjb-job1_tasks3": "e a portare a termine i progetti di fine corso",
    "dnjb-job2_name": "sviluppatore web e pm freelance",
    "dnjb-job2_from": "da gennaio 2020",
    "dnjb-job2_tasks1": "faccio sitini per chi ne ha bisogno",
    "dnjb-job2_tasks2": "senza una stack specifica",
    "dnjb-job2_tasks3": "ogni tanto aiuto a coordinare progetti",
    "dnpr-title": "progettini",
    "dnpr-prj1_tag": "progettini",
    "dnpr-prj1_title": "<a href='https://what-do-i-do-today-5ab1e.web.app' target='blank'>what do i do today</a>",
    "dnpr-prj1_desc1": "sto creando un giochino divertente",
    "dnpr-prj1_desc2": "quando non sai cosa fare",
    "dnpr-prj1_desc3": "ti suggerisce cose da fare",
    "dnpr-prj1_desc4": "non ho tempo, non lo sto portando avanti :(",
    "dnpr-prj2_desc1": "tante idee in mente",
    "dnpr-prj2_desc2": "ma poi sono pigro",
    "dnpr-prj2_desc3": "(non è una scusa valida lo so eheh)",

    //done page
    "dojb-title": "esperienze lavorative",
    "dojb-job1_name": "sviluppatore wordpress",
    "dojb-job1_company": "presso <a href='https://www.flyingweb.ie' target='blank'>flying web solutions</a>",
    "dojb-job1_time": "4 mesi (2021)",
    "dojb-job2_name": "sviluppatore rpa",
    "dojb-job2_company": "presso <a href='https://www.arag.it' target='blank'>arag se</a>",
    "dojb-job2_time": "3 mesi (2021)",
    "dojb-job3_name": "sviluppatore fullstack",
    "dojb-job3_company": "presso <a href='https://www.webmotion.it' target='blank'>webmotion</a>",
    "dojb-job3_time": "4 mesi (2020)",
    "dojb-job4_name": "sviluppatore vba excel",
    "dojb-job4_company": "presso <a href='https://www.arag.it' target='blank'>arag se</a>",
    "dojb-job4_time": "8 mesi (2017)",
    "dopr-title": "progettini passati",
    "dopr-eventshare": "presentazione",
    "dopr-serv_design": "progettino service design",
    "dopr-tag_personal": "(personali - molto vecchi)",
    "dopr-proj4": "jamstack sitebuilder",
    "dopr-proj1": "mio vecchio sito",
    "dopr-proj2": "reddit scraper",
    "dost-title": "dove ho studiato",
    "dost-st1_edpath": "user experience specialist",
    "dost-st1_school": "presso <a href='https://itslogistica.it' target='blank'>its last verona</a>",
    "dost-st1_subjects": "web development, ux ui design, project managment",
    "dost-st1_time": "2019 - 2021",
    "dost-st2_edpath": "ragioneria, sistemi informativi aziendali",
    "dost-st2_school": "presso <a href='https://www.copernicopasoli.edu.it' target='blank' >iiss copernico pasoli</a>",
    "dost-st2_time": "2013 - 2018",

    //nav menu links
    "link_about": "chi sono",
    "link_doing_now": "cosa sto facendo",
    "link_done": "cosa ho fatto",
    "link_contacts": "contatti :)",

    //giochino
    "game-title": "il giochino",
    "game-play": "gioca 🎮",
    "game-close": "chiudi ❌",
    "game-cta": "sorpresa, clicca questo",

    //footer
    "footer_disclaimer": "attenzione, sito ancora in costruzione <span class='no-select'>🔨</span>"
};

const english = {
    //about page
    "img_caption": "my fairly faithful representation...",
    "img_caption2": "big joke, hover on the photo to see me",
    "ab-title": "hello",
    "ab-name": "I'm massimo piazza",
    "ab-age": "<span id='age'></span> years old",
    "ab-city": "living in verooona",
    "ab-occupation": "hard to explain my occupation, let's say programmer",
    "ab-hobbies": "skiing, playing drums, I like cars & motorcycles (also I work hihi)",
    "ab-cv": "click me, download my cv 📄",
    "ab-funny1": "I ran out of things to say",
    "ab-funny2": "this list should be longer",
    "ab-funny3": "last one and that's it",
    "ab-dog_text": "or watch this",

    //doing now page
    "dnjb-title": "reeeal job",
    "dnjb-job1_name": "tutor & pm at <a href='https://boolean.careers' target='blank'>boolean careers</a>",
    "dnjb-job1_from": "from december 2021",
    "dnjb-job1_tasks1": "I correct students' exercises,",
    "dnjb-job1_tasks2": "help them when they have problems",
    "dnjb-job1_tasks3": "and, on the management side, help them to develop a final course project",
    "dnjb-job2_name": "freelance web dev & pm",
    "dnjb-job2_from": "from january 2020",
    "dnjb-job2_tasks1": "I make websites eheh",
    "dnjb-job2_tasks2": "without a specific stack, it depends",
    "dnjb-job2_tasks3": "and occasionally I help coordinate projects",
    "dnpr-title": "little projects",
    "dnpr-prj1_tag": "personal",
    "dnpr-prj1_title": "<a href='https://what-do-i-do-today-5ab1e.web.app' target='blank'>what do i do today</a>",
    "dnpr-prj1_desc1": "I started making this funny game",
    "dnpr-prj1_desc2": "when you don't know what to do",
    "dnpr-prj1_desc3": "it suggests things for you to do",
    "dnpr-prj1_desc4": "I don't have a lot of time to on it at the moment :(",
    "dnpr-prj2_desc1": "tons of ideas in mind",
    "dnpr-prj2_desc2": "but strong procrastination",
    "dnpr-prj2_desc3": "(it's not a valid excuse, I now eheh)",

    //done page
    "dojb-title": "work experience",
    "dojb-job1_name": "wordpress developer",
    "dojb-job1_company": "at <a href='https://www.flyingweb.ie' target='blank'>flying web solutions</a>",
    "dojb-job1_time": "4 months (2021)",
    "dojb-job2_name": "rpa developer",
    "dojb-job2_company": "at <a href='https://www.arag.it' target='blank'>arag se</a>",
    "dojb-job2_time": "3 months (2021)",
    "dojb-job3_name": "fullstack developer",
    "dojb-job3_company": "at <a href='https://www.webmotion.it' target='blank'>webmotion</a>",
    "dojb-job3_time": "4 months (2020)",
    "dojb-job4_name": "vba excel developer",
    "dojb-job4_company": "at <a href='https://www.arag.it' target='blank'>arag se</a>",
    "dojb-job4_time": "8 months (2017)",
    "dopr-title": "old projects",
    "dopr-eventshare": "presentation",
    "dopr-serv_design": "service design project",
    "dopr-tag_personal": "(personal - some are very old)",
    "dopr-proj4": "jamstack sitebuilder",
    "dopr-proj1": "my old websites",
    "dopr-proj2": "reddit scraper",
    "dost-title": "where I studied",
    "dost-st1_edpath": "user experience specialist",
    "dost-st1_school": "at <a href='https://itslogistica.it' target='blank'>its last verona</a>",
    "dost-st1_subjects": "web development, ux ui design, project managment",
    "dost-st1_time": "2019 - 2021",
    "dost-st2_edpath": "accounting, corporate information systems",
    "dost-st2_school": "at <a href='https://www.copernicopasoli.edu.it' target='blank' >iiss copernico pasoli</a>",
    "dost-st2_time": "2013 - 2018",

    //nav menu links
    "link_about": "about me",
    "link_doing_now": "what I am doing ",
    "link_done": "what I've done",
    "link_contacts": "contacts :)",

    //giochino
    "game-title": "macs run",
    "game-play": "play 🎮",
    "game-close": "close ❌",
    "game-cta": "surprise, click this",

    //footer
    "footer_disclaimer": "warning, website under costruction <span class='no-select'>🔨</span>"
};

const flags = {
    ITALY: '/img/italy.png',
    UNITED_KINGDOM: '/img/united-kingdom.png',
}

const langSwitch = new I18NSwitch(
    "lang-switch",
    {
        flag: flags.ITALY,
        language: italian
    },
    {
        flag: flags.UNITED_KINGDOM,
        language: english
    },
    italian
)

getCurrentAge();

document.getElementById("lang-switch").addEventListener("click", () => {
    getCurrentAge();
    if(langSwitch.isSecondaryLanguageOn()) {
        document.getElementById('cv_link').setAttribute("href", "/resources/cv-en.pdf");
    } else if (langSwitch.isMainLanguageOn()) {
        document.getElementById('cv_link').setAttribute("href", "/resources/cv-en.pdf");
    }
})

//TODO: save language preference