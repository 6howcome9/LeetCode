function twoSum(nums: number[], target: number): number[] {
    
    let result: [number, number] = [0, 0];
    
    for (let i = 0; i < nums.length - 1; i++) {
        const idx: number = nums.lastIndexOf(target - nums[i]);
        
        if (i !== idx && idx > 0) {
            result = [i, idx];
            break;
        }
    }
    
    return result;
};
