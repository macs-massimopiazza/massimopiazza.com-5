/* <div id="switch"></div>

<p data-i18n="hello"></p> */

const italian = {
    "testo": "prova",

    //nav menu links
    "link_about": "chi sono",
    "link_doing_now": "cosa sto facendo",
    "link_done": "cosa ho fatto",
};

const english = {
    "testo": "prova",

    //nav menu links
    "link_about": "about me",
    "link_doing_now": "what I am doing ",
    "link_done": "what I've done",
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