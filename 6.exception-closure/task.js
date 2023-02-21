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
