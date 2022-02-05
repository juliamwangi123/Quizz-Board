

let score = 0;


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

if (answer4 == "A"  && answer4 == "D"){ console.log('het');};

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

