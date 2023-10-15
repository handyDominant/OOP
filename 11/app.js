// 11. Дополнить класс Validator. Добавить метод isPhone для проверки на номер
// телефона.

class Validator {
    isPhone(phoneNumber) {
        // Проверка через регулярные выражения номера телефона
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

        if (phonePattern.test(phoneNumber)) {
            return `${phoneNumber} введен правильно`;
        } else {
            return `${phoneNumber} введен не правильно`;
        }
    }
}

const validator = new Validator();

const phoneNumber = '375336719922';
const result = validator.isPhone(phoneNumber);
console.log(result); // значение правильно или нет