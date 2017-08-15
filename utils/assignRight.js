/** 
* Функция для объединения объектов.
* Работает справа налево
* @param {object} первый - объект для объединения 
* @param {object} последующие - см. выше
* @param {object} последний - объект-основа 
* @returns {object} Новый объект - результат объединения всех объектов из параметров
*/
function assignRight(){
  let res = {};
  let objects = Array.prototype.reverse.call(arguments);

  Array.prototype.forEach.call(objects, arr => {
    Object.keys(arr).forEach(item => {
      res[item] = arr[item]
    });
 });

  return res;
}

module.exports = assignRight;