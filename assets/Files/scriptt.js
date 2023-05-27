const passwordBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%-*/\?";

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.lenght)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.lenght)];
    password += number[Math.floor(Math.random() * number.lenght)];
    password += symbol[Math.floor(Math.random() * symbol.lenght)];
}