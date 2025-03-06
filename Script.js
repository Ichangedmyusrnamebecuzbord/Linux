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
        const searchValue = searchInput.value.toLowerCase().trim();

        if (searchValue === "") {
            // Reset to original positions when search is cleared
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

        // If no matches are found, don't hide everything
        if (matchingGames.length === 0) {
            games.forEach(game => game.style.display = "block");
            return;
        }

        let topOffset = 30; // Starting Y position
        let rowSpacing = 20; // Space between rows
        let colSpacing = 12; // Space between columns
        let currentLeft = 1; // Start X position
        let currentTop = topOffset;

        // Position matching games first
        matchingGames.forEach((game, index) => {
            game.style.position = "absolute";
            game.style.display = "block";
            game.style.top = `${currentTop}%`;
            game.style.left = `${currentLeft}%`;

            currentLeft += colSpacing;
            if (currentLeft > 85) { // If row is full, go to the next row
                currentLeft = 1;
                currentTop += rowSpacing;
            }
        });

        // Reset positions for non-matching games below matching ones
        currentTop += rowSpacing; // Start new section below matching games
        currentLeft = 1;

        nonMatchingGames.forEach((game, index) => {
            game.style.position = "absolute";
            game.style.display = "block";
            game.style.top = `${currentTop}%`;
            game.style.left = `${currentLeft}%`;

            currentLeft += colSpacing;
            if (currentLeft > 85) { // If row is full, go to the next row
                currentLeft = 1;
                currentTop += rowSpacing;
            }
        });
    });
});
