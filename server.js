
var fs = require('fs');

var _ = require('lodash');

// console.log("servier fille is running");
// console.log("hello");
// console.log("sameer bhai");
// function add(a,b) {
//     return a + b;
// }

// console.log(r);


// var add = (a,b) => {return a+ b};
// var r = add(5,5)

// console.log(r);


// (function(){


//     console.log("suuhaib");

// }
// )();


// function callBack(){
//     console.log("priince is calling a callback funtion");
    
// }

// const add  = function(a,b,callBack){
//     var result = a + b;
//     console.log("result is : " , result);
//     callBack();
    
// }
// add(13,4,callBack);


const add = function(a,b,suhaib){
    var result = a + b;
        console.log("result is : " , result);
suhaib();
}


// add(3,3,function(){
//     console.log("suhaib is there");
    
// });


// add(2,3, () => console.log("suhaib is hero")
// );



// fs.appendFile('greeting.txt', 'hi ' + "suhaib " + `!\n` , ()=>{
//     console.log("file is created");
    
// } );

// console.log(fs);

// const notes = require('./notes.js');

// var age = notes.age;
// console.log(age);

// var addNuumber = notes.addNuumber(age,4);
// console.log(addNuumber);

// console.log("server file is here");


// var data = ["person" ,1,2,2,55,55,2,3,45,'name' , 'age', '2'];
// var filter = _.uniq(data);
// console.log(filter);
// console.log(_.toString(true));




const objectToConvert = {
    name: "alice",
    age: 20
};

const json = JSON.stringify(objectToConvert);
console.log(json);


console.log(objectToConvert);
console.log(typeof json);




//server1.js code

const express = require('express');
const app = express()

app.get('/', function(req , res) {
    res.send('hello suhaib and sameer! and shariq!');
})

app.get('/chicken', (req,res) => {
    var items = {
        name: "suhaib",
    last : "khan",
        age: 20,
        isChutney: false
    }
    res.send(items);
})


app.post('/person', (req,res)=> {
    res.json("data saved")
})
app.listen(3000 , ()=> {
    console.log("server is running on 3000");
    
});