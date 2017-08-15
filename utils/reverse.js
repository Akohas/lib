/** 
* обращает порядок следования элементов массива
* @param {array} массив - массив для которого вызвана функция
* @returns {array} - новый массив, полученный в результате выполнения функции 
*/
function reverse(string){
  let res = [];
  string.split('').forEach(item => {
      res.unshift(item)
  });
   return res.join('');
}


module.exports = reverse;