'use strict';

let score=20;
let secretNumber=Math.trunc(Math.random()*25)+1;
let highscore=0;

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function(){
   
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    
    //no input is given
    if(!guess){ 
        displayMessage("⛔ Enter a number😡"); 
        document.querySelector('body').style.backgroundColor='#ff0000';
    }

    //when input is crt
    else if(guess===secretNumber){
        displayMessage("🎉Correct!");
         document.querySelector('.number').textContent=secretNumber;
         document.querySelector('.message').style.color='#ffffff';
         document.querySelector('body').style.backgroundColor='#60b347';
         document.querySelector('.number').style.width='30rem';
         document.querySelector('.message').style.color="black";
         if(score>highscore){
             highscore=score;
           document.querySelector('.highscore').textContent=score;
         }
    }   
     //when input is false
     else if(guess!==secretNumber){
        if(score>1){
            displayMessage(guess<secretNumber ?"📉Low👎":"📈High😞");
            score--;
            document.querySelector('.score').textContent=score;
            document.querySelector('.message').style.color='#ff0000';
          }
          else{ 
              displayMessage("💥You Lost");
              document.querySelector('.score').textContent=0;
              document.querySelector('.message').style.color="black";
              document.querySelector('body').style.backgroundColor='	#ff0000';
          }
     }
});

document.querySelector('.again').addEventListener('click',function(){   
    score=20;
    secretNumber=Math.trunc(Math.random()*25)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='gray';
    document.querySelector('.number').style.width='15rem';
    displayMessage("Start guessing...");
    document.querySelector('.guess').value='0';
    document.querySelector('.message').style.color="black";
    document.querySelector('.number').textContent='?';
});