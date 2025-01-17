function compareArrays(arr1, arr2) {
  // let result;
  // if (arr1.length >= arr2.length) {  //задаю условие сравнения длины массивов, чтобы перебор через every() прошел по всей длине
  //   result = arr1.every((elem, index) => elem === arr2[index]);
  // } else {
  //   result = arr2.every((elem, index) => elem === arr1[index]);
  // }
  // return result; // boolean

  let result = (arr1.length === arr2.length) && (arr1.every((elem, index) => elem === arr2[index])); // boolean
  return result;
}

function advancedFilter(arr) {
  // let filterArr = arr.filter(item => item > 0 && item % 3 === 0);
  // let resultArr = filterArr.map(elem => elem*10);
  // return resultArr; // array
  
  let  resultArr = arr.filter(item => item > 0 && item % 3 === 0).map(elem => elem*10);
  return resultArr;
}
