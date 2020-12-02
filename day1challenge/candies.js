  const children = 3;
  const candy = 9;

// SOLUTION 1

const candies =(children, candy)=>Math.floor(candy/children)*children

candies(children,candy)


//SOLUTION 2

//****The below solution also accounts for odds and Evens and 0's. **** >>>>

// const candies=(children, candy)=>candy% children===0?Math.floor(candy/children)*children:candy% children===1?Math.floor(candy/children)* children:0




      