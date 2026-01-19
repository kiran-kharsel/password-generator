// dom elem

const generatePasswordBtn = document.querySelector(".generate-password");
const charRangeInput = document.querySelector("#range");
const charLengthElem = document.querySelector(".char-length");
const passwordElem = document.querySelector(".password");
const copyPasswordBtn = document.querySelector(".copy-btn");



// min character length is 5
charLengthElem.innerText = charRangeInput.value;


// show character length when range change
charRangeInput.addEventListener("input", function () {
  charLengthElem.innerText = charRangeInput.value;
});



generatePasswordBtn.addEventListener("click", function () {
  generatePassword();
});



// password generate
function generatePassword() {
  // select all values from range and checkbox
  const length = charRangeInput.value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbol").checked;

  // characters
  let allChars = "";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let numbersChars = "0123456789";
  let symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  // check if any checkbox selected
  if(includeUppercase){
    allChars += uppercaseChars;
  }

  if(includeLowercase){
    allChars += lowercaseChars;
  }

  if(includeNumbers){
    allChars += numbersChars;
  }

  if(includeSymbols){
    allChars += symbolChars;
  }

  // check if no checkbox selected
  if(allChars === ''){
    return
  }


  // create password
  let password = '';
  
  for(let i=0; i<length; i++){
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  passwordElem.innerText = password;
}

// copy password
copyPasswordBtn.addEventListener("click", function () {
  
  if(passwordElem.innerText !== 'Password...'){
    navigator.clipboard.writeText(passwordElem.innerText);
  }
});
