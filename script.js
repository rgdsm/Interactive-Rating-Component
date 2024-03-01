let button = document.querySelector(".button")
let mainArea = document.querySelector(".mainArea")
let mainResult = document.querySelector(".mainArea-2")

let buttons = document.querySelectorAll(".listMain a")
let ratingButtons = document.querySelectorAll(".ratingButton")

let voteResult = document.querySelector("#voteResult")

buttons.forEach(function(button){
    button.addEventListener("click", function(event){
        ratingButtons.forEach(function(btn){
            btn.classList.remove("selected")
        })
        button.classList.add("selected")

        voteResult.textContent = button.textContent
    })
})

button.addEventListener("click", function(event){
    event.preventDefault();

    let submitButton = document.querySelector(".ratingButton.selected");

    mainArea.style.display = "none"
    mainResult.style.display = "flex"
})