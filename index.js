// Variables
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let str = 'github';
let strArr = str.toLowerCase().split('');
let pinCode = [];
let letterArr = [];
let letterPosArr = [];


// Helper Function
function convertToOneDigit(num, pinCode) {
    let numArr = num.toString().split('');
    num = 0;

    numArr.forEach(function (n) {
        num += parseInt(n, 10);
    });
    if (num >= 10) {
        convertToOneDigit(num, pinCode);
    } else {
        pinCode.push(num);
    }
}

// Loop over letters
strArr.forEach(function (letter) {
    // lia = index in alphabet
    let lia = alphabet.indexOf(letter) + 1;
    lia = lia === 0 ? parseInt(letter, 10) : lia;

    letterPosArr.push(lia);
    letterArr.push(letter);

    if (lia >= 10) {
        convertToOneDigit(lia, pinCode);
    } else {
        pinCode.push(lia);
    }
});

console.info('Pincode               :', ...pinCode);
console.info('Letters               :', ...letterArr);
console.info('=====================================');
console.info('Positions in alphabet :', ...letterPosArr);