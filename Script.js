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
        let maxColumns = 6; // Adjust based on screen width
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
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase().trim();

        let exactMatches = [];
        let partialMatches = [];

        games.forEach(game => {
            const gameName = game.getAttribute("data-name").toLowerCase();
            if (gameName.startsWith(searchValue)) {
                exactMatches.push(game); // Prioritize games that start with the search term
            } else if (gameName.includes(searchValue)) {
                partialMatches.push(game); // Games that contain the search term elsewhere
            }
        });

        // If the search bar is empty, restore alphabetical order
        if (searchValue === "") {
            gameContainer.innerHTML = "";
            games.forEach(game => {
                game.style.display = "block";
                gameContainer.appendChild(game);
            });
            positionGames(games); // Restore original grid layout
            return;
        }

        // Clear container and display matches in correct order
        gameContainer.innerHTML = "";
        exactMatches.forEach(game => {
            game.style.display = "block";
            gameContainer.appendChild(game);
        });
        partialMatches.forEach(game => {
            game.style.display = "block";
            gameContainer.appendChild(game);
        });

        // Hide non-matching games
        games.forEach(game => {
            if (!gameName.includes(searchValue)) {
                game.style.display = "none";
            }
        });

        // Reposition only the matching games
        positionGames([...exactMatches, ...partialMatches]);
    });
});








document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const searchBarOriginalTop = searchBar.offsetTop; // Get original top position

    window.addEventListener("scroll", function () {
        if (window.scrollY >= searchBarOriginalTop) {
            searchBar.style.position = "fixed";
            searchBar.style.top = "0"; // Stick to the top of the screen
            searchBar.style.left = "18%"; // Keep original left position
            searchBar.style.width = "800px"; // Maintain width
            searchBar.style.zIndex = "1000"; // Ensure it's above other elements
        } else {
            searchBar.style.position = "absolute";
            searchBar.style.top = "17%"; // Restore original position
            searchBar.style.left = "18%";
        }
    });
});
