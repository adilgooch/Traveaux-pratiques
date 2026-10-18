const emailCheck=document.getElementById("email-check");
const emailBtn=document.getElementById("btn-email");
let emailMessage=document.getElementById("message");
function checking(email){
    if(email.includes("@") && email.includes(".")){
        let coma=email.slice(-2,email.length);
        let index=email.lastIndexOf("@");
        let contains=email.slice(0,index).includes("@") || email.includes(" ");
        let comaIndex=email.lastIndexOf(".");
        let checkValid=(index>comaIndex) || coma.includes(".") || email[0]==="@" || contains ;
        if(!checkValid ){
            let parameter=email.slice(index,comaIndex);
            console.log(parameter);
            if(parameter.length<2 || parameter.slice((parameter.length)-2,parameter.length).includes(".")|| email.slice(0,comaIndex).includes("..") || email[index+1]==="."|| email[index-1]==="." ){
                emailMessage.textContent="'"+email+"' is not a valid email.Please enter a valid email.";
                return;
            }else{
                emailMessage.textContent="'"+email+"' is a valid email.";
            }
        }
        else{
            emailMessage.textContent="'"+email+"' is not valid email. Please enter a valid email.";
            return;
        }
    }else
        {
            emailMessage.textContent="'"+email+"' is not a valid email.Please enter a valid email.";
            return;
        }

}

emailBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let emailChecks=emailCheck.value.trim();
    checking(emailChecks);
})