// 5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
// замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
// если слова являются анаграммами. Добавить проверки на ввод



class Anagram {
    constructor(words){
        if(words !== 'string' || words.lenght <= 0){
            throw new Error('Нет значения');
        }
        this.words = '';
    }


    inputWordsValue(){
    }
}


const anagram = new Anagram('Лунь');
console.log(anagram.inputWordsValue());