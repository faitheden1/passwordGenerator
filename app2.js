var inputForm = document.querySelector("#inputForm");
var inputText = document.querySelector("#inputText");
var userVisit = document.querySelector("#userVisit")
inputForm.addEventListener("submit", function (e) {
  e.preventDefault()
  var userInput = inputText.value
  // Sets local storage with key = userName and value = to the users input
  window.localStorage.setItem("userName", userInput)
  document.querySelector("#userVisit").textContent = userInput
})
// Get something from local stoarge with key userName
var lastUser = window.localStorage.getItem("userName")
console.log(lastUser)
if (lastUser === null) {
  document.querySelector("#userVisit").textContent = "add user in text"
} else {
  document.querySelector("#userVisit").textContent = lastUser
}