// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет. Если является
// - возвращает true, если не является - то false.


class Validator {
    constructor(data) {
        this.data = data;
    }

    isEmail() {
        if (!this.data) {
            return false
        }


        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.data) 

    }
}

const inputUserEmail = 'vo7by@mail.ru';
const validator = new Validator(inputUserEmail);

if (validator.isEmail()) {
    console.log('Это корректный email.');
} else {
    console.log('Это не корректный email.');
}