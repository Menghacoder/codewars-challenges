function findDigit(num, nth){
  var num1 = 0;
  if (nth <= 0){
    return -1;
  }
if(num < 0){
    num1 = num * -1;
}else{
    num1 = num;

}
let change = num1.toString();
if (change.length < nth){
    return 0;
}

let find = (change.charAt(change.length - nth)*1)
return find;
}

// ********************************************************************
function inAscOrder(arr){
  if(arr.length <= 1 ){
    return 0;
  }
  for(let i = 1 ; i < arr.length ; i++){
    if(arr[i] < arr[i-1]){
      return false
    }
  }
return true;
}

// ********************************************************************
function getMiddle(s){
  if (s.length <= 2){
    return "";
  }
  if(s.length % 2 !== 0){
    var x = Math.floor(s.length / 2)
    return s[x]
  }
  if(s.length % 2 === 0){
    var x = Math.floor(s.length / 2)
    return(s[x-1] + s[x]);
  }
}

// ********************************************************************
function removeEveryOther(arr){

if (arr.length <= 1){
  return 0
  }
  var arr1 = [];
  for (let i = 0 ; i < arr.length ; i++){
    console.log("arr",arr[i])
  if (i % 2 === 0){
    arr1.push(arr[i])
  }
  }
console.log('arr1 ====> ',arr1)
return arr1
}

// ********************************************************************
function initializeNames(name){

  if (name.split(" ").length <= 2){
    return name
  }
  var firstName = name.split(" ")[0]
  var lastName = name.split(" ")[name.split(" ").length - 1]
  var iniMidNames = ""
for(let i = 1 ; i < name.split(" ").length-1; i++){
  iniMidNames = iniMidNames + name.split(" ")[i].split('')[0] + '. '
}
return 'Last Solution', firstName +" "+  iniMidNames + lastName

}

// ********************************************************************

function powersOfTwo (n){
  var arr = [];
  for (let i =0 ; i <= n ; i++){
    arr.push(Math.pow(2,i))
  }
  return arr
}

// ********************************************************************
function chineseZodiac(year){
  var animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
  var elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water']
  var count = 0;

var anim = ''
var elem = ''

for (let i = 1924 ; i <= year ; i++){
anim = animals[count];
count = count + 1;
if (count % 12 === 0){
  count = 0;
}
}
var doubleElements = []
for (var i =0 ; i < elements.length; i++){
  doubleElements.push (elements[i]);
  doubleElements.push (elements[i]);
}
count = 0;
for (let i = 1924 ; i <= year ; i++){
  elem = doubleElements[count];
  count = count + 1;
  if (count % 10 === 0){
    count = 0;
  }
  }
  return elem + " " + anim
}
// ********************************************************************


module.exports = {findDigit,inAscOrder,getMiddle,removeEveryOther,initializeNames,powersOfTwo,chineseZodiac}