


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!$%&@?()-_+-*/";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return `(password length must be at least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(select at least 1 set of characters)`;
    }

}

const passwordLength = 16;
const includeLowercase = false;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = false;


const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);