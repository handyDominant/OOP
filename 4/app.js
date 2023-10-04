// 4. Реализуйте класс MathСalculation. В него передается число n – количество
// элементов массива. На основании числа формируется динамический массив из n
// элементов внутри класса. Создать функцию для подсчета всех четных чисел
// массива. Добавить проверки на ввод


class MathСalculation{
    constructor(n){
        if(typeof n !== 'number' || n <= 0){
            throw new Error('нет значения массива');
        }
        this.n = [];

        for(let i = 1; i <= n; i++){
            this.n.push(i);
        }
    }

    filterArray(){
        return this.n.filter(num => num % 2 === 0);
    }
}

const mathСalculation = new MathСalculation(10);
console.log(mathСalculation.filterArray());
