

 let isBlue=true;

document.getElementById("btn-color").addEventListener("click",(event)=>{
    event.preventDefault();
    let clrIndice=document.getElementById("couleurIndice");
    let divColor=document.getElementById("monDiv");
    const pText=document.getElementsByName("text")[0];// l'autre notation autre que ById.
    if(isBlue){
        clrIndice.textContent="couleur:";
        divColor.style.backgroundColor = "#91AAFF";
        pText.style.color= "#101A31";
        clrIndice.textContent=clrIndice.textContent+" bleu doux.";
        clrIndice.style.color="#91AAFF";
        isBlue=false;

    }else{
        clrIndice.textContent="couleur:";
        divColor.style.backgroundColor = "#8EE1B2";
        pText.style.color= "#315FDA";
        clrIndice.textContent=clrIndice.textContent+" vert doux.";
        clrIndice.style.color="#8EE1B2";
        isBlue=true;

    }
})