const morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    " ": "  ",
};

const getMorseValue = (key) => {
    return morse[key];
};

export const toMorse = (inputStr) => {
    const morseArr = inputStr
        .toLowerCase()
        .split("")
        .map((char) => getMorseValue(char) + " ");
    if (morseArr.includes("undefined ")) {
        return "Contains undefined characters";
    }
    return morseArr.join("");
};

const getEnglishKey = (value) => {
    return Object.keys(morse).find((key) => morse[key] === value);
};

export const toEnglish = (words) => {
    return words
        .split("    ")
        .map((word) => toEnglishLetters(word))
        .join(" ");
};

const toEnglishLetters = (inputStr) => {
    const letters = inputStr.split(" ").map((char) => getEnglishKey(char));
    if (letters.includes(undefined)) {
        return "Contains undefined characters";
    }
    return letters.join("");
};
