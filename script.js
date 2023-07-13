const fibonacciSeries = (num) => {
  let fibSeries = [0, 1];

  for (let i = 2; i < num; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
  }

  return fibSeries;
};

const displayFibonacciSeries = () => {
  const fibonacciElement = document.getElementById("fibonacci");
  const num = parseInt(document.getElementById("inputNumber").value);

  if (isNaN(num) || num < 1) {
    fibonacciElement.textContent = "Please enter a valid number.";
    return;
  }

  const series = fibonacciSeries(num);
  const seriesHtml = series.map(number => `<span class="fib-number">${number}</span>`).join("");
  fibonacciElement.innerHTML = seriesHtml;
};
