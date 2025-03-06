console.log("you shouldn't be seeing this");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");
});

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C")) ||
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }
});

if (window.location.href.startsWith("view-source:")) {
    window.location.replace("https://www.google.com");
 
}

let devtoolsOpen = false;
const checkDevTools = () => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if (widthThreshold || heightThreshold) {
        devtoolsOpen = true;
        window.open('', '_self').close();
        window.location.replace("https://www.google.com");
    } else {
        devtoolsOpen = false;
    }
};
setInterval(checkDevTools, 1000);

setInterval(() => {
    console.clear();
    console.log = function () {};
    console.warn = function () {};
    console.error = function () {};
}, 100);

if (window.location.href.startsWith("view-source:")) {
        document.write(" < h1 > 500 Internal Server Error < /h1>");
            document.write(" < p > The server encountered an internal error. < /p>");
              throw new Error("Fake Server Error to Block Source Code Viewing");
            }
document.addEventListener("DOMContentLoaded", function () {
    console.log("Search script loaded.");

    const searchInput = document.getElementById("searchBar");
    const games = Array.from(document.querySelectorAll(".LOL"));
    const gameContainer = document.querySelector(".game-container");

    if (!searchInput || !gameContainer) {
        console.error("Search bar or game container not found!");
        return;
    }

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase().trim();

        if (searchValue === "") {
            // Reset everything to original positions when search is cleared
            games.forEach(game => {
                game.style.display = "block";
            });
            return;
        }

        let matchingGames = [];
        let nonMatchingGames = [];

        games.forEach(game => {
            const gameName = game.getAttribute("data-name").toLowerCase();
            if (gameName.includes(searchValue)) {
                matchingGames.push(game);
            } else {
                nonMatchingGames.push(game);
            }
        });

        console.log("Matching games:", matchingGames.length);
        console.log("Non-matching games:", nonMatchingGames.length);

        // If no matches are found, hide all games
        if (matchingGames.length === 0) {
            games.forEach(game => game.style.display = "none");
            return;
        }

        // Clear the container and reorder elements
        gameContainer.innerHTML = "";

        // Arrange matching games at the top
        let topOffset = 30; // Start at top: 30%
        let leftOffset = 1; // Start at left: 1%
        let rowSpacing = 25; // Space between rows
        let colSpacing = 12; // Space between columns
        let currentLeft = leftOffset;
        let currentTop = topOffset;

        matchingGames.forEach((game, index) => {
            game.style.position = "absolute";
            game.style.display = "block";
            game.style.top = `${currentTop}%`;
            game.style.left = `${currentLeft}%`;
            gameContainer.appendChild(game);

            currentLeft += colSpacing;
            if (currentLeft > 85) {
                currentLeft = leftOffset;
                currentTop += rowSpacing;
            }
        });

        // Position non-matching games below matching ones
        currentTop += rowSpacing; // Move non-matching section lower
        currentLeft = leftOffset;

        nonMatchingGames.forEach((game, index) => {
            game.style.position = "absolute";
            game.style.display = "none"; // Hide non-matching games
        });
        document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".LOL").forEach(game => {
        game.style.display = "block";  // Make sure all are visible
    });
});
