let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara= document.querySelector(".userScoreReal")
const compScorePara= document.querySelector(".compScoreReal")
const genComputerChoice = ()=>{
    const options=["rock","paper","scissors"];
    const randIx = Math.floor(Math.random() * 3);
    return options[randIx];
}

const drawGame= ()=>{
    console.log("game was a draw");
    msg.innerText="Draw!"
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin, choiceId, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You win!")
        msg.innerText=`You Win! ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }
    else{
        console.log("You Lose!")
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats ${choiceId}`;
        msg.style.backgroundColor="red";
    }
}
const playGame= (choiceId)=>{
console.log("user choice= ", choiceId);
const compChoice=genComputerChoice();
console.log("comp choice =",compChoice);
if(choiceId == compChoice){
   drawGame();
} else{
let userWin= true;
if(choiceId == "rock"){
    userWin= compChoice=="paper"?false:true;
}
else if(choiceId=="paper"){
    userWin= compChoice=="scissors"?false:true;
}else{
    userWin= compChoice=="rock"?false:true;
}
showWinner(userWin, choiceId, compChoice);
}
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log(choiceId)
        // console.log("choices was clicked", choiceId);
playGame(choiceId);
    })
})