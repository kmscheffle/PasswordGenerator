// Assignment Code
var generateBtn = document.querySelector("#generate");

var number= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ]
var lower= [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper= [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var spec= [ "!","#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "?", "`", "~", "[", "{", "]", "}", "|", ">", "<", ".", ",", "'"]


// Write password to the #password input
function writePassword() { 
  var allcharacters= []
 var length= prompt ("how many characters in password? (8 to 128)")
 if (length< 8)  alert("password too short!")
 else if (length>128) alert ("password too long! ")

// added variables for each prompt and concated allcharacters to include any prompt with "yes" response.  added trim and to Lowercase functions to get rid of any spaces or uppercase characters in prompt.  
 var lowerr=prompt ("include lowercase letters? (yes/no)").trim().toLowerCase()
 if (lowerr=="yes") { allcharacters= allcharacters.concat(lower)}


 var upperr=prompt ("include uppercase letters? (yes/no)").trim().toLowerCase()
 if (upperr== "yes") { allcharacters= allcharacters.concat(upper)}
 

 var numbr= prompt ("include numbers? (yes/no)").trim().toLowerCase()
 if (numbr== "yes")  { allcharacters= allcharacters.concat(number)}


var specr=prompt ("include special characters? (yes/no)").trim().toLowerCase()
 if (specr== "yes")  { allcharacters= allcharacters.concat(spec)}



console.log(allcharacters)
// for loop to run through allcharacters array.  math.floor math.random function added to randomize characters selected from all characters array multiplied by length.  
  var password = "";
  for (let i=0; i< length; i++){ 
    password+=(allcharacters[Math.floor(Math.random()*allcharacters.length)])
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
