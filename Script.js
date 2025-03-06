document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".LOL").forEach(game => {
        game.style.display = "block"; // Ensure all elements are shown
        game.style.visibility = "visible"; // Make sure they are not hidden
        game.style.opacity = "1"; // Fully visible
    });
});
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
    const gameContainer = document.querySelector(".game-container");
    let games = Array.from(document.querySelectorAll(".LOL"));

    if (!gameContainer || games.length === 0) {
        console.error("Game container or games not found!");
        return;
    }

    // Sort games alphabetically by data-name on page load
    games.sort((a, b) => {
        let nameA = a.getAttribute("data-name").toLowerCase();
        let nameB = b.getAttribute("data-name").toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Append sorted games to the container
    gameContainer.innerHTML = "";
    games.forEach(game => gameContainer.appendChild(game));

    // Position games in a grid layout
    function positionGames(gameList) {
        let startTop = 30;  // Initial Y position
        let startLeft = 10; // Initial X position
        let rowSpacing = 25; // Space between rows
        let colSpacing = 12; // Space between columns
        let maxColumns = 8; // Adjust based on screen width
        let currentLeft = startLeft;
        let currentTop = startTop;
        let columnCount = 0;

        gameList.forEach((game) => {
            game.style.position = "absolute";
            game.style.display = "block";
            game.style.top = `${currentTop}%`;
            game.style.left = `${currentLeft}%`;

            columnCount++;
            currentLeft += colSpacing;

            if (columnCount >= maxColumns) {
                columnCount = 0;
                currentLeft = startLeft;
                currentTop += rowSpacing;
            }
        });
    }

    // Position the sorted games correctly on load
    positionGames(games);

    // Search Functionality
    const searchInput = document.getElementById("searchBar");

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase().trim();

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

        // If the search bar is empty, restore alphabetical order and original layout
        if (searchValue === "") {
            gameContainer.innerHTML = "";
            games.forEach(game => {
                game.style.display = "block";
                gameContainer.appendChild(game);
            });
            positionGames(games); // Restore original grid layout
            return;
        }

        // Clear container and display only matching games at the top
        gameContainer.innerHTML = "";
        matchingGames.forEach(game => {
            game.style.display = "block";
            gameContainer.appendChild(game);
        });

        // Hide non-matching games
        nonMatchingGames.forEach(game => {
            game.style.display = "none";
        });

        // Reposition only the matching games
        positionGames(matchingGames);
    });
});
