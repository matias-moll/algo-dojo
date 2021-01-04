/*
Problem:

Given an array of integers, find the maximum possible sum you can get from one of its contiguous subarrays. The subarray from which this sum comes must contain at least 1 element.

Example

For inputArray = [-2, 2, 5, -11, 6], the output should be
arrayMaxConsecutiveSum2(inputArray) = 7.

*/

// Optimal Solution (Kadane's Algorithm)

function arrayMaxConsecutiveSum2(inputArray) {
    let currentSum = inputArray[0];
    let maxSum = currentSum;
    
    for(let index = 1; index < inputArray.length; index++){
        currentSum = Math.max(inputArray[index], inputArray[index] + currentSum);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}


/*
  O(n²) Solution
  
  function arrayMaxConsecutiveSum2(inputArray) {
    let maxSum = Number.NEGATIVE_INFINITY;
    
    for(let index = 0; index < inputArray.length; index++){
        let sum = inputArray[index];
        maxSum = Math.max(sum, maxSum);
        for(let secondIndex = index+1; secondIndex < inputArray.length; secondIndex++){
            sum += inputArray[secondIndex];
            maxSum = Math.max(sum, maxSum);
        }
    }
    return maxSum;
  }

*/