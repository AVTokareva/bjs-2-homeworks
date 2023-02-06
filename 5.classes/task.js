//Задача №1. Печатное издание
class PrintEditionItem{ //Cоздайте базовый класс `PrintEditionItem` со следующими свойствами
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    //создайте «сеттер» для свойства `state`, принимающий в качестве аргумента новое состояние печатного издания (число). Создайте «геттер», который позволит читать значение свойства `state`.
    set state (state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100){
            this._state = 100;
        } else{
            this._state = state;
        }
    }
    get state(){
        return this._state;
    }

    //Испорченное издание можно подклеить и тем самым улучшить его состояние. Создайте метод `fix()`, увеличивающий `state` в полтора раза. Метод не должен принимать аргументов.
    fix(){
        //убрала проверку
        this.state = this._state * 1.5;
         
    }
}

//Создайте класс `Magazine`, который будет наследоваться от класса `PrintEditionItem`.
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = 'magazine'){
        super (name, releaseDate, pagesCount, state, type);
    }
}
//Создайте класс `Book`, наследующийся от класса `PrintEditionItem`.
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'book'){
        super (name, releaseDate, pagesCount, state, type);
        this.author = author;
    }
}
//Создайте классы `NovelBook` для романов, `FantasticBook` для фантастических произведений и `DetectiveBook` для детективов, наследующиеся от класса `Book`.
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'novel'){
        super (author, name, releaseDate, pagesCount, state, type);
       
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'fantastic'){
        super (author, name, releaseDate, pagesCount, state, type); 
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = 'detective'){
        super (author, name, releaseDate, pagesCount, state, type); 
    }
}

//Задача №2. Библиотека

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
        return this.books;
    }

    findBookBy(type, value){
        for (let i=0; i < this.books.length; i++){  
            if (this.books[i][type] === value) { 
                return this.books[i];
            } 
        }
        return null;    
    }  

    giveBookByName(bookName) {
        let searchBook = null;
        //проходим массив books фильтром.Метод фильтр создает новый массив с элементами, прошедшими проверку (то есть есль колбэк вернет true). Поэтому если найденная книга соответствует параметрам, то ставим вернуть false, тк по условию её надо удалить из исходного массива, а на неподходящие книги возвращаем True и в итоге формируется массив без найденной книги.
        this.books = this.books.filter(book => {
            if(book.name === bookName) {
                searchBook = book;
                return false;
            }
            return true;
        })

        return searchBook;
    }



}




