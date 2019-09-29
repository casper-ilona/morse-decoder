const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
const SPACE = '**********';
const ENCODED_POINT = '10';
const ENCODED_DEFIS = '11';
const LETTER_LENGTH = 10;

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i += LETTER_LENGTH) {
        const encodedLetter = expr.substr(i, LETTER_LENGTH);
        let symbol = '';
        if (encodedLetter === SPACE) {
            symbol = ' ';
        } else {
            let decodedLetter = '';
            for (let j = 0; j < encodedLetter.length; j += 2) {
                const encodedSymbol = encodedLetter.substr(j, 2);
                if (encodedSymbol === ENCODED_POINT) {
                    decodedLetter += '.';
                } else if (encodedSymbol === ENCODED_DEFIS) {
                    decodedLetter += '-';
                }
            }
            symbol = MORSE_TABLE[decodedLetter];
        }
        result += symbol;
    }
    return result;
}

module.exports = {
    decode
};
