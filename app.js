

// import http from "http"
// here written as CommonJS
const http = require("http");

http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  response.write("Hello World!");
  response.end();
}).listen(5000, () => {
  console.log("Server listening at http://localhost:5000...");
});




console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
  for (let i  = 1; i <= count; i++) {
    if (i % 2 != 0) {
      console.log(i);
    } 
  }
}

printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}! You can drive!`;
  let belwoSixteen = `Sorry ${userName}, you need to wait ${16 - age} year(s) until you can drive.`;
  
  if (age < 16) {
    console.log(belwoSixteen)
  } else {
    console.log(aboveSixteen)
  }
}

checkAge("Jake", 21);
checkAge("Clara", 3);

console.log(checkAge);
console.log(checkAge);

//Exercise 3 Section
console.log("Exercise 3")

function whereIt(x, y){
  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
  return 2;
  } else if  (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0){
    return 4;
  } else if (x == 0 && y != 0) {
    return "x-axis";
  }else if (x != 0 && y == 0) {
    return "y-axis";
  } else {
    return "origin";
  }
}


console.log(whereIt(1, 1));
console.log(whereIt(-4, 1));
console.log(whereIt(1, -3));
console.log(whereIt(0, 0));

console.log("Exercise 4")

function isValidTriangle(a, b, c) {
  return a + b > c || a + c > b || b + c > a; 
}

function checkTriangle(a, b, c) {
  let isValid = isValidTriangle(a, b, c);
  if (isValid) {
    if (a == b && b == c) {
      return "Equilateral";
    } else if (a == b || b == c || a == c){
      return "Isoscoles"; 
    } else {
      return "Scalene";
    }
  } else {
    return "Not a valid triangle";
  }
}

console.log(checkTriangle(3, 4, 5))

/*function triangle(x, y, z) {
  if (x == y || x == z || y == z) {
    return "isosceles";
  } else if (x === y && x === z && y === z) {
    return "equilateral";
  }
}*/

console.log("Exercise 5");

function cellFeedback(planLimit, day, usage) {
  let perLength = 30;
  let currentAvg = usage / day;
  let projectedAvg = planLimit / perLength;
  let remainingDays = perLength - day;
  let statusMsg;
  let avgUsagePerfect = planLimit / day;
  let extramessage = "";


  //console.log(`${day} day(s) used, ${perLength - day} day(s) remaining`);
  //console.log(`Average daily use: ${usage / day} GB/day`);  

if (currentAvg > projectedAvg) {
  statusMsg = "Exceeding";
} else if (currentAvg < projectedAvg) {
  statusMsg = "Under";
} else {
  statusMsg = "AT"
}


if (currentAvg > avgUsagePerfect) {
  extramessage =`You are ${statusMsg} your average daily use ${currentAvg} GB/day, continuing this usage, you'll end up using ${planLimit - remainingDays * currentAvg} GB`;
} else if (currentAvg  < avgUsagePerfect) {
   extramessage = `You are ${statusMsg} your average daily use ${currentAvg} GB/day, continuing this usage, you'll end up using ${planLimit - remainingDays * currentAvg} GB`;
} else {
   extramessage = `You are a PERFECT person in every way. (${avgUsagePerfect})`;
}
return `${day} day(s) used, ${30 - day} day(s) remaining 
Average daily use: ${usage / day} GB/day
${extramessage}`;

}

  console.log(cellFeedback(100, 20, 28)); 
 


