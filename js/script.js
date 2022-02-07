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


let score = 0;// initialize score to 


//the correct answers

 let correctAnswers = {
    question1: "script",
    question2: "scriptitng language",
    question2: "1995",
    question4: "stands for Structured Query Language",
    question5: "CSS"

 }
 

// when the start buttonlet score = 0;// initialize score to 0 is clicked move to the instruction page

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
   
    fifthQue.classList.add("show2");


} )
btnQue5.addEventListener("click", (e)=>{
        e.preventDefault();
        scorePage.classList.add("scoreShow");




total();
});
//function carrying correct answers
 
 








function total(){
    if (score<=2){
       
        result.innerText = "your score is" + score;
       console.log(result);
    }
        

  
};

