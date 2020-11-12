function SelectionSort(A) {
  const n = A.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (A[j] < A[min]) min = j;
    }
    let t;
    t = A[min];
    A[min] = A[i];
    A[i] = t;
  }
  return A;
}



console.log(SelectionSort([23, 123, 2, 4, 7, 84, 55, 9, 42, 75, 234, 77]));
