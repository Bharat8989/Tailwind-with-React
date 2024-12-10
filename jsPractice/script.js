var x=12;
console.log(x);
// if else conditions 
let y=20;
if(y=>30){
    console.log("y is greater ");
    
}
else{
    console.log("30 is greater ");
}

const add= (x)=>{
  return x*x;
  
}
console.log(add(3));


// length this method return the number of elements in an array 
// push pop 
var myArray =[1,23,3 ,"hello",45];
myArray.pop();
console.log(myArray);
var myArray = [1, 2, 3, 4, 5];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(element) {
    console.log(element);
});


console.log("hello for of");
var myArray = [1, 2, 3, 4, 5];
for (var element of myArray) {
    console.log(element);
}

// foreach loop 

var k = [1, 2, 3, 4];

// let kk = k.forEach((4) => {
//   console.log(4); // Outputs: 1, 2, 3, 4
// });

// console.log(kk); // Outputs: undefined


let today=new Date();
console.log(today);