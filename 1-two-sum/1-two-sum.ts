function twoSum(nums: number[], target: number): number[] {
    let result: [number, number] = [0, 1];
    
    while(true) {
        const [i1, i2] = result;
        if (nums[i1] + nums[i2] === target) {
            break;
        } else {
            if (i2 + 1 >= nums.length) {
                result = [i1 + 1, i1 + 2]
            } else {
                result = [i1, i2 + 1];
            }
        }
    }
    
    return result;
};