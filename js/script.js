//getting keys to moke to the next container
const startBtn = document.querySelector(".startbtn");
const instructions = document.querySelector(".instructions")
const exitButton = document.querySelector(".extitbtn");
const continueBtn = document.querySelector(".continue");
const firstQue =document.querySelector(".quiz1");
// when the start button is clicked move to the instruction page

startBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    instructions.classList.add("show"); // instructions show up 
})

//clicking the exit button takes to land page


exitButton.addEventListener("click", (e)=>{

    e.preventDefault();
    instructions.classList.remove("show");

});



//if continue button is clicked takes one to the quiz
continueBtn.addEventListener("click", (e)=>{

    e.preventDefault();
    firstQue.classList.add("show");
})










/*
let score = 0;// initialize score to zero



const quiz = document.getElementById("form1");
const result = document.getElementById("result");//displays results

let startQuiz = quiz.addEventListener("submit" , (e) =>{  
  
e.preventDefault();//prevent refresh of the page everytime the submit btn is clicked
;


let answer = document.quiz.question1.value;// geting the value of each correct answer
let answer2= document.quiz.question2.value;
let answer3= document.quiz.question3.value;
let answer4 = document.quiz.question4.value;


if(answer == "C"){ score ++};

if(answer2 == "A"){ score ++};
if(answer3 == "B"){ score ++};
if(answer4 == "D"){score++};

quiz.style.display ="none"; // to display the score set form display to none

total();
});


function total(){

    if (score< 2){
        result.textContent="Your score  is:  " + score  +" " + "try bit harder nexttime";
    }else{
        result.textContent=  "Your score is:  " + score + " "+ "congratulation";
    } ;

  
};

*/