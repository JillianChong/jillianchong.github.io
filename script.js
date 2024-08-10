// Home page project card redirects

console.log("working");

window.onload = function() {
    var subwaydleCard = document.getElementById("subwaydle-card");
    if (subwaydleCard) {
        subwaydleCard.addEventListener("click", function() {
            window.location.href = "/project-pages/subwaydle.html";
        });
    }
}