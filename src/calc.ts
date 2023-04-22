export function add(x: number, y: number): number {
  return x + y;
}

export function mul(x: number, y: number): number {
  return x * y;
}

export const isPalindrome = (params: string) => {
  const splitText = params.split("");
  const getReverse = [];
  for (let i = splitText.length - 1; i >= 0; i--) {
    getReverse.push(splitText[i]);
  }

  if (params.toLowerCase() === getReverse.join("").toLowerCase()) {
    return true;
  }
  return false;
};
