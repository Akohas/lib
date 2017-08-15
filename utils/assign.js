/** 
* Функция для объединения объектов
* @param {object} первый - объект-основа
* @param {object} последующие - объекты для объединения 
* @returns {object} Новый объект - результат объединения всех объектов из параметров
*/
function assign(){
  let res = {};
  Array.prototype.forEach.call(arguments, arr => {
    Object.keys(arr).forEach(item => {
      res[item] = arr[item]
    });
  })
  return res;
}

module.exports = assign;