/** 
* Выполняет бинарный поиск (только для отфильтрованного массива)
* @param  ключ - искомое
* @param {array} массив - массив, в котором производится поиск
* @returns {number} индекс, по которомму найдено совпадение или false, если совпадений не найдено
*/
function binSearch(key, array){
  let max = array.length - 1;
  let half = Math.ceil(max / 2);
  let min = 0;

  while(key !== array[half]){
    if(max - min == 1){
      return false
    }else if(key < array[half]){
      max = half;
      half = Math.ceil(min +((max - min) / 2));
    }else if(key > array[half]){
      min = half;
      half =  Math.ceil(min + ((max - min) / 2));
    }
  }
  return  half;
}

module.exports = binSearch;