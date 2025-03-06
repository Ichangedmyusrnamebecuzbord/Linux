document.addEventListener("DOMContentLoaded", function () {
    console.log("Search script loaded.");

    const searchInput = document.getElementById("searchBar");
    const games = document.querySelectorAll(".LOL");
    const gameContainer = document.querySelector(".game-container");

    if (!searchInput) {
        console.error("Search bar not found!");
        return;
    }

    if (!gameContainer) {
        console.error("Game container not found!");
        return;
    }

    if (games.length === 0) {
        console.error("No games found!");
        return;
    }

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase().trim();
        console.log("Search input:", searchValue);

        let matchingGames = [];
        let nonMatchingGames = [];

        games.forEach(game => {
            const gameName = game.getAttribute("data-name")?.toLowerCase();
            if (!gameName) return;

            if (gameName.includes(searchValue)) {
                matchingGames.push(game);
            } else {
                nonMatchingGames.push(game);
            }
        });

        console.log("Matching games:", matchingGames.length);
        console.log("Non-matching games:", nonMatchingGames.length);

        // Reset if search is empty
        if (searchValue === "") {
            games.forEach(game => {
                game.style.display = "block";
                gameContainer.appendChild(game);
            });
            return;
        }

        // Reorder elements
        gameContainer.innerHTML = "";
        matchingGames.forEach(game => {
            game.style.display = "block";
            gameContainer.appendChild(game);
        });

        nonMatchingGames.forEach(game => {
            game.style.display = "block";
            gameContainer.appendChild(game);
        });
    });
});
