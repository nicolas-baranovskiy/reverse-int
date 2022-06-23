module.exports = function reverse (n) {
  let newNumber = 0;
  while (n > 0) {
    newNumber = (newNumber*10) + (n % 10);
    n = Math.floor(n / 10);
  }
  return newNumber;
}
