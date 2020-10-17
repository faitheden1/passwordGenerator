

// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function passwordOptions() {
  // let password = ""; // new gen. password


  while (!passwordLength && !specialCharacters && !numericCharacters && !lowerCasedCharacters && !upperCasedCharacters) { 
     var passwordLength = (prompt("How many characters in your password?"))
     var specialCharacters = (confirm("Would you like to use special characters?"))
     var numericCharacters = (confirm("Would you like to use numbers?"))
     var lowerCasedCharacters = (confirm("Would you like to include lower case letters?"))
     var upperCasedCharacters = (confirm("Would you like to include upper case letters?"))

  }

  //object
var savedOptions = {
passwordLength: passwordLength, 
specialCharacters: specialCharacters,
numericCharacters: numericCharacters,
lowerCasedCharacters: lowerCasedCharacters,
upperCasedCharacters: upperCasedCharacters,
}

console.log(
  passwordLength, '—',
  specialCharacters, '—',
  numericCharacters, '—',
  lowerCasedCharacters, '—',
  upperCasedCharacters
)

return savedOptions  
}

// passwordOptions()

function random(arr) {
 var randomIndex = Math.floor(Math.random() * arr.length);
 var randomElement = arr[randomIndex];
 return randomElement;
}

function passwordGen() {
    var option = passwordOptions();
    var passwordResult = []
    var includedChar = []
    var chosenChar = []
 console.log(option)

//conditional
    if (option.specialCharacters) {
      includedChar.push.apply(includedChar, specialCharacters);
      //chosenChar.push(random(specialCharacters))
    }

    if (option.numericCharacters) {
      includedChar.push.apply(includedChar, numericCharacters);
      //chosenChar.push(random(numericCharacters))
    }

    if (option.lowerCasedCharacters) {
      includedChar.push.apply(includedChar, lowerCasedCharacters);
      //chosenChar.push(random(lowerCasedCharacters))
    }
    
    if (option.upperCasedCharacters) {
      includedChar.push.apply(includedChar, upperCasedCharacters);
      //chosenChar.push(random(upperCasedCharacters))
    }
    console.log(includedChar)

  for (let i = 0; i < option.passwordLength; i++) {
//let characters = random(characters);

    // pick a random character from the includedChar array
    let characters = includedChar[Math.floor(Math.random() * includedChar.length)]
  
  passwordResult.push(characters);
  }

  // for (let i  = 0; i < chosenChar.length; i++) {
  //   passwordResult[i]= chosenChar[i];
  // }
  console.log("passwordResult", passwordResult)
  return passwordResult.join('')
}





// var gen = document.querySelector("#generate");

// // $("#generate") .click (passwordOptions)
// gen.addEventListener("click", passwordOptions)


var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = passwordGen();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

