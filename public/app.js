document.addEventListener("DOMContentLoaded", () => {

    const unicornFacts = [
        "Los unicornios aparecen en mitos de culturas antiguas como China, Grecia y la India.",
        "El unicornio es el animal nacional de Escocia.",
        "En leyendas antiguas, los unicornios eran criaturas feroces, no adorables.",
        "Se creía que el cuerno de unicornio purificaba agua envenenada.",
        "Solo personas de corazón puro podían ver un unicornio, según las leyendas."
    ];

    const factText = document.getElementById("fact-text");

    const newFactButton = document.getElementById("btn-new-fact"); // “Nuevo Hecho”
    const favoriteButton = document.getElementById("btn-save-favorite"); // “🦄”

    const btnA = document.getElementById("btn-a");
    const btnB = document.getElementById("btn-b");

    const favoritesList = document.getElementById("favorites-list");

    let currentFact = "";

    function getLocalUnicornFact() {
        const index = Math.floor(Math.random() * unicornFacts.length);
        return unicornFacts[index];
    }

    function showNewFact() {
        currentFact = getLocalUnicornFact();
        factText.textContent = currentFact;
    }
        function addToFavorites() {
        if (!currentFact) return;

        const li = document.createElement("li");
        li.textContent = currentFact;
        favoritesList.appendChild(li);
    }

    newFactButton.addEventListener("click", showNewFact);
    favoriteButton.addEventListener("click", addToFavorites);

    
    btnA.addEventListener("click", showNewFact); 
    btnB.addEventListener("click", addToFavorites); 

});
function createFloatingStars() {
    const container = document.querySelector(".stars-container");

    for (let i = 0; i < 60; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        star.style.left = Math.random() * 100 + "vw";
        star.style.animationDelay = Math.random() * 8 + "s";
        star.style.animationDuration = 6 + Math.random() * 6 + "s";

        container.appendChild(star);
    }
}

createFloatingStars();
