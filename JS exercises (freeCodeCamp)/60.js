function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
}
  
testStrictNotEqual(17);
testStrictNotEqual("17");
testStrictNotEqual(12);
testStrictNotEqual("bob");