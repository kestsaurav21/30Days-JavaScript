
const passwordBox = document.getElementById("password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialSymbol = "@#$%^&_+|{}()[]<>/-="; 

const allCharacter = upperCase + lowerCase + numbers + specialSymbol;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];

    while(length> password.length){
        password += allCharacter[Math.floor(Math.random() * allCharacter.length)];
    }


    passwordBox.value = password;
} 