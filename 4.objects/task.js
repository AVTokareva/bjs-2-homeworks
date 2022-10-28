function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// 3. Создайте метод addMark(mark) по аналогии с п.2, который при вызове будет добавлять студенту оценку mark в свойство (массив) marks объекта. Обратите внимание, что ранее мы нигде не задавали свойство marks для инстансов(экземпляров). Значит нам надо проверять, что свойство существует. 

Student.prototype.addMark = function (mark) {
    if(this.marks === undefined){ 
      this.marks = [mark];
    } else {
      this.marks.push(mark);
    }
  } 


// 4.Создайте метод addMarks(mark1,mark2,mark3...) по аналогии с п.2, который при вызове будет добавлять студенту сразу несколько оценок. Подсказка: так как количество добавляемых оценок неизвестно, воспользуйтесь rest параметром.

Student.prototype.addMarks = function(...otherMarks) {
  this.marks = [...otherMarks];
}

// 5.Создайте метод getAverage() по аналогии с п.2, который при вызове будет возвращать среднее арифметическое оценок студента.

Student.prototype.getAverage = function() {
  let sum = 0;  
  for (let i = 0; i < this.marks.length; i++) {    
    sum += this.marks[i];  
  }  
  let average = sum / this.marks.length;  
  return average;
}

//6.Создайте метод exclude(reason) по аналогии с п.2, который при вызове будет исключать студента из учебного процесса и устанавливать причину исключения. Для этого надо удалить свойства subject и marks и добавить свойство excluded со значением reason.

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}