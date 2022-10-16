function plusOne(digits: number[]): number[] {
    let result: number[] = [...digits];
    
    for(let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 === 10) {
            result[i] = 0;
            if(i === 0) {
                result.unshift(1);
            }
        } else {
            result[i] = result[i] + 1;
            break;
        }
    }
    
    return result;
};