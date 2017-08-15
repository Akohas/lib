/** 
* Фильтрует массив
* @param {array} массив - массив для фильтрации
* @param {function} callback - для каждого элемента массива, возвраает true на подходящий под фильтр элемент
* @returns {number} новый отфильтрованный массив
*/
function filter(arr, func){
  let res = [];
  arr.forEach((item, index) => {
    if(func(item, index)){res.push(item)}
  })
  return res;

}

module.export = filter;