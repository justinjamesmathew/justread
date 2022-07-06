
console.log("welcome to speak");
let para = document.getElementsByTagName('p');
console.log(para.length);
if (para.length > 1)
    for(let i = 0; i < 2; i ++){
        let utterance = new SpeechSynthesisUtterance(para[i].innerHTML);
        speechSynthesis.speak(utterance);
        }