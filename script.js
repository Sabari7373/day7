// Get all the countries from the Asia continent /region using the Filter function.

let a=new XMLHttpRequest();
a.open("GET","https://restcountries.com/v3.1/all");
a.send();
a.onload=function(){
    let res=JSON.parse(a.response);
    let res1=res.filter((ele)=>ele.region==="Asia");
    let res2=res1.map((ele)=>ele.name.common);
       console.log(res2);
    
}


// Get all the countries with a population of less than 2 lakhs using Filter function

let b=new XMLHttpRequest();
b.open("GET","https://restcountries.com/v3.1/all");
b.send();
b.onload=function(){
    let rc=JSON.parse(b.response);
    let pop=rc.filter((ele)=>ele.population<200000);
    let popn=pop.map((ele)=>ele.name.common);
       console.log(popn);
    
}



// Print the following details name, capital, flag using forEach function

let c=new XMLHttpRequest();
c.open("GET","https://restcountries.com/v3.1/all");
c.send();
c.onload=function(){
    let resc=JSON.parse(c.response);
        for(var i=0;i<resc.length;i++){
    console.log("name : "+resc[i].name.common,", capital : "+resc[i].capital,", flag : "+resc[i].flags.png);
        
    }
}


        
// Print the total population of countries using reduce function
     
let d=new XMLHttpRequest();
d.open("GET","https://restcountries.com/v3.1/all");
d.send();
d.onload=function(){
    let papu=JSON.parse(d.response);
    let totalpapu=papu.reduce((acc,cv)=>acc+cv.population,0);
    console.log(totalpapu);
}



// Print the country which uses US Dollars as currency.

let e=new XMLHttpRequest();
e.open("GET","https://restcountries.com/v3.1/all");
e.send();
e.onload=function(){
    let curr=JSON.parse(e.response);
    let doll=curr.filter((ele)=>ele.currencies="USD");
    let dolcu=doll.map((ele)=>ele.name.common);
    console.log(dolcu);
}
    