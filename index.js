let password= ""
let charset = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]
let specialCharacters = ["?","!","&","€","#","%","@","/","^","£"]
let generatePass = document.getElementById("generatePass")
let generateBtn = document.getElementById("generateBtn")
let specialBtn = document.getElementById("specialBtn")

function generatedRandomPassword(){
    password = "";
    generatePass.value = "";

    for (let i = 0; i < 12; i++) {
        let randomCharset = Math.floor(Math.random() *charset.length)
        password += charset [randomCharset]
    }
        generatePass.value = password
}
generateBtn.addEventListener("click", generatedRandomPassword)



function generatedSpecialPassword() {
    password = "";
    generatePass.value = "";

    for (let i = 0; i < 6; i++) {
        let randomSpecialCharacters = Math.floor(Math.random() * specialCharacters.length);
        password += specialCharacters[randomSpecialCharacters];
    }

    generatePass.value = password ;
}

function generatedCombinedPassword() {
    password = "";
    generatePass.value = "";

    let combinedCharset = charset.concat(specialCharacters);

    for (let i = 0; i < 12; i++) {
        let randomIndex= Math.floor(Math.random() * combinedCharset.length);
        password += combinedCharset[randomIndex];
    }

    generatePass.value = password;
}

specialBtn.addEventListener("click", generatedCombinedPassword)


function copyPassword() {
    let copy = document.getElementById("generatePass")
    copy.select()
    navigator.clipboard.writeText(copy.value)
    alert("Copied the text: " + copy.value)
  }