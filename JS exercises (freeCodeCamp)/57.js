function testStrict(val) {
    if (val === 7) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
testStrict(10); //Not Equal
testStrict(7); //Equal
testStrict("7"); //Not Equal