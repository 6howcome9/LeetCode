function longestCommonPrefix(strs: string[]): string {
    let common: string = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < common.length; j++) {
            if (common[j] !== strs[i][j]) {
                common = common.slice(0, j);
                break;
            }
        }
    }
    
    return common;
};