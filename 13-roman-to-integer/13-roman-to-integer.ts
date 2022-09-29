function romanToInt(s: string): number {

  let result: number = 0;

  const nums: { [key: string]: number } = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }

  for (let i = 0; i < s.length; i++) {
    const char: string = s[i];

    if (
      char === "I" && ["V", "X"].includes(s[i + 1]) ||
      char === "X" && ["L", "C"].includes(s[i + 1]) ||
      char === "C" && ["D", "M"].includes(s[i + 1])
    ) { 
      result = result - nums[char];
    } else {
      result = result + nums[char];
    }
  }

  return result;
};