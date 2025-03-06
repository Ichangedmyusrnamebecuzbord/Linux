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
    const searchInput = document.getElementById("searchBar");
    const games = document.querySelectorAll(".LOL");

    if (!searchInput) {
        console.error("Search bar not found!");
        return;
    }
    
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();

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

        // Define starting positions for matched and non-matched elements
        let topOffset = 30; // Start position for first row
        let rowSpacing = 20; // Adjust spacing between rows
        let currentLeft = 1; // Start left positioning

        // Reposition matching games at the top
        matchingGames.forEach((game, index) => {
            game.style.position = "absolute";
            game.style.top = `${topOffset}%`;
            game.style.left = `${currentLeft}%`;
            game.style.display = "block";

            // Adjust left positioning for next game
            currentLeft += 12;
            if (currentLeft > 85) { // Reset left position after reaching limit
                currentLeft = 1;
                topOffset += rowSpacing;
            }
        });

        // Reposition non-matching games below matched ones
        nonMatchingGames.forEach((game, index) => {
            game.style.position = "absolute";
            game.style.top = `${topOffset + (matchingGames.length + index) * rowSpacing}%`;
            game.style.left = `${currentLeft}%`;
            game.style.display = "block";

            currentLeft += 12;
            if (currentLeft > 85) {
                currentLeft = 1;
                topOffset += rowSpacing;
            }
        });

        // Hide elements if nothing matches
        if (searchValue === "") {
            games.forEach(game => {
                game.style.display = "block";
            });
        }
    });
});
