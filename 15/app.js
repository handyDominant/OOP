// 15. Реализуйте класс ServerDelete. Обязательными функциями считаются функции
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
// "id": "javascript"
// }`
// Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
// проверки
// [
// { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
// { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
// { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
// { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
// { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
// ]


const data = [
    { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
    { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
    { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
    { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
  ];
  
  class ServerDelete {
    constructor() {
      this.data = data;
    }
  
    // Middleware для валидации JSON-запроса
    middleware(request) {
      if (!request.id) {
        throw new Error('Invalid JSON request: "id" field is required.');
      }
    }
  
    // Контроллер для обработки JSON-запроса
    controller(request) {
      this.middleware(request); // Вызываем middleware для валидации
      const idToDelete = request.id;
      return this.service(idToDelete);
    }
  
    // Сервис для выполнения операции удаления и проверки
    service(idToDelete) {
      const itemIndex = this.data.findIndex(item => item.id === idToDelete);
      if (itemIndex === -1) {
        throw new Error(`Item with ID "${idToDelete}" not found.`);
      }
  
      // Выполняем удаление элемента из массива данных
      const deletedItem = this.data.splice(itemIndex, 1)[0];
      return deletedItem;
    }
  
    // Репозиторий для симуляции БД
    repository() {
      // Уже реализовано выше, так как мы работаем с массивом данных.
    }
  }
  
  // Пример использования класса ServerDelete
  const serverDelete = new ServerDelete();
  const request = {
    id: "javascript"
  };
  
  try {
    const deletedItem = serverDelete.controller(request);
    console.log(`Item with ID "${deletedItem.id}" deleted successfully.`);
    console.log('Updated data:', serverDelete.data);
  } catch (error) {
    console.error(error.message);
  }



