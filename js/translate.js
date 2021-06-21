const morse = {
    a: ".-\u00A0",
    b: "-...\u00A0",
    c: "-.-.\u00A0",
    d: "-..\u00A0",
    e: ".\u00A0",
    f: "..-.\u00A0",
    g: "--.\u00A0",
    h: "....\u00A0",
    i: "..\u00A0",
    j: ".---\u00A0",
    k: "-.-\u00A0",
    l: ".-..\u00A0",
    m: "--\u00A0",
    n: "-.\u00A0",
    o: "---\u00A0",
    p: ".--.\u00A0",
    q: "--.-\u00A0",
    r: ".-.\u00A0",
    s: "...\u00A0",
    t: "-\u00A0",
    u: "..-\u00A0",
    v: "...-\u00A0",
    w: ".--\u00A0",
    x: "-..-\u00A0",
    y: "-.--\u00A0",
    z: "--..\u00A0",
    1: ".----\u00A0",
    2: "..---\u00A0",
    3: "...--\u00A0",
    4: "....-\u00A0",
    5: ".....\u00A0",
    6: "-....\u00A0",
    7: "--...\u00A0",
    8: "---..\u00A0",
    9: "----.\u00A0",
    0: "-----\u00A0",
    " ": "\u00A0\u00A0\u00A0",
};

const getMorseValue = (key) => {
    return morse[key];
};

export const toMorse = (inputStr) => {
    return inputStr
        .toLowerCase()
        .split("")
        .reduce((acc, char) => {
            acc.push(getMorseValue(char));
            return acc;
        }, [])
        .join("");
};

const getEnglishKey = (value) => {
    value += "\u00A0";
    return Object.keys(morse).find((key) => morse[key] === value);
};

export const toEnglish = (words) => {
    const split = words.split("\u00A0\u00A0\u00A0\u00A0");
    return split.map((word) => toEnglishLetters(word)).join(" ");
};

const toEnglishLetters = (inputStr) => {
    let split = inputStr.split("\u00A0").reduce((acc, char) => {
        acc.push(getEnglishKey(char));
        return acc;
    }, []);
    let filterUndefined = split.filter((char) => char !== undefined);
    return filterUndefined.join("");
};
