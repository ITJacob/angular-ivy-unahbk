// 长度、总数、最大值
export const random = function (
  len: number,
  total: number,
  max: number = total
) {
  let arr = new Array<number>(len);
  let sum = 0;
  do {
    // get some random numbers
    for (let i = 0; i < len; i++) {
      arr[i] = Math.random();
    }
    // get the total of the random numbers
    sum = arr.reduce((acc, val) => acc + val, 0);
    // compute the scale to use on the numbers
    const scale = (total - len) / sum;
    // scale the array
    arr = arr.map((val) => Math.min(max, Math.round(val * scale) + 1));
    // re-compute the sum
    sum = arr.reduce((acc, val) => acc + val, 0);
    // loop if the sum is not exactly the expected total due to scale rounding effects
  } while (sum - total);

  return arr;
};
