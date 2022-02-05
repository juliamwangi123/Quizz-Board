
let score = 0;

const quiz = document.getElementById("form1");

var result = document.getElementById("result");
quiz.addEventListener("submit" , (e) =>{
e.preventDefault();//prevent refresh of the page everytime the submit btn is clicked
var answer = document.quiz.question1.value
if(answer == "scripting language"){
    score ++;
    
}
result.textContent= score;
});