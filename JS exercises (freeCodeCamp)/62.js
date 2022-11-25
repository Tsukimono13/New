function testGreaterOrEqual(val) {
    if (val >= 20) {  
      return "20 or Over";
    }
  
    if (val >= 10) {  
      return "10 or Over";
    }
  
    return "Less than 10";
}
  
testGreaterOrEqual(0);
testGreaterOrEqual(9);
testGreaterOrEqual(10);
testGreaterOrEqual(11);
testGreaterOrEqual(19);
testGreaterOrEqual(100);
testGreaterOrEqual(21);