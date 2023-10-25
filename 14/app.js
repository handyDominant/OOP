// 14. Реализуйте класс ServerPut. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между методами
// следующая:
// middleware -> controller -> service -> repository, где:
// middleware – функция валидатор
// controller – функция, принимающая данные. Принимает json
// service – функция проверки на то что с repository вернулось значение
// repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
// этим массивом осуществляется только в repository. Массив находится в приложении
// Задание:
// на вход подается JSON вида:
// `{
// {"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1
// }`
// Необходимо найти id клиента в массиве БД. Если совпадение есть, произвести
// обновление значений для соответствующих ключей.
// Если совпадения по id нет – ошибка. Добавить проверки

class ServerPut {
    constructor() {
        // Симулируем массив данных в виде объекта
        this.data = {};
    }

    middleware(requestData) {
        // Здесь можно добавить любые необходимые проверки или валидации
        // Например, проверка на наличие обязательных полей в JSON.
        if (!requestData.id) {
            throw new Error("Missing 'id' in JSON");
        }
    }

    controller(requestData) {
        // В этом методе принимаем данные в формате JSON
        // и передаем их в сервис для обработки
        this.middleware(requestData);  // Вызываем middleware для проверок
        const result = this.service(requestData);  // Вызываем сервис
        return result;
    }

    service(requestData) {
        // Здесь производим проверку наличия id в массиве данных
        const idToUpdate = requestData.id;
        if (this.data[idToUpdate]) {
            // Если id существует, обновляем соответствующие значения
            for (const key in requestData) {
                this.data[idToUpdate][key] = requestData[key];
            }
            return "Data updated successfully";
        } else {
            throw new Error(`Client with id ${idToUpdate} not found in the database`);
        }
    }

    repository(data) {
        // Симулируем работу с базой данных. В данном случае, просто обновляем объект данных
        this.data = data;
    }
}

// Пример использования класса ServerPut
const server = new ServerPut();

// Пример JSON данных для обновления
const requestJson = {
    id: "javascript",
    label: "JavaScript",
    category: "programmingLanguages",
    priority: 1
};

try {
    const response = server.controller(requestJson);
    console.log(response);
} catch (error) {
    console.error("Error: " + error.message);
}