// function to check for prime
const isPrime = (numberLimit) => {
  for (let i = 2; i < numberLimit; i++) {
    if (numberLimit % i === 0) {
      return false;
    }
  }
  return true;
};

// Get FIZZBUZZ string results
let stringResult = "";
for (let i = 1; i < 501; i++) {
  if (isPrime(i)) {
    stringResult += "FiZZBUZZ++\n";
  } else if (i % 3 === 0 && i % 5 === 0) {
    stringResult += "FIZZBUZZ\n";
  } else if (i % 3 === 0) {
    stringResult += "FIZZ\n";
  } else if (i % 5 === 0) {
    stringResult += "BUZZ\n";
  }
}

// write/append fizzbuzz.log with the results
const fs = require("fs");
try {

  // append to file if it already exists
  if (fs.existsSync("./fizzbuzz.log")) {
    fs.appendFile("./fizzbuzz.log", stringResult, (error) => {
      if (error) {
        return console.error(error);
      }
    });

  // write to new file if it doesn't exist
  } else {
    fs.writeFile("./fizzbuzz.log", stringResult, (error) => {
      if (error) {
        return console.error(error);
      }
    });
  }
} catch(error) {
  console.error(error)
}
