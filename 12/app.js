// 12. Реализуйте класс Hashtag. В него передается число n – количество элементов
// массива. На основании числа формируется динамический массив из n элементов
// внутри класса. Создать функцию doHashtag, заполняющую новый массив из
// элементов, каждое значение которого имеет вид #name

class Hashtag {
    constructor(n) {
      this.array = new Array(n);
    }
  
    doHashtag() {
      for (let i = 0; i < this.array.length; i++) {
        this.array[i] = `#name${i + 1}`;
      }
    }
  }
  
  // Пример использования класса Hashtag:
  const n = 5;
  const hashtagInstance = new Hashtag(n);
  hashtagInstance.doHashtag();
  
  console.log(hashtagInstance.array); // Вывод массива с хештегами