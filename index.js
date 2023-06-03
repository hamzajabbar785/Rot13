// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in 
// the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or 
// special characters included in the string, they should be returned as they are. Only letters from the 
// latin/english alphabet should be shifted, like in the original Rot13 "implementation".

const rot13 = (msg) => {
    return msg.split("").map((letter) => {
        if(letter.match(/[a-z]/gi)){
            code = letter.charCodeAt() + (letter.toLowerCase() < "n" ? 13 : -13)
            return String.fromCharCode(code)
        }else{
            return letter
        }
    }).join("")
}

rot13("test")

//Solution 2

const rot13 = (msg) => {
    const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"

    return msg.split("").map((letter) => {
        if(letter.match(/[a-z]/gi)){
            let index = input.indexOf(letter)
            return output[index]
        }else{
            return letter
        }
    }).join("")
}

rot13("test")