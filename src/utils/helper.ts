export function reformHelper(string: string, func: (e: any) => {}) {
  const array = string.split(".");
  const newArr = array.map((e) => {
    const element: number = Number(e);
    return func(element);
  });
  return newArr.join(".");
}
