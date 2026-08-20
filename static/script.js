const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const parables = document.querySelectorAll(".parable-card");

searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const searchTerm = searchInput.value.toLowerCase().trim();

    parables.forEach(function(parable) {

        const title = parable.querySelector("h2").textContent.toLowerCase();
        const description = parable.querySelector("p").textContent.toLowerCase();

        if (
            title.includes(searchTerm) ||
            description.includes(searchTerm)
        ) {
            parable.style.display = "flex";
        } else {
            parable.style.display = "none";
        }

    });

});