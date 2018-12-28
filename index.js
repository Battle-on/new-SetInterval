var Sleep = require("./libs/timeout")
var SleepLoop = require("./libs/interval")

function add(){
  var count = 1;
  count++;
  console.log(count,"sleep 1s")
}

var count2 = 100;
function decrease(){
  --count2;
  console.log(count2,"sleeploop")
}
console.log(Sleep)



var timer = Sleep(add,2000,"test2")

 SleepLoop(decrease,1000,"test3")