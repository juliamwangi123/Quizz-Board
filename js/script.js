//getting keys to moke to the next container
const startBtn = document.querySelector(".startbtn");//start btn
const instructions = document.querySelector(".instructions")//instruction page
const exitButton = document.querySelector(".extitbtn");//exit button
const continueBtn = document.querySelector(".continue");//conntiu button
const firstQue =document.querySelector(".quiz1");//firt question
const nextQue1Btn = document.querySelector(".buttonsNext1")//next button on question 1
const secondQue =document.querySelector(".quiz2");// question 2
const btnQue2 =document.querySelector(".buttonsNext2");
const thirdQue =document.querySelector(".quiz3");
const btnQue3 =document.querySelector(".buttonsNext3");
const fourthQue =document.querySelector(".quiz4");
const btnQue4 =document.querySelector(".buttonsNext4");
const fifthQue =document.querySelector(".quiz5");
const scorePage = document.querySelector(".scores");
const btnQue5=document.querySelector(".buttonsNext5");


// correct answers
let correctAnswers = {
    question1: "script",
    question2: "scriptitng language",
    question2: "1995",
    question4: "stands for Structured Query Language",
    question5: "CSS"

 }

let userForm = document.getElementById("form1"); // getting the form 
var score = 0;// initialize score to 
let results = document.querySelector("#result");

//oclcik on start button

startBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    instructions.classList.add("show"); // instructions show up 
})

//clicking the exit button takes to land page


exitButton.addEventListener("click", (e)=>{

    e.preventDefault();
    instructions.classList.remove("show");
    let results = document.querySelector("#result");

});


//if continue button is clicked takes one to the quiz
continueBtn.addEventListener("click", (e)=>{

    e.preventDefault();
    firstQue.classList.add("show2");
   

   

})

//next button on question 1 takes you to questin 2

nextQue1Btn.addEventListener("click", (e)=>{

    e.preventDefault();
   
    secondQue.classList.add("active");
   
   

})
btnQue2.addEventListener("click", (e)=>{
    e.preventDefault();
   
    thirdQue.classList.add("pop");
   




    
} )


btnQue3.addEventListener("click", (e)=>{
    e.preventDefault();
   
    fourthQue.classList.add("active2");
  




} )

btnQue4.addEventListener("click", (e)=>{
    e.preventDefault();
   
    fifthQue.classList.add("show2");let results = document.querySelector("#result");



} )



btnQue5.addEventListener("click", (e)=>{
        e.preventDefault();
        scorePage.classList.add("scoreShow");

        var usersInfo = new FormData(userForm); //creating a new object and with the users data



        




        

      
 checkAnswers(usersInfo);
})



function checkAnswers(usersInfo){


    let failedQue = {};

    for(let i of usersInfo){
       
        if(i[1] === correctAnswers[i[0]] ){
                score += 20;
               
        
            }else{
            
             //   failedQue[i[0]] = correctAnswers[i[0]];
            }

    }
    

   
  //  document.getElementById('failed').innerHTML = failedQue;

    if (score < 80){
        return results.innerHTML = 'your score:  ' + score  + ' Failed'
           scorePage.style.color = "red"

    }else{
        return results.innerHTML = 'your score: ' + score  + ' Congratulation'

    }

    

}








  


 
 










