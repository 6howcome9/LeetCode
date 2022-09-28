function isPalindrome(x: number): boolean {
    let result: boolean = false;
    const chars: string[] = String(x).split("");
    
    if (chars[0] === "-") {
        return false;
    }
    
    while(chars.length > 0) {
        
        if (chars.length > 1) {
            const pre: string = chars.shift();
            const suf: string = chars.pop();
            
            if (pre !== suf) {
                result = false;
                break;
            } else {
                result = true;
            }
        } else {
            result =  true;
            break;
        }
       
    }
    
    return result;
 };