/** 
* Выполняет вычисление факториала
* @param {number} число - число, факториал которого необходимо найти
* @returns {number} факториал числа
*/
function factorial(number){
  let res = number;
  let a = number - 1;

  while(a != 0){
    res *= a;
    a--
  }
  return res;
}

module.exports = factorial;