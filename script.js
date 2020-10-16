

// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];



var gen = document.querySelector("#generate");

// $("#generate") .click (passwordOptions)
gen.addEventListener("click", passwordOptions)

function passwordOptions() {
  let password = ""; // new gen. password


  while (!passwordLength && !specialCharacters && !numericCharacters && !lowerCasedCharacters && !upperCasedCharacters) { 
     var passwordLength = (prompt("How many characters in your password?"))
     var specialCharacters = (prompt("What special characters do you want?"))
     var numericCharacters = (prompt("What numbers do you want?"))
     var lowerCasedCharacters = (prompt("What lower case characters do you want?"))
     var upperCasedCharacters = (prompt("What upper case characters do you want?"))

  }


  console.log(
    passwordLength, '—',
    specialCharacters, '—',
    numericCharacters, '—',
    lowerCasedCharacters, '—',
    upperCasedCharacters
  )

  
}
passwordOptions()

function random(arr) {
 var randomIndex = Math.floor(Math.random() * arr.length);
 var randomElement = arr[randomIndex];
 return randomElement;
}

function passwordGen(){
    var option = passwordOptions();
    var passwordResult = []
    var includedChar = []
    var chosenChar = []


}




// //for loop to generate password
// for (let i = 0; i < password.length; i++) {
//     var type = random(charAt);
   
//     for (let j = 0; j < type.character.count; j++) {
//         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1))); 
//     }
//             i = i + type.characterType.count
// }

// //add password to textbox/display area
// alert(password) || display.card(password)

// //set default length display of 128
// document.getElementById("length").innerHTML = "Length: 128";

// //NEED IF STATEMENT
// if(document.getElementById("passwordLength").value > 0){
//     document.getElementById("length").innerHTML = "Length: " + document.getElementById("passwordLength").value;
// }
// //NEED ELSE STATEMENT
// else{
//     document.getElementById("length").innerHTML = "Length: 1";
// }


/* 
for (
  let i = 0; // base/start point
  i <= 10;    // condition (if statement) // 0 - 11
  i++        // increment by 1
){
 console.log(i)
}
 */
/*  
i = 0
0 <= 11 // true ✓
1 <= 11 // true ✓
...
9 <= 11 // true ✓
10 <= 11 // true ✓
11 <= 11 // true ✓
12 <= 11 // false ✗
*/