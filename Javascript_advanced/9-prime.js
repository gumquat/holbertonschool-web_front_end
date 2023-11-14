function countPrimeNumbers() {
  var counting = [], i, j, primes = [];
  for (i = 2; i <= 100; ++i) {
      if (!counting[i]) {
          primes.push(i);
          for (j = i << 1; j <= 100; j += i) {
              counting[j] = true;
          }
      }
  }
  return primes.length;
}

var num0 = performance.now();
console.log(countPrimeNumbers());
var num1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
