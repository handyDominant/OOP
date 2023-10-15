// 9. Дополнить класс Validator. Добавить метод isURL для проверки на url.


class Validator {
    constructor(name_) {
        this.name_ = name_;
    }

    isURL() {
        if (this.name_.startsWith('https://')) {
            return this.name_;
        } else {
            return 'Некорректное значение';
        }
    }
}

const validator = new Validator('https://vo7.by/');

const result = validator.isURL();
console.log(result);