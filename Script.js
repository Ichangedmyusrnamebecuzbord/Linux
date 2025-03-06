document.addEventListener("DOMContentLoaded", function () {
    console.log("Search script loaded.");

    const searchInput = document.getElementById("searchBar");
    const games = document.querySelectorAll(".LOL");
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

        // If no matches are found, show everything
        if (matchingGames.length === 0) {
            games.forEach(game => game.style.display = "block");
            return;
        }

        // Clear the container and reorder elements
        gameContainer.innerHTML = "";

        matchingGames.forEach(game => {
            game.style.display = "block"; // Show matching games
            gameContainer.appendChild(game);
        });

        nonMatchingGames.forEach(game => {
            game.style.display = "block"; // Show non-matching games below
            gameContainer.appendChild(game);
        });
    });
});
