function isValid(s: string): boolean {
    const brackets: {[key: string]: string} = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    
    let stack: string[] = [];
    
    for(let i = 0; i < s.length; i++) {
        if (["(", "[", "{"].includes(s[i])) {
            stack.push(brackets[s[i]])
        } else {
            if(stack.pop() !== s[i]) {
                return false
            }
        }
    }
    return stack.length === 0;
};