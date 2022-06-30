
console.log("welcome to speak");
let para = document.getElementsByTagName('p');
console.log(para.length);
for(let i = 0; i < para.length; i ++){
    let utterance = new SpeechSynthesisUtterance(para[i].innerHTML);
    
    setTimeout(speechSynthesis.speak(utterance), 5000);
}