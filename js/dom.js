import { toEnglish, toMorse } from "./translate.js";

const translateBox = document.getElementById("translateBox");
const outputBox = document.getElementById("outputBox");
const translateButton = document.getElementById("translateButton");
const toValue = document.getElementById("toValue");

const runTranslation = () => {
    toValue.value === "toMorse"
        ? (outputBox.value = toMorse(translateBox.value.trim()))
        : (outputBox.value = toEnglish(translateBox.value.trim()));
};

translateButton.addEventListener("click", runTranslation);
