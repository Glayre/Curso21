function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const series = [0, 1];
    while (true) {
      const next = series[series.length - 1] + series[series.length - 2];
      if (next > n) break;
      series.push(next);
    }
    return series;
  }

console.log(fibonacci(10));


function SerieFibonacci(n){
    if (n <= 0){ return [];}
    if (n === 1){return [0]}
    if (n === 2){return [0,1]}
    else if ()
  
  }
  console.log(SerieFibonacci(10));
  
  function SerieFibonacci(n){
    if (n <= 0){
      return [];
    }
    resultado = [];
    
  }
  console.log(SerieFibonacci(10));
  
  
  function SerieFibonacci(n){
    if (n <= 0){
      return [];
    }
    resultado = [0, 1];
    resultado.push(2);
    resultado.push(3);
    console.log(resultado); 
  }
  console.log(SerieFibonacci(1));
  
  function SerieFibonacci(n){
    i


    function contarDescendente(n) {
  if (n < 0) {
    return;
  }
  console.log(n);
  contarDescendente(n - 2);
}
contarDescendente(11); 

function factorial(n) {
  if (n < 0) {
    return "El factorial no está definido para números negativos.";
  } else if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(-1)); // No esta permitido
console.log(factorial(6)); // 720
console.log(factorial(7)); // 5040