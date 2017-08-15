/** 
* Выполняет вычисление последовательности Фибоначчи
* @param {number} число - номер числа в последовательности 
* @returns {number} число из последовательности Фибоначчи, соответсвующее номеру n
*/
function fib(number){
  let res = 0;
  let b = 0;
  let c = 1;
  for(let i = 0; i < number; i++){
    res = b + c;
    c = b; 
    b = res; 
  }
  return res;
}

module.exports = fib;