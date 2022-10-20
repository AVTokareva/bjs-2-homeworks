// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
    max = -Infinity;
    min = Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++){ //перебираем массив, находим макс и мин, суммируем элементы массива
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) { //считаем сумму элементов 1 массива
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}
 
function makeWork(arrOfArr,worker) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++){
    let arrSum = worker(arrOfArr[i]); //сохраняем переменную sum, возвращенную ф-цией worker
    if (arrSum > max) {
      max = arrSum;
    }
  }
   return max;
}

// Задание 3
function worker2(arr) {
  let max = -Infinity;
  let min = Infinity;
  for (let i = 0; i < arr.length; i++){ //перебираем массив, находим макс и мин
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let difference = Math.abs(max - min);
  return difference;
}
