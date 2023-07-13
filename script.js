const fibonacciSeries = (num) => {
  let fibSeries = [0, 1];

  for (let i = 2; i < num; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }

  return fibSeries;
};

const displayFibonacciSeries = () => {
  const fibonacciElement = document.getElementById("fibonacci");
  const num = 10; // Change this value to display a different number of Fibonacci numbers

  const series = fibonacciSeries(num);
  fibonacciElement.textContent = series.join(", ");
};

displayFibonacciSeries();
