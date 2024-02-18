function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}

function showElementById(elementId){
    const playElement = document.getElementById(elementId);
    playElement.classList.remove('hidden');
}

function getARandomAlphabet(){
    // create an alphabet array
    //const alphabet = ['a','b','c', 'd'];
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    //console.log(alphabets)
   
    // generate random number 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    //console.log(index,alphabet);
    return alphabet;

}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    //console.log(element);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    //console.log(element);
    element.classList.remove('bg-orange-400');
}



function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText)
    return value;
}

function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;

}
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return  text;
}
