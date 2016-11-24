'use strict';

var _console, _console2, _console3;

// Variables
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var str = 'github';
var strArr = str.toLowerCase().split('');
var pinCode = [];
var letterArr = [];
var letterPosArr = [];

// Helper Function
function convertToOneDigit(num, pinCode) {
    var numArr = num.toString().split('');
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
    var lia = alphabet.indexOf(letter) + 1;
    lia = lia === 0 ? parseInt(letter, 10) : lia;

    letterPosArr.push(lia);
    letterArr.push(letter);

    if (lia >= 10) {
        convertToOneDigit(lia, pinCode);
    } else {
        pinCode.push(lia);
    }
});

(_console = console).info.apply(_console, ['Pincode               :'].concat(pinCode));
(_console2 = console).info.apply(_console2, ['Letters               :'].concat(letterArr));
console.info('=====================================');
(_console3 = console).info.apply(_console3, ['Positions in alphabet :'].concat(letterPosArr));
