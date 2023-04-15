function fibs(n) {
  let a = 0;
  let b = 1;
  let arr = [0];

  if (n === 0) return [];

  for (let i = 1; i < n; i++) {
    arr.push(b);

    let temp = b;
    b = b + a;
    a = temp;
  }

  return arr;
}

function fibsRec(n) {
  if (n === 0) return [];
  else if (n === 1) return [0];
  else if (n === 2) return [0, 1];
  let arr = fibsRec(n-1)
  
  return [...arr, arr[n - 2] + arr[n - 3]];
}

console.log(fibsRec(8));
