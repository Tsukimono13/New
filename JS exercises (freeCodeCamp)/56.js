function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
testEqual(10); //Not Equal
testEqual(12); //Equal
testEqual("12"); //Equal