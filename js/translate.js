const textTranslations = [
    "Strona dostępna wkrótce!",
    "Mój profil GitHub",
    "Strona narzędzia",
];

if (window.navigator.language.split("-")[0] == "pl") {
    document.querySelector("html").lang = "pl";

    document.querySelectorAll("[text-id]").forEach((e) => {
        e.innerHTML = textTranslations[e.getAttribute("text-id")];
    });
}
