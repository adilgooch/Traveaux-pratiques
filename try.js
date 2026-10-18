//document.getElementById("name").innerHTML="<label>username</label>";
//document.getElementById("message").innerText="try aging";
/*const button = document.querySelector('#add');
const countAdd =document.querySelector("#count");
const resetButton =document.querySelector("#reset");
let count=0;
button.addEventListener('click', function(){
    count+=1;
    countAdd.textContent=count;
})
resetButton.addEventListener('click', function(){
    count=0;
    countAdd.textContent=count;
})*/
let Q1;
let Q2;
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
const submissionResults = [];
const submittedQuestions = new Set();
const questionResultIds = ["message1", "message2", "message3", "message4", "message5"];
document.getElementById("show").addEventListener("click",()=>{
    document.getElementById("hidden").hidden=false;
    document.getElementById("show").hidden=true;
})
function recordSubmission(questionNumber, resultText) {
    submissionResults[questionNumber - 1] = resultText;
    submittedQuestions.add(questionNumber);

    if (submittedQuestions.size === submissionResults.length) {
        questionResultIds.forEach((id, index) => {
            document.getElementById(id).textContent = submissionResults[index];
        });
    }
}

document.getElementById("btn-submit1").onclick=function(){
    Q1=document.getElementById("Q1").value;
    Q1=Q1.toLowerCase().trim();
    if( Q1!=""){
    if(Q1==='white'){
        score1 = 2;
        recordSubmission(1, 'your answer is correct -"white"');
        
    }
    else{
        score1 = 0;
        recordSubmission(1, 'your answer is wrong, the answer is "white"');
        
    }
    document.getElementById("Q1").value="";}
    else{
        alert("please write the ansewr first");
        
    }
    
}
document.getElementById("btn-submit2").onclick=function(){
    Q2=document.getElementById("Q2").value;
    Q2=Q2.toLowerCase().trim();
    if( Q2!=""){
    if(Q2==='false'){
        score2 = 2;
        recordSubmission(2, 'your answer is correct -"false"');
        

    }
    else{
        score2 = 0;
        recordSubmission(2, 'your answer is wrong, the answer is "false"');
        
    }
    document.getElementById("Q2").value="";
    }

    else{
        alert("please write the ansewr first");
        
    }
}
document.getElementById("btn-sumbit3").addEventListener("click",()=>{
    const correctChoice = document.getElementById("choix3");
    const choseWrongAnswer =
        (document.getElementById("choix1").checked &&
            document.getElementById("choix1").value === "0") ||
        (document.getElementById("choix2").checked &&
            document.getElementById("choix2").value === "0");

    if(correctChoice.checked && correctChoice.value === "1" && !choseWrongAnswer){
        score3 = 4;
        recordSubmission(3, "correct");
    }else{
        score3 = 0;
        recordSubmission(3, "wrong");
    }
})
document.getElementById("btn-sumbit4").addEventListener("click",()=>{
    const correctChoice = document.getElementById("chois1");
    const choseWrongAnswer =
        (document.getElementById("chois2").checked &&
            document.getElementById("chois2").value === "0") ||
        (document.getElementById("chois3").checked &&
            document.getElementById("chois3").value === "0");

    if(correctChoice.checked && correctChoice.value === "1" && !choseWrongAnswer){
        score4 = 6;
        recordSubmission(4, "correct");
    }else{
        score4 = 0;
        recordSubmission(4, "wrong");
    }
})
document.getElementById("btn-sumbit5").addEventListener("click",()=>{
    const choseAllCorrectAnswers =
        document.getElementById("chois5").checked &&
        document.getElementById("chois5").value === "1" &&
        document.getElementById("chois6").checked &&
        document.getElementById("chois6").value === "1" ;
    const choseWrongAnswer = document.getElementById("chois4").checked;

    if(choseAllCorrectAnswers && !choseWrongAnswer){
        score5 = 6;
        recordSubmission(5, "correct");
    }else{
        score5 = 0;
        recordSubmission(5, "wrong");
    }
})
document.getElementById("btn-show-score").addEventListener("click",()=>{
    const totalScore = score1 + score2 + score3 + score4 + score5;
    if(totalScore < 10){
        document.getElementById("final-score").style.color="red";
        document.getElementById("final-score").textContent =
        "Your score: " + totalScore + " / 20";
    }else{
        document.getElementById("final-score").style.color="green";
        document.getElementById("final-score").textContent =
        "Your score: " + totalScore + " / 20";
    }
    
})