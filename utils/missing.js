/** 
* Проверяет, являются ли элементы массива последовательностью чисел
* @param {number} массив - массив для проверки
* @returns {number | boolean} Возвращает индекс, на котором обнаружен пропуск или false, если пропуска не найдено
*/
function missing(arr){
  let min = arr[0];
  let max = arr[arr.length - 1];
  for(let i = 0; i < arr.length; i++){
  
    if(arr[i] != min + i) return i
  }
  return false;
}
console.log(missing([ 2, 3, 4, 5, 6,]))
module.exports = missing;