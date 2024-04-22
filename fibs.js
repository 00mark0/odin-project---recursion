const fibs = (n) => {
  const fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
};

console.log(fibs(10));

const fibsRec = (n, arr = [0, 1]) => {
  if (arr.length === n) return arr;

  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fibsRec(n, arr);
};

console.log(fibsRec(10));
