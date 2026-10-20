let isHidden=false;
document.getElementById("btn-masque").addEventListener("click",(event)=>{
    event.preventDefault();
    let pText=document.getElementById("text");
    let clrIndice=document.getElementById("couleurIndice");
    if(!isHidden){
        clrIndice.textContent="L'etat: ";
        pText.hidden=true;
        clrIndice.textContent=clrIndice.textContent+" masquer.";
        document.getElementById("btn-masque").textContent="Afficher";
        isHidden=true;

    }else{
        clrIndice.textContent="L'etat: ";
        pText.hidden=false;
        clrIndice.textContent=clrIndice.textContent+" affiche.";
        document.getElementById("btn-masque").textContent="Masquer";
        isHidden=false;
    }
})