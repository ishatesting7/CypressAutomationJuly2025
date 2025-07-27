function findMissingNumber(arr) {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  }
  console.log(findMissingNumber([0, 1, 2, 4]));  // Output: 3
  console.log(findMissingNumber([3, 0, 1]));     // Output: 2
  console.log(findMissingNumber([0]));           // Output: 1
    