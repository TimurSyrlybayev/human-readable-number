module.exports = function toReadable (number) {
    let singleDigits = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    let tens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    if (number.toString().length === 1) {
        return singleDigits[number];
    } else if (number.toString().length === 2 && (number < 20 || number % 10 === 0)) {
        return `${tens[number]}`;
    } else if (number.toString().length === 2 && number >= 20 && number % 10 !== 0) {
        return `${tens[Number(number.toString()[0] + 0)]} ${singleDigits[Number(number.toString()[1])]}`;
    } else if (number.toString().length === 3 && number.toString()[1] + number.toString()[2] === '00') {
        return `${singleDigits[Number(number.toString()[0])]} hundred`;
    } else if (number.toString().length === 3 && Number(number.toString()[1]) !== 0 && Number(number.toString()[2]) === 0) {
        return `${singleDigits[Number(number.toString()[0])]} hundred ${tens[Number(number.toString()[1] + 0)]}`;
    } else if (number.toString().length === 3 && Number(number.toString()[1]) === 0 && Number(number.toString()[2]) !== 0 && (Number(number.toString()[1] + number.toString()[2]) < 10)) {
        return `${singleDigits[Number(number.toString()[0])]} hundred ${singleDigits[Number(number.toString()[2])]}`;
    } else if (number.toString().length === 3 && Number(number.toString()[1]) !== 0 && Number(number.toString()[2]) !== 0 && (Number(number.toString()[1] + number.toString()[2]) < 20)) {
        return `${singleDigits[Number(number.toString()[0])]} hundred ${tens[Number(number.toString()[1] + number.toString()[2])]}`;
    } else if (number.toString().length === 3 && Number(number.toString()[1]) !== 0 && Number(number.toString()[2]) !== 0 && Number(number.toString()[1] + number.toString()[2]) >= 20 && number % 10 !== 0) {
        return `${singleDigits[Number(number.toString()[0])]} hundred ${tens[Number(number.toString()[1] + 0)]} ${singleDigits[Number(number.toString()[2])]}`;
    }
}
