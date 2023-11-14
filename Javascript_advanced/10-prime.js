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

//timestamp before operation 100 times
let num0 = performance.now();

for (let z = 0; z < 100; z++) {
  countPrimeNumbers();
}

//timestamp after 100 operations then print
let num1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${num1 - num0} milliseconds.`);