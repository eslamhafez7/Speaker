let text = document.querySelector("textarea");
let button = document.querySelector("input");

button.addEventListener('click', () => {
    let utterance = new
    SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(utterance);
});