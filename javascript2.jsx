//1.  java script console api;
//2.   ways to print in java script ;

//this is single line comment
/*
this is multi line comment*/

//console.log("hello world");
//alert("me");
//document.write("here is document");
//console.log("hello world", 4 + 6, "another log")
//console.warn("this is warning")
//console.error("this is error loacking")

//3.  java script variables;
//containers who store values like a drum,tank, for every oblejct there is different container
//const number1= 32;  //var gloably scope hota hai kahi bhi fir se declare ho skta hai 
  //number1=20;
//console.log(number1);

//4.  data type in java script;
//numbers

//var num1 = 334;
//var num2 = 45.32;
//strings
//var str1 = "this is string";
//var str2 = 'this is also a string';
//objects
//var marks = {
  //  ram: 34,
    //subhu: 45,
    //shonu: 80.566
//} 
//console.log(marks.ram)
//booleans
//var a = true;
//var b = false;
//console.log(a,b);

//var und=undefined;  /*undefined mtlb variable bna hua but usme kuchh rkha nhi hai nut null means usme kuchh rkha nhi jata hai*/

//var und ;
//console.log(und);

//var n = null;
//n=10;
//console.log(n);

/*array= collections of elements elements can be any of datatype type like number string boolean;
javascript me datatype two types ke hote hn primitive and refernce data types
primitive data type =undefined,null, number, string,boolean, symbol;
reference datatype array and objects
*/
//var arr = [1, 2, "string", 4, 5];  // js me array me counting 0 se start hoti hai
//console.log(arr)
//arithmetic operator
/*
var p=100;
var q=10;
console.log("the value of p+q is ", p+q);
console.log("the value of p-q is", p-q);
console.log("the value of p*q is", p*q);
console.log("the value of p/q is", p/q);

//assignment operators
var c=q;
 c+= 2;
c-= 2;
c*= 2;
console.log(c);
*/
//comparision operator
/*
var x=20;
var y=20;
console.log(x===y);
console.log(x>=y);
console.log(x<=y);
*/
//logical operators
//this is and operator
/*
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
*/
//this is or operator
/*
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

//this is logical not 
console.log(!true)
console.log(!false)
*/
//function in java script
//dry=do not repeat your self
/*
function avg(a,b){
  c=(a+b)/2;    
return c;
}
c1=avg(4,6); //yaha function call jo rha hai function ko hmesa hme cll krna prta hai
// other wise vo bss memmory me reh jayegi execute nhi hogi
c2=avg(14,16);
console.log(c1,c2);
*/
/*
function avg1(n){
    for(i=0;i<n;i++)
    {
        c=
        return c;
    }
    c1=avg1(1,3,5,6)
    console.log(c1);
}*/
//if else statement;
/*
var age =4;
if (age>9){
   console.log('you are not a kid');
}
else{
   console.log('you are a kid');
}*/

/* conditional statements  var age =25
if (age>32){
    console.log("you are not a kid")
}
else if(age>26){
    console.log("now you are young")
}
else if (age>22){
    console.log('now you are more than 22')
}
else if(age>18){
    console.log("teen age is over")
}
else 
{
    console.log("tb tum bcche ho")
}
console.log("end of ladder")
*/

//loops

//var arr = [1, 2, 3, 4, 5, 6, 7];
//console.log(arr);
//for(var i=0;i<arr.length;i++){   //intialization,condition,incement
//if(i==2){
   // break;
//continue;    //continue mtlb is itrration ko cancle kr do; or iske baad wale itration ko kro;
//}
  // console.log(arr[i])
//}
/*
arr.forEach(function(element){
    console.log(element)   // for or for each me difference
})

//let j = 0;   //let scope block level scope hota hai function ke ander agr let variable bnate hn to vo function ke bahr khtm ho jata hai
//let se hmlog temprory variable block bna skte hn ye ek achha memmory management block tyar krta hai
//const ac = 0; //const variable agr bnate hn to fir uski value change nhi hoti hai
//const ac;
//let j = 6;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

do{
    console.log(arr[j]);
j++;
}*/
//while(j<arr.length);
/*
let myArr=["fan","cam",32,null,true];
console.log(myArr);
//Array methods
//console.log(myArr.length);
//myArr.pop();  //last ka ek element nikl jayega 
//myArr.push("silu");  //array ke ander vo element in krane ke liye iska use hota hai
//myArr.shift(myArr);  //pehle element hta ke baki sare element array me rhta hai

//console.log(myArr.unshift("shre")); //console.log lgane se array ki length milegi otherwise silu first me show krega;

//console.log(myArr);
let a=myArr.toString()  //array me bahut sare methods hote hn jisme se iska use array ko string me convert krne ke liye kiya jata hai
console.log(typeof a)
*/
//string methods in java scripts

//let mylovelyString ="shreya is noughty girl is is";
//console.log(mylovelyString.length)  //length milta hai is method se
//console.log(mylovelyString.indexOf("r"))  //is trh ki counting me hmesha 0 se counting start hoti hai
//index of by default pehli word ki index hi return krta hai same same word agr hm or jada likh de tb v vo pehle wale ka hi sirf index dega
//console.log(mylovelyString.lastIndexOf("is")) //ye last word ki index dega

//console.log(mylovelyString.slice(0,3)) //ye string ko kaat ke jaha tk ka value dete hn wahi tk ka show krta hai n-1 tk ka dete hai
//d= mylovelyString.replace("shreya","alka");
//console.log(d,mylovelyString)
//let myDate= new Date();
//console.log(myDate);
//console.log(myDate.getTime()); //time ko seconds me deta hai
//console.log(myDate.getFullYear());
//console.log(myDate.getDay());
//console.log(myDate.getMinutes());
//dom manupulation

//let elem=document.getElementById('firstcontainer');  //ye method use hota hai jb hmlog ek element ko uske idenfier se target krna chahtehn
//console.log(elem);
//let elemClass=document.getElementsByClassName("container") //clASS BAHUT SARE HO SKTE HN aise kr ke 2 container class hme 
//dekhne ko milega or hm first wale me changes yahi se elemClass[0] likh ke changes kr skte hn
//console.log(elemClass);
//elemClass[0].style.background="yellow";
//elemClass[0].classList.add("bg-primary")  //page 2 se connect hai and pehle jisme yellow likh hai usko comment krna hoga
//elemClass[0].classList.add("text-success");

//console.log(elem.innerHTML);  //kisi v class ki ander ki html access kr skte
//console.log(elem.innerText);

//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerText);

/*
tn=document.getElementsByTagName('div')  // sare button console me print ho jayenge
console.log(tn)
createdElement=document.createElement('p')
createdElement.innerText="this is a created para";

tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="this is a created now";
tn[0].replaceChild(createdElement2,createdElement);
tn[0].removeChild(createdElement2);
*/
//selecting using query
//sel=document.querySelector('.container')
//console.log(sel)
/*
sel=document.querySelectorAll('.container')  //node list return krega css selector ka use hota hai 
console.log(sel)
*/
//events in javascript


//function clicked(){
    //console.log('the button was clicked');  //onclick pr click krne se ky hoga aage vo btata hai
  //  }
//window.onload=function(){  //onload event btata hai jb page load ho gyi ho  tb ky hoga  window object se vo attach hai
  //  console.log('the document was loaded');  //windoe load hota hai to uske just baad jo function perform hoga uske liye hai ye
//}
//events in js
/*
firstcontainer.addEventListener('click',()=>{  //first container directly name se access kr rhe hn hm 
    console.log("clicked on container") 
    })  //addevent listner js ka inbuild function hai uper ki line me click event hai
*/
/*
document.querySelectorAll('.container')[0].innerHTML="<b>we have clicked</b>"
console.log("clicked on container")
*/
/*
firstcontainer.addEventListener('mouseover',function(){
    console.log("mouse on container")
})*/
/*
firstcontainer.addEventListener('mouseout',function(){
    console.log("mouse out of container");
})
*/

// let previousHTML=document.querySelectorAll('.container')[1].innerHTML;
//  firstcontainer.addEventListener('mouseup',function(){
//  document.querySelectorAll('.container')[1].innerHTML=previousHTML;
//      console.log("mouse up when clicked on container")
   
// //   })
//  firstcontainer.addEventListener('mousedown',function(){
//      document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"})
//      console.log("mouse down when clicked on container")
//  })

//arrow function
//function sum(n,a=0){
  //  for(i=1;i<=n;i++)
    //a=a+i;
    //return a;
//}
/*
  sum =(a,b)=>{  //this is called arrow function ye bich me kahi function likhna pade to kaam me aata hai utna bda nhi likhna padta hai
      return a+b;
  }
  */
//logKaro=()=>{
  //document.querySelectorAll('.container')[1].innerHTML="<b> we have clicked</b>"
//  console.log("i am your log")
//}  


  //settime out and set intervall
//setTimeout(logKaro,2000);     //ye mili second me use hota hai //page load hone ke baad vo chij ho jayegi
//clearinterval ka use is activity ko cancle krne liya kiya jata hai
//clr=setInterval(logKaro,2000);  //clearInterval(clr)  ka use is activity ko stop krne ke liye kiya jata hai

//javaScript localStorage


// localStorage.setItem('name','shreya')


// localStorage.removeItem('name');
//undefined
//localStorage   //ye sara inspect pr run krega  never set any sensetive data in local storage
//Storage {name: 'shreya', length: 1}length: 1name: "shreya"[[Prototype]]: Storage 
//localStorage
//Storage {name: 'shreya', length: 1}
//*/
//localStorage 
//JSON javascrip object notation
/*
obj={name:"shreya",length: 1,a:{this:'tha"t'}}  //json does not support single quote
jso=JSON.stringify(obj);   //agr hm search kre type of jso to uska answere string dega
console.log(typeof jso);
console.log(jso)
*/

// parsed=JSON.parse('{"name":"shreya","length": 1,"a":{"this":"that"}}')
// console.log(parsed);
// console.log(typeof parsed);

// //ecma script ek standard hai jis se javascript ko maintain kiya jaa rha hai
// //template literals= ` backticks
// a=34;
// console.log(`this is my ${a}`) // backticks ka sign hmko nhi pta hai


  // let comp=true;
  //  let promi=new Promise(function(resolve,reject){
  //   let comp=false;  //promi is a object of promise method
  //    if(comp){    
  //      resolve("I am successful.");
       
  //    }
  //    else{
  //      reject( "i am failed");
  //        }
  //  });
  //   console.log(promi);



// function promi(comp){
    
  //   return new Promise(function(resolve,reject){
  //    if(comp){
  //      resolve("I am successful.");
       
  //    }
  //    else{
  //      reject("I am failed");
  //        }
  //  });
  //   }
  //   console.log(promi(false));



  
   /*
  function promi(comp){
    
    return new Promise(function(resolve,reject){
      if(comp){
       resolve("I am successful.");
       
     }
     else{
       reject("I am failed");
     }
   });
  }

    let onfulfill=(result) =>{
      console.log(result);
       }
       let onRejection=(error) =>{
         console.log(error);
       }

       promi(false).then(onfulfill);
       promi(false).catch(onRejection);
    //console.log(promi(true));
   */
   


  