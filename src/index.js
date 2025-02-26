const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = "";
  for (let index = 0; index < expr.length / 10; index++) {
    if (expr[index * 10] === "*") {
      result = result + " ";
    } else {
      result =
        result +
        MORSE_TABLE[
          expr
            .slice(index * 10, index * 10 + 10)
            .replace(/10/g, ".")
            .replace(/11/g, "-")
            .replace(/0/g, "")
        ];
    }
  }
  return result;
}

module.exports = {
  decode,
};
