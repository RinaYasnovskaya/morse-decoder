const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    
    let result = [];
    let letter = '', final_letter = '';
    let final_res = '';

    for( let i = 0; i < expr.length; i+=10){
        letter = expr.slice(i, i+10);
        final_letter = letter.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-');

        if(letter == "**********") result.push(" ");
        result.push(MORSE_TABLE[final_letter]);
        
      }
      final_res = result.join("");
      
    return final_res;
}

module.exports = {
    decode
}