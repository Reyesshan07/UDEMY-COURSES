function getResults(a) {
    var b;
    if (a == 9) {
      b = 'you passed a nine';
    } else {
      b = 'not a nine';  
    }
    return b;  
  }
  
  
  console.log(getResults(8));  
  console.log(getResults(9));  
  console.log(getResults(10)); 
