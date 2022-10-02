function isValid(s: string): boolean {
    const brackets: {[key: string]: string} = {
        "[": "]",
        "{": "}",
        "(": ")"
    }
    
    let stack: string[] = [];
    
    for(let i = 0; i < s.length; i++) {
        if (Object.keys(brackets).includes(s[i])) {
            stack.push(s[i]);
        } else {
            if (brackets[stack.pop()] !== s[i]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};