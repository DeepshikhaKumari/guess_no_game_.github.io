

const ques = document.querySelector('.quesmark').textContent;
// const message = document.querySelector('.message').textContent= "🎉 Correct Answer! ";
// console.log(message);
// const ques = document.querySelector('.quesmark').innerHTML= "23";
// document.querySelector('.score').textContent=10;



const inputVal = document.querySelector('.numvalue').value;


let score = 20;
let highscore = 0;

let secretnumber = Math.trunc(Math.random()*20+1);

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener ('click', function(){
    const inputVal =Number( document.querySelector('.numvalue').value);
    // console.log(inputVal, typeof inputVal);

    // When no input
    if(!inputVal){
          displayMessage("⛔ No Number!");
    }

    // when correct value
    else if(inputVal === secretnumber){
        displayMessage("🎉 Correct Answer!");
        document.querySelector('.quesmark').textContent= secretnumber;
        document.querySelector('body').style.background="green";
        document.querySelector('.quesmark').style.width= '200px';

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent= highscore;
        }
    }

    // When guess no. is wrong
    else if(inputVal !== secretnumber){
        if(score>1){
            displayMessage(inputVal > secretnumber ? "📈 Too High!" : "📉 Too Low!");
            score--;
            document.querySelector('.score').textContent= score;
        }
        else{
            displayMessage("😓You Lost the Game!");
            alert("Start a New game!")
        } 
    }
})

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.score').textContent= score;
    secretnumber = Math.trunc(Math.random()*20+1);
    displayMessage("Start Guessing...");
    document.querySelector('.quesmark').textContent= "?";
    document.querySelector('body').style.background="#222";
    document.querySelector('.quesmark').style.width= '120px';
    document.querySelector('.numvalue').value= '';
})