import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import "./home.css";

  let rating=0;
  let luckyNum;
  let color='progress-bar bg-info';

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [name, enteredName] = useState("");
   const [_rating, setRating] = useState("");
console.log(name,"namee");
if(!name){
  color="";
  luckyNum=""

}

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(name,"nnnnmmmmmmm");
  returnTotalNumber(name,setRating)
}

  return (
    <div className='main-div'>
    <form onSubmit={handleSubmit}>
      <h4>Enter Your Name</h4>
<input type='text' value={name} className='input-name' onChange={(e) => enteredName(e.target.value)}></input> &nbsp;
<button type="submit" class="btn btn-primary" >Submit</button>
</form>
<br />
<h4>Your Luck is</h4>
<div class="progress">
  <div class={color} role="progressbar" style={{width: _rating+"%", }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<br />
<h6>Your Name Number is : {luckyNum}</h6>

    </div>
  );
}

function returnTotalNumber(name,setRating){
  if(name){
  name=name.toUpperCase();
      console.log(name,"letter+")
  let nameArr=name.split("");
  let number=0;
  let num=0;
  nameArr.map((letter)=>{

    switch(letter){
      case "A" :
      num=1;
      break;
      case "B" :
      num=2;
      break;
      case "C" :
      num=3;
      break;
      case "D" :
      num=4;
      break;
      case "E" :
      num=5;
      break;
      case "F" :
      num=6;
      break;
      case "G" :
      num=7;
      break;
      case "H" :
      num=8;
      break;
      case "I" :
      num=9;
      break;
      case "J" :
      num=10;
      break;
      case "K" :
      num=11;
      break;
      case "L" :
      num=12;
      break;
      case "M" :
      num=13;
      break;
      case "N" :
      num=14;
      break;
      case "O" :
      num=15;
      break;
      case "P" :
      num=16;
      break;
      case "Q" :
      num=17;
      break;
      case "R" :
      num=18;
      break;
      case "S" :
      num=19;
      break;
      case "T" :
      num=20;
      break;
      case "U" :
      num=21;
      break;
      case "V" :
      num=22;
      break;
      case "W" :
      num=23;
      break;
      case "X" :
      num=24;
      break;
      case "Y" :
      num=25;
      break;
      case "Z" :
      num=26;
      break;

       default:
       num=0
    }
  number=number+num;
//  console.log(number,"numm++")
  })
  //let finalNumber=number+num;
  console.log(number,"nameArr");

//   let _num=number;
// let num1=_num.toString().split("");
// let numb;
// let _number=0;
// num1.map((ele)=>{
//  numb=parseInt(ele);
//  console.log(numb,"numb")
//  _number=_number+numb;
// })
   luckyNum=giveOneDigit(number);
  console.log(luckyNum.toString().length,"luckyNum");
  if(luckyNum.toString().length>=2){
    luckyNum=giveOneDigit(luckyNum);
    console.log(luckyNum,"luckyNum22")
  }

  if(luckyNum==1){
     rating=80;
      color='progress-bar bg-success';
  }else if(luckyNum==2){
     rating=50;
     color='progress-bar bg-warning';
  }else if(luckyNum==3){
     rating=80;
     color='progress-bar bg-success';
  }else if(luckyNum==4){
     rating=40;
      color='progress-bar bg-danger';
  }else if(luckyNum==5){
     rating=90;
     color='progress-bar bg-success';
  }else if(luckyNum==6){
     rating=85;
     color='progress-bar bg-success';
  }else if(luckyNum==7){
     rating=60;
     color='progress-bar bg-info';
  }else if(luckyNum==8){
     rating=55 ;
     color='progress-bar bg-warning';
  }else if(luckyNum==9){
     rating=95;
     color='progress-bar bg-success';
  }else {
     rating=0
  }
 // const [_rating, setRating] = useState("");
 setRating(rating)
  console.log(rating,luckyNum,"rating")

  }
}

function giveOneDigit(number){
  console.log(number,"number++")
  let _num=number;
let num1=_num.toString().split("");
let numb;
let _number=0;
num1.map((ele)=>{
 numb=parseInt(ele);
 console.log(numb,"numb")
 _number=_number+numb;
})
return _number ;
}
