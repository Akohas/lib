/** 
* Проверяет, является ли число простым
* @param {number} число - число для проверки
* @returns {boolean} Возвращает true или false
*/
function isPrime(number){
  let res = number - 1;
  while(number % res !== 0){
    res --
  }
  return res == 1 ?  true :  false;
}


module.exports = isPrime;