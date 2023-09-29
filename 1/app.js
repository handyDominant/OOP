// 1. Реализуйте класс Singer, который будет иметь следующие свойства: name,
// surname. Также класс должен иметь метод getAutograph, который будет выводить
// “{name} {surname), с наилучшими пожеланиями”.


class Singer { // New class for input users date 'name' and 'surname'. Close;
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getAutograph() {    // return => users date 'name' and 'surname'. Close;
        return `${this.name} ${this.surname}, с наилучшими пожеланиями`;
    }
}

// Пример использования класса Singer
const singer = new Singer("Имя", "Фамилия");
console.log(singer.getAutograph());






