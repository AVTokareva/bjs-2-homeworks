//Задача №1. Форматтер чисел

function parseCount (arg) {
    let count = Number.parseInt(arg, 10);
    if (isNaN(count)){
        throw new Error("Невалидное значение");
    } else {
        return count;
    }
};

function validateCount(arg){
    try {
        return parseCount(arg);
    } catch(error) {
        return error;
    }
}

//Задача №2. Треугольник

class Triangle {
    constructor(firstSide, secondSide, thirdSide){
        if (((firstSide + secondSide) < thirdSide) || ((thirdSide + secondSide) < firstSide) || ((firstSide + thirdSide) < secondSide)){
            throw new Error ("Треугольник с такими сторонами не существует");
        }

        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }

    getPerimeter() {
        const perimeter = parseFloat(this.firstSide + this.secondSide + this.thirdSide);
        return perimeter;
     
    }

    getArea(){
        const p = 0.5 * (this.firstSide +  this.secondSide + this.thirdSide);
        const area = parseFloat(Math.sqrt(p * (p - this.firstSide) * (p -  this.secondSide) * (p - this.thirdSide)).toFixed(3));
        return area; 
    }

}

function getTriangle(firstSide, secondSide, thirdSide) {
        
    try {
        return  new Triangle(firstSide, secondSide, thirdSide);  
    } catch(error) {
        return {getPerimeter: () => "Ошибка! Треугольник не существует", getArea: () => "Ошибка! Треугольник не существует"};
    }
}

