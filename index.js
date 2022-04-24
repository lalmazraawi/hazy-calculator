const calculate = (array) => {
    let num
    let operations
    let newArray = []
  
  
    for (let i = 0; i < array.length; i++) {
      const currentItem = array[i]
      const arrayOfOperations = ['+', '-', '*', '/']
  
      if (arrayOfOperations.includes(currentItem)) {
        operations = currentItem
  
        newArray.push(operations)
      }
  
      if (!isNaN(parseInt(currentItem))) {
        num = parseInt(currentItem)
  
        newArray.push(num)
      }
      if (currentItem === null) {
        newArray.push(0)
      }
    }
    if (operations === '+') {
      return newArray[0] + newArray[2]
    }
    if (operations === '-') {
      return newArray[0] - newArray[2]
    }
    if (operations === '*') {
      return newArray[0] * newArray[2]
    }
    if (operations === '/') {
      return newArray[0] / newArray[2]
    }
  
    return NaN
  }
  
  
  module.exports = calculate
