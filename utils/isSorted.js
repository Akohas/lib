/** 
* Проверяет, является ли массив отсортированнм (от меньшего к большему)
* @param {number} массив - массив для проверки
* @returns {boolean} Возвращает true или false
*/
function isSorted(arr){
  let res;
  arr.reduce((prev, cur) => {
    if(res == false) return;
    prev < cur ? res = true : res = false;
    return cur;    
  })
  return res;
}

module.exports = isSorted;