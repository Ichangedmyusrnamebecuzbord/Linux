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
<div class="searchBar">
    <input id="Searchbar" onkeyup="searchGames()" placeholder="Type in a game or something...">
</div>

<script>
function searchGames() {
    const input = document.getElementById("Searchbar").value.toLowerCase(); // Fixed ID reference
    const gameCards = document.querySelectorAll(".game-card"); // Ensure game cards have this class
    const sectionLabels = document.querySelectorAll(".section-label");
    let noResultsMessage = document.getElementById("no-results"); 
    let hasResults = false;

    if (input) {
        sectionLabels.forEach(label => label.style.display = "none");

        gameCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(input)) {
                card.style.display = "block";
                hasResults = true;
            } else {
                card.style.display = "none";
            }
        });

        if (!hasResults) {
            if (!noResultsMessage) {
                noResultsMessage = document.createElement("div");
                noResultsMessage.id = "no-results";
                noResultsMessage.innerHTML = 'We don\'t have that game :( add it in our <a href="Forms.html">Forms</a> :)';
                document.getElementById("games").appendChild(noResultsMessage);
            } else {
                noResultsMessage.style.display = "block";
            }
        } else if (noResultsMessage) {
            noResultsMessage.style.display = "none";
        }
    } else {
        sectionLabels.forEach(label => label.style.display = "block");
        gameCards.forEach(card => card.style.display = "block");
        if (noResultsMessage) noResultsMessage.style.display = "none";
    }
}
</script>
