let listNumbers=[1200,5,2,98,12];
function trier(numbers){
    numbers=numbers.sort((a,b)=>a-b);
    console.log("list sorted ascending:  "+numbers );
    numbers=numbers.sort((a,b)=>b-a);
    console.log("list sorted descending:   "+numbers );
    numbers=numbers.sort((a,b)=>(a%2)-(b%2));
    console.log("list sorted evens first and then odds:  "+numbers );
    numbers=numbers.sort((a,b)=> Math.abs(a-100)-Math.abs(b-100));
    console.log("list sorted number closest to 100 :  "+numbers );
}
trier(listNumbers);
