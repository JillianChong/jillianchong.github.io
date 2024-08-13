// Home page project card redirects

cards = ["subwaydle-card", "todolist-card", "superhamster-card", "genetics-card"]
hrefs = ["subwaydle.html", "todolist.html", "superhamster.html", "genetics.html"]

project_code = ["subwaydle-github", "todolist-github"]
project_code_hrefs = ["https://github.com/JillianChong/Subwaydle", "https://github.com/JillianChong/todo-list"]
project_play = ["subwaydle-game", "todolist-game"]
project_play_hrefs = ["https://subwaydle.onrender.com/", "https://jillianchong.github.io/todo-list/"]

window.onload = function() {
    for(var i = 0; i < cards.length; i++) {
        (function(index) {
            var card = document.getElementById(cards[index]);
            if (card) {
                card.addEventListener("click", function() {
                    window.location.href = "/project-pages/" + hrefs[index];
                });
            } else {
                console.log("Card not found.")
            }
        })(i);
    }

    for(var i = 0; i < project_code.length; i++) {
        (function(index) {
            var code = document.getElementById(project_code[index]);
            if (code) {
                code.addEventListener("click", function() {
                    window.open(
                        project_code_hrefs[index], "_blank"
                    );
                });
            } else {
                console.log("Index not found.")
            }

            var play = document.getElementById(project_play[index]);
            if (play) {
                play.addEventListener("click", function() {
                    window.open(
                        project_play_hrefs[index], "_blank"
                    );
                });
            } else {
                console.log("Index not found.")
            }            
        })(i);
    }
}