const textTranslations = [
    "Profil GitHub",
    "🛠 Narzędzia",
    "Program do aktualizacji oprogramowania na systemie Windows",
    "Strona z narzędziami matematycznymi i informatycznymi",
    "Amatorska stacja meteo w Swarzędzu",
    "Strona",
    "Pobierz",
    "Repozytorium GitHub",
];

if (window.navigator.language.split("-")[0] == "pl") {
    document.querySelector("html").lang = "pl";

    document.querySelectorAll("[text-id]").forEach((e) => {
        e.innerHTML = textTranslations[e.getAttribute("text-id")];
    });
}
