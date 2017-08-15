/** 
* выполняет функцию callback один раз для каждого элемента, сводя их к единому значению
* @param {array} массив  - массив, для которого была вызвана функция reduce.
* @param {function} callback - Функция, выполняющаяся для каждого элемента массива, принимает четыре аргумента: 
* 1.accumulator
*  Аккумулятор, аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента, либо значение initialValue, если оно предоставлено (смотрите пояснения ниже).
*  2.currentValue
*Текущий обрабатываемый элемент массива.
* 3.index
* Индекс текущего обрабатываемого элемента массива.
4.array
*Массив, для которого была вызвана функция reduce.
* @param  initialValue - Необязательный параметр. Объект, используемый в качестве первого аргумента при первом вызове функции callback.
* @returns  значение accumulator
*/
function reduce(arr, func, init){
  let foo = arr.concat();
  foo ? foo.unshift(init) : null;
  let res = foo[0];

  for(let i = 0; i < foo.length - 1; i++){
    res = func(res, foo[i + 1], i, arr)
  }
  return res;
}

module.exports = reduce;