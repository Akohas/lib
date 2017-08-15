/** 
* Поиск ключа в массиве
* @param {array} массив - массив поиск
* @param ключ, по которому производится поиск
* @returns {number} индекс в массиве, соотвествующий совпадению или -1
*/
function indexOf(arr, key){
  let res;
  for(let i = 0; i < arr.length; i++){
    if(!res && arr[i] == key) res = i;
  }
  if(typeof res == 'undefined') return -1;
  return res;
}

module.exports = indexOf;
