// dom elem

const generatePasswordBtn = document.querySelector(".generate-password");
const charRangeInput = document.querySelector("#range");
const charLengthElem = document.querySelector(".char-length");
const passwordElem = document.querySelector(".password");

// checkboxes
const allCheckBoxes = document.querySelectorAll(".checkbox-container input");
console.log(allCheckBoxes);

// min character length is 5
charLengthElem.innerText = charRangeInput.value;

// password and characters array
let passwordCharacters = "";
let uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbol = "~!#$%^&*()-+";

// show character length when range change
charRangeInput.addEventListener("input", function () {
  console.log("range");
  charLengthElem.innerText = charRangeInput.value;
});



 allCheckBoxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      console.log(checkbox);
      //reset

      if (checkbox.id === "uppercase" && checkbox.checked) {
        passwordCharacters += uppercaseChar;
      } else if(checkbox.id === "uppercase" && !checkbox.checked){
        passwordCharacters = passwordCharacters.replace(uppercaseChar, '')
      }

      if (checkbox.id === "lowercase" && checkbox.checked) {
        passwordCharacters += lowercaseChar;
      }else if(checkbox.id === "lowercase" && !checkbox.checked){
        passwordCharacters = passwordCharacters.replace(lowercaseChar, '')
      }

      if (checkbox.id === "numbers" && checkbox.checked) {
        passwordCharacters += numbers;
      }else if(checkbox.id === "numbers" && !checkbox.checked){
        passwordCharacters = passwordCharacters.replace(numbers, '')
      }

      if (checkbox.id === "symbol" && checkbox.checked) {
        passwordCharacters += symbol;
      }else if(checkbox.id === "symbol" && !checkbox.checked){
        passwordCharacters = passwordCharacters.replace(symbol, '')
      }
      
    });

  });


generatePasswordBtn.addEventListener("click", function () {
  console.log(passwordCharacters);
  let charRange = charRangeInput.value;
  let password = "";

  

  // loop upto range to get password
  for (let i = 1; i <= charRange; i++) {
    let randomNum = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters[randomNum];
  }

  console.log(password);
  passwordElem.innerText = password;
});
