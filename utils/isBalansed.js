/** 
* Устанавливает, заккрыты ли все пары скобок {} в строке
* @param {string} строка - строка для проверки
* @returns {boolean} Возвращает true или false
*/
function isBalanced(string){
  let arr = string.split('');
  let filtered = arr.filter(item => {
    return item == '{' || item == '}'
  })
  while(filtered.length){
    if(filtered.length == 1) return false;
    let index1 = filtered.indexOf('{');
    let index2 = filtered.indexOf('}');
    if(index1 == -1 || index2 == -1) return false;
    if(index2 < index1) return false;
    filtered.splice(index1, 1);
    filtered.splice(index2 - 1, 1)
  }
  return true;
}


module.exports = isBalanced;