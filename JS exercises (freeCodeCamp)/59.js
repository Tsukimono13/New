function testNotEqual(val) {
    if (val != 99) { 
      return "Not Equal";
    }
    return "Equal";
}
  
testNotEqual(99);
testNotEqual("99");
testNotEqual(12);
testNotEqual("12");
testNotEqual("bob");