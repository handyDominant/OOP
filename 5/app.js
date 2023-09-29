// 5. Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
// необходимо получить значение из инпута. Проверить, что это число > 0. Если
// проверка true, то вывести в Результат ряд Фибоначчи. 

let btn = document.querySelector('button');
let arr = [0, 1];

btn.addEventListener('click', function () {
    try {
        let inp = document.querySelector('input');
        let inputValue = parseInt(inp.value);

        if (isNaN(inputValue)) {
            throw new Error('Введите число');
        }

        for (let i = 2; i < inputValue; i++) {
            arr.push(arr[i - 1] + arr[i - 2]);
        }

        alert(arr.join(', '));

    } catch (err) {
        alert(err.message);

    }
});






