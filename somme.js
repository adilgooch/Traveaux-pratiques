
let sSum;
let mSum;
let hSum;
function secondes(s1,s2,s3){
    sSum=s1+s2+s3;
    return (sSum % 60);
}
function secondesR(s1,s2,s3){
    sSum=s1+s2+s3;
    return Math.floor(sSum/60);
}
function minutes(m1,m2,m3,remainder){
    mSum=m1+m2+m3+remainder;
    return (mSum % 60);
}
function minutesR(m1,m2,m3,remainder){
    mSum=m1+m2+m3+remainder;
    return Math.floor(mSum/60);
}
function heurs(h1,h2,h3,remainderm){
    hSum=h1+h2+h3+remainderm;
    return (hSum%24);
}
function heursR(h1,h2,h3,remainderm){
    hSum=h1+h2+h3+remainderm;
    return Math.floor(hSum/24);
}
document.getElementById("btn-calculate").addEventListener("click",()=>{
    let seconde1=document.getElementById("seconde1");
    seconde1=Number(seconde1.value);
    let seconde2=document.getElementById("seconde2");
    seconde2=Number(seconde2.value);
    let seconde3=document.getElementById("seconde3");
    seconde3=Number(seconde3.value);
    let minute1=document.getElementById("minute1");
    minute1=Number(minute1.value);
    let minute2=document.getElementById("minute2");
    minute2=Number(minute2.value);
    let minute3=document.getElementById("minute3");
    minute3=Number(minute3.value);
    let heur1=document.getElementById("heur1");
    heur1=Number(heur1.value);
    let heur2=document.getElementById("heur2");
    heur2=Number(heur2.value);
    let heur3=document.getElementById("heur3");
    heur3=Number(heur3.value);
    let heur=document.getElementById("heur");
    let minute=document.getElementById("minute");
    let seconde=document.getElementById("seconde");
    let jour=document.getElementById("jour");
    seconde.value=secondes(seconde1,seconde2,seconde3);
    minute.value=minutes(minute1,minute2,minute3,secondesR(seconde1,seconde2,seconde3));
    heur.value=heurs(heur1,heur2,heur3,minutesR(minute1,minute2,minute3,secondesR(seconde1,seconde2,seconde3)));
    jour.value=heursR(heur1,heur2,heur3,minutesR(minute1,minute2,minute3,secondesR(seconde1,seconde2,seconde3)));



})
