var inputForm = document.querySelector("#inputForm")
var inputText = document.querySelector("#inputText")

inputForm.addEventListener("submit", function (e) {
  e.preventDefault()
    var userInput = inputText.value

    //console.log(inputText.value)
window.localStorage.setItem("userName", userInput)

})

var lastUser = window.localStorage.getItem("userName")