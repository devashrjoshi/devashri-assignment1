// created variable

let circle = document.getElementById("circle");
let up = document.getElementById("up");
let down = document.getElementById("down");

let rotateValue = circle.style.transform;
let rotateSum;

//  create function to rotate the features

up.onclick = function () {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};

down.onclick = function () {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
