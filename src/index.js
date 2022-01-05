module.exports = function reverse (n) {
  reverseNum = [];
  num = n;
  if (n > 0) {
    for (let i = 0; i < String(n).length; i++) {
        reverseNum.push(num % 10);
        num = (num - num % 10) / 10;
    }
  } else {
      num = Math.abs(n)
      for (let i = 0; i < String(n).length -1; i++) {
        reverseNum.push(num % 10);
        num = (num - num % 10) / 10;
      }
      return `+${Number(reverseNum.join(''))}`;
  }
  return Number(reverseNum.join(''));
}
