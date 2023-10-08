// 7. Реализуйте класс ServerById. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в
// приложении
// Задание:
// на вход подается JSON вида:
// `{
// "id": "javascript"
// }`
// Необходимо вывести в консоль найденный элемент массива по id если таковой
// имеется. В противном случае бросить исключение. Добавить проверки

class ServerById {
    constructor(data) {
        this.data = data;
    }

    middleware() {
        if (!this.data.id) {
            throw new Error('Нет значения');
        }
        return this.data;
    }

    controller() {
        return this.data;
    }

    service() {
        const data = this.middleware();
        console.log(`Значение: ${data.id}`);
    }

    repository() {
        if (!this.middleware().id) {
            throw new Error('Нет значения');
        }
        return this.middleware().id;
    }
}

const inputData = {
    id: "javascript"
};

const serverById = new ServerById(inputData);

try {
    serverById.service();
} catch (error) {
    console.error(error.message);
}




