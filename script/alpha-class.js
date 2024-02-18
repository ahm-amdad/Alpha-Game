/* function play(){
    const homeScreen = document.getElementById('home')
    //console.log(homeScreen.classList)
    homeScreen.classList.add('hidden');

    // show play-ground 
    const playGround = document.getElementById('play-ground')
    playGround.classList.remove('hidden');
} */

/* function handleKeyboardButtonPress(){
    console.log('button press')
}
document.addEventListener('keyup', handleKeyboardButtonPress)
 */

function handlekeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    //console.log('player pressed' ,event.key)

    //get the expexted to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    //console.log(playerPressed, expectedAlphabet);

    // check match or not
    if(playerPressed === expectedAlphabet){
        console.log("you got a point");

        const currentScore = getTextElementValueById('current-score')
        // console.log(currentScore)
        const updatedScore = currentScore + 1;
        setElementValueById('current-score', updatedScore);

        

        //------------------------------------
        //update score:
        //1.get ght current score
        //const currentScoreElement = document.getElementById('current-score');
        //const currentScoreText = currentScoreElement.innerText;
        //const currentScore = parseInt(currentScoreText);
        //console.log('score',currentScoreText);
       
        //2.increase the score by 1
        const newScore = currentScore + 1;

        //3.show the update score
        //currentScoreElement.innerText = newScore;

        //console.log('u press expected alphabet', expectedAlphabet);
         //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else{
        console.log("you loss life")

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setElementValueById('current-life', updatedLife)

        //----------------------------
        //step 1 get the current life number
        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        //step-2 reduc the life count 
        //const newLife = currentLife - 1;

        //step-3 display the updated life count
        //currentLifeElement.innerText = newLife;
        if(updatedLife=== 0)
        {
            gameOver();
        }
    }


}
document.addEventListener('keyup', handlekeyboardKeyUpEvent)

function continueGame(){
    //step-1 :generate random number
   const alphabet = getARandomAlphabet();
   console.log('your random alphabet :',alphabet)
    
   const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText = alphabet;

        //setBackgrount color 
        setBackgroundColorById(alphabet)
}

function play(){
    hideElementById('home')
    hideElementById('final-score');
    showElementById('play-ground')

    //reset score and life
    setElementValueById('current-life',5);
    setElementValueById('current-score',0);

    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score')
    //get the final score
    const lastScore = getElementTextById('current-score');
    setElementValueById('last-score',lastScore);

    //clear the last selected alphabet highlited
    const currentAlphabet = getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);


}