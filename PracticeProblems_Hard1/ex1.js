//Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// The code after second() return ends there. so no they do do produce the same results.
