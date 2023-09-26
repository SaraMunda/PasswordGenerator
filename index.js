let password= ""
let charset = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]
let generatedPass = document.getElementById("generatedPass")
let generateBtn = document.getElementById("generateBtn")

function generatedRandomPassword(){
    password = "";
    generatePass.value = "";

    for (let i = 0; i < 12; i++) {
        let randomCharset = Math.floor(Math.random() *charset.length)
        password += charset [randomCharset]
    }
        generatePass.textContent = password
}
generateBtn.addEventListener("click", generatedRandomPassword);