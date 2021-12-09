
// Initializing Variable
const display = document.querySelector(".display");
const img = document.querySelector(".crying-image");
const winSound = new Audio("assets/Namba Jeichitom Maara.mp3");
const Answer = document.querySelector(".show-answer");


// Random Value
const randomValue = Math.floor(Math.random() * (100 - 1 +1) + 1);
    
//On Button Click Function
let submit = ()=>{
    const img = document.querySelector(".crying-image");
    //Guess Value
    const guessValue = document.querySelector(".guess-value").value;
    //While loop
while(guessValue != randomValue)
 {
   if(guessValue < randomValue)
   {
        display.innerHTML = `${guessValue} is very low Machi...Guess Again`;  
        return;      
   }
   else
   {
    display.innerHTML = `${guessValue} is very High Machi...Guess Again`;   
    return;
   }
 }
   display.innerHTML = "Nee jeichita Machi!"
   img.src="assets/crying in joy.png"
   winSound.play();
}

let showAnswer = ()=>{
    if (Answer.innerHTML == "Show Answer")
    {
        Answer.innerHTML = randomValue + " is Answer Machi"
    }
    else
    {
        Answer.innerHTML = "Show Answer";
    }
}
