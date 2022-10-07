"use strict";

//ЗАДАЧА 1

function solveEquation(a, b, c) {
  const arrRoots = [];
  // код для задачи №1 писать здесь
  const discriminant = Math.pow(b, 2) - 4*a*c; //дискриминант
  
  if (discriminant === 0) {
      let root = -b/(2*a);
      arrRoots.push(root);
  } else if (discriminant > 0) {
      let rootSum = (-b + Math.sqrt(discriminant) )/(2*a);
      let rootMin = (-b - Math.sqrt(discriminant) )/(2*a);
      arrRoots.push(rootSum, rootMin);
  } 

  return arrRoots; // возвращаем массив для дальнейшего использования 
}
// let res = solveEquation(3, 6, 1);
// console.log(res);


//ЗАДАЧА 2

function calculateTotalMortgage(percent, contribution, amount, date) {

    // код для задачи №2 писать здесь
    // 
    //Проверка введённых параметров
        if ( isNaN(percent) || percent <= 0 || percent > 100){
            return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
        } 
        
        if (isNaN(contribution) || contribution < 0 || contribution > amount) {
            return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
        }
        
        if (isNaN(amount) || amount <= 0 || amount < contribution) {
            return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
        }
        
    //тело кредита: сумма, которую необходимо вернуть банку (сумма кредита минус первоначальный взнос)
        let creditBody = amount - contribution;
        
    //на какой срок был выдан кредит (в месяцах)
        let startDate = new Date(); //дата выдачи кредита - сегодня
        let endDate = new Date(date); //дата закрытия кредита - параметр в функции
        let creditDuration = (endDate.getMonth() - startDate.getMonth()) + (endDate.getFullYear() - startDate.getFullYear())*12; //срок кредита в месяцах
        let p = percent/(100*12);  //ВАЖНО В п.п.5 P - процентная ставка должна быть дробным числом, следовательно, входные данные нужно разделить на 100.
        
        // console.log (creditDuration);  

    //Ежемесячная оплата рассчитывается по формуле: Платеж = S * (P + (P / (((1 + P)^n) - 1))), где: S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
        let payment = creditBody*(p + (p/(Math.pow(1 + p, creditDuration) - 1)));
        
    //Посчитайте общую сумму, которую придется заплатить клиенту.
        let totalAmount = Number((payment*creditDuration).toFixed(2));  //ежемесячный платеж * срок, округляем до 2зн после запятой (тип данных преобраз в строку), преобразуем обратно в число
        console.log (totalAmount);
        return totalAmount;
}
        
// calculateTotalMortgage('dfg', 1000, 50000, '2023-10-06');
