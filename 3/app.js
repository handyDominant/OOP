// 3. Реализуйте класс WordString, который будет иметь следующие методы: метод
// reverseString, переворачивающий строку, метод upperFirst, возвращающий строку,
// где первая буква заглавная и метод upperEvery, который делает заглавной первую
// букву каждого слова этой строки.


class WordString {
    // Метод для переворачивания строки
    reversString(str) {
        return str.split('').reverse().join('');
    }
    // Метод для сделания первой буквы заглавной
    upperFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
     // Метод для первой загловной буквы каждого слова в строке
    upperEvery(str) {
        let result = str.split(', ');
        let overResult = [];

        // Проходим по каждому слову и делаем первую букву заглавной
        for (let i = 0; i < result.length; i++) {
            overResult.push(this.upperFirst(result[i]));

        }
        
        // Объединяем слова снова в строку, разделяя их запятой с пробелом
        return overResult.join(', ');
    }

}


const wordString = new WordString;

console.log(wordString.reversString('Привет, мир!'));
console.log(wordString.upperFirst('Привет, мир!'));
console.log(wordString.upperEvery('Привет, мир!'));



