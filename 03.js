document.getElementById("valider").addEventListener("click",(event)=>{
    event.preventDefault;
    let message=document.getElementById("validation");
    let name=document.getElementById("name").value;
    name=name.trim();
    let email=document.getElementById("email").value;
    email=email.trim();
    if(email==="" || name===""){
        message.textContent="Veuillez remplir les deux champs!";
        message.style.color="red";
    }else{
        message.textContent="Formulaire validé!";
        message.style.color="green";
    }

})