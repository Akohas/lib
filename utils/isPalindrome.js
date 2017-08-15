/** 
* Проверяет, является и строка палиндромом
* @param {string} строка - строка для проверки
* @returns {boolean} Возвращает true или false
*/
function isPalindrome(string){
  let arr = string.toLowerCase().split(' ').join('').split('');
  for(let i = 0; i < (arr.length / 2); i++){
    if (arr[i] != arr[arr.length - 1 - i]) return false;
  }
  return true;
}


module.exports = isPalindrome;
