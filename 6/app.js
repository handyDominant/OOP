// 6. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// controller -> service -> repository, где:
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// Необходимо вывести в консоль весь массив


class ServerGetAll {
    constructor() {
        this.data = [1, 2, 3, 4, 5];
    }

    controller() {
        return this.data;
    }

    service() {
        if (typeof this.controller === 'undefined') {
            console.log('нет значения')
        }
    }

    repository() {
        // Эмулируем хранение данных в репозитории
        this.data = [1, 2, 3, 4, 5];

    }
}

const serverGetAll = new ServerGetAll;
serverGetAll.repository(); // Вызываем метод repository для инициализации данных
console.log(serverGetAll.controller()); // Выводим данные в консоль
serverGetAll.service(); // Проверяем наличие данных











