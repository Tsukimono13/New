function myLocalScope() {
  const myVar = 1;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);