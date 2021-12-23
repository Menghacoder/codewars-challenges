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
console.log('num1===> ',num1)
let change = num1.toString();
console.log('change ==== > ',change)

if (change.length < nth){
    return 0;
}

let find = (change.charAt(change.length - nth)*1)
return find;
}
module.exports = {findDigit}