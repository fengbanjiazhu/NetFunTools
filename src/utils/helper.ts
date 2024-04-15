export function reformHelper(string: string, func: (e: any) => {}) {
  const array = string.split(".");
  const newArr = array.map((e) => {
    const element: number = Number(e);
    return func(element);
  });
  return newArr.join(".");
}

export const decimalToBinary = (num: number) => num.toString(2);
export const binaryToDecimal = (str: string) => parseInt(str, 2);
