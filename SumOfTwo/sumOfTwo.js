/*
Problem:

You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

Example

For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
sumOfTwo(a, b, v) = true.

*/

// Solutions


function sumOfTwo(a, b, v) {
  const setFromB = new Set(b);
  return a.some(elem => setFromB.has(v - elem));
}


/*
  O(n²) Solution
  for(indexA =0; indexA < a.length; indexA++)
      for(indexB=0; indexB < b.length; indexB++)
          if(a[indexA] + b[indexB] === v) return true;
      
  return false;
  
  
  
  Optimal
  let complementLookup = {};
  for(indexB=0; indexB < b.length; indexB++){
      complementLookup[v - b[indexB]] = true;
  }
  
  for(indexA =0; indexA < a.length; indexA++){
      if(complementLookup.hasOwnProperty(a[indexA])) return true;
  }
  
  return false;


  
  More declarative 
  const setFromB = new Set(b);
  return a.some(elem => setFromB.has(v - elem));
  
*/