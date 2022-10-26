function removeDuplicates(nums: number[]): number {
    
    let pivot: number = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if(nums[pivot] < nums[i]) {
            nums[pivot + 1] = nums[i]
            pivot++;
        }
    }
    return pivot + 1;
};