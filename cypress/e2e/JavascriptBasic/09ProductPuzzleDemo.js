function productExceptSelf(nums) {
    const length = nums.length;
    const result = new Array(length).fill(1);
  
    // First pass: left to right
    let leftProduct = 1;
    for (let i = 0; i < length; i++) {
      result[i] = leftProduct;
      leftProduct *= nums[i];
    }
  
    // Second pass: right to left
    let rightProduct = 1;
    for (let i = length - 1; i >= 0; i--) {
      result[i] *= rightProduct;
      rightProduct *= nums[i];
    }
  
    return result;
  }
  console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
  console.log(productExceptSelf([2, 3, 4, 5])); // [60, 40, 30, 24]
  console.log(productExceptSelf([1, 0, 3, 4])); // [0, 12, 0, 0]
    