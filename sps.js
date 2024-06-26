let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
     msg.innerHTML= "Game was Draw. Play again.";
};

const showWinner = (userWin, userChoice,compChoice) =>{
    if (userWin){
        userScore++;
        userScorepara.innerHTML=userScore;
        msg.innerHTML=`You Win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else{
        compScore++;
        compScorepara.innerHTML=compScore;
        msg.innerHTML=`You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) =>  {
     console.log("user Choice = ", userChoice);
     const compChoice = genCompChice();
     console.log("comp Choice =", compChoice); 

if (userChoice === compChoice){

     drawGame();
} else{
    let userWin = true;
    if (userChoice ==="rock"){
        //scissors, paper
        userWin = compChoice ==="paper " ? false : true;
    } else if (userChoice === "paper"){
        //rock,scissors
        userWin = compChoice ==="scissors" ? false : true;
    } else {
        //rock, paper
        userWin= compChoice ==="rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()  =>{
     const userChoice = choice.getAttribute("id");
        playGame(userChoice);    
    });
});