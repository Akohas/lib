const assign = require('./utils/assign');
const assignRight = require('./utils/assignRight');
const binSearch = require('./utils/binSearch');
const factorial = require('./utils/factorial');
const fibonacci = require('./utils/fibonacci');
const filter = require('./utils/filter');
const indexOf = require('./utils/indexOf');
const isBalansed = require('./utils/isBalansed');
const isPalindrome = require('./utils/isPalindrome');
const isPrime = require('./utils/isPrime');
const isSorted = require('./utils/isSorted');
const missing = require('./utils/missing');
const reduce = require('./utils/reduce');
const reverse = require('./utils/reverse');


class Lib{
  assign(){
    return assign.apply(this, arguments)
  }
  assignRight(){
    return assignRight.apply(this, arguments)
  }
  binSearch(){
    return binSearch.apply(this, arguments)
  }
  factorial(){
    return factorial.apply(this, arguments)
  }
  fibonacci(){
    return fibonacci.apply(this, arguments)
  }
  filter(){
    return filter.apply(this, arguments)
  }
  indexOf(){
    return indexOf.apply(this, arguments)
  }
  isBalansed(){
    return isBalansed.apply(this, arguments)
  }
  isPalindrome(){
    return isPalindrome.apply(this, arguments)
  }
  isPrime(){
    return isPrime.apply(this, arguments)
  }
  isSorted(){
    return isSorted.apply(this, arguments)
  }
  missing(){
    return missing.apply(this, arguments)
  } 
  reduce(){
    return reduce.apply(this, arguments)
  } 
  reverse(){
    return reverse.apply(this, arguments)
  }
}

module.exports = Lib;

