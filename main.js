const resultBtn = document.getElementById("result");
const clearBtn = document.getElementById("clear");
const nums = document.querySelectorAll(".num");
const input = document.getElementById("input");
const opps = document.querySelectorAll(".opp");

var sum = 0,
  crntNum = "",
  crntOpp = "",
  crntMess = "",
  firstTime = true;

Array.from(nums).forEach((el) => el.addEventListener("click", clicked));
Array.from(opps).forEach((el) => el.addEventListener("click", oopFunc));
resultBtn.addEventListener("click", result);
clearBtn.addEventListener("click", clear);

function clicked(e) {
  num = e.target.innerHTML;
  crntNum += num;
  display(num);
}

function oopFunc(e) {
  if (firstTime) sum = parseFloat(crntNum);
  firstTime = false;
  if (crntOpp) compute(sum, parseFloat(crntNum));
  crntNum = "";
  display(e.target.innerHTML);
  crntOpp = e.target.getAttribute("id");
  console.log(sum);
}

function display(any) {
  crntMess += any;
  input.value = crntMess;
}

function compute(x, y) {
  if (crntOpp == "add") {
    sum = x + y;
  } else if (crntOpp == "times") {
    sum = x * y;
  } else if (crntOpp == "minus") {
    sum = x - y;
  } else if (crntOpp == "divide") {
    sum = x / y;
  }
  crntOpp = "";
}

function clear() {
  input.value = "";
  sum = 0;
  reset();
  firstTime = true;
}

function result() {
  if (crntOpp) compute(sum, parseFloat(crntNum));
  input.value = sum;
  reset();
  crntMess = sum.toString();
}

function reset() {
  crntNum = "";
  crntOpp = "";
  crntMess = "";
}
