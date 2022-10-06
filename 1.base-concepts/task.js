"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь
  let d = Math.pow(b, 2) - 4*a*c; //дискриминант
  
  if (d === 0) {
      let root = -b/(2*a);
      arr.push(root);
  } else if (d > 0) {
      let rootSum = (-b + Math.sqrt(d) )/(2*a);
      let rootMin = (-b - Math.sqrt(d) )/(2*a);
      arr.push(rootSum, rootMin);
  } else {
      arr = [];   
  }

  return arr; // возвращаем массив для дальнейшего использования 
}

let res = solveEquation(3, 6, 1);
console.log(res);


function calculateTotalMortgage(percent, contribution, amount, date) {
  
    // код для задачи №2 писать здесь

//тело кредита: сумма, которую необходимо вернуть банку (сумма кредита минус первоначальный взнос)
    let creditBody = amount - contribution;

//на какой срок был выдан кредит (в месяцах)
    let startDate = new Date(); //дата выдачи кредита - сегодня
    let endDate = new Date(date); //дата закрытия кредита - параметр в функции
    let creditDuration = endDate.getMonth() - startDate.getMonth(); //срок кредита в месяцах
    let p = percent/(100*12);  //ВАЖНО В п.п.5 P - процентная ставка должна быть дробным числом, следовательно, входные данные нужно разделить на 100.

//Ежемесячная оплата рассчитывается по формуле: Платеж = S * (P + (P / (((1 + P)^n) - 1))), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
    let payment = creditBody*(p + (p/(Math.pow(1 + p, creditDuration) - 1)));

//Посчитайте общую сумму, которую придется заплатить клиенту.
    let totalAmount = Number((contribution + payment*creditDuration).toFixed(2));  //суммируем первоначальный взнос + ежемесячный платеж * срок, округляем до 2зн после запятой (тип данных преобраз в строку), преобразуем обратно в число
    console.log (totalAmount);
    return totalAmount;
    
}

calculateTotalMortgage(10, 10000, 50000, '2022-12-06')