// 6. Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на
// кнопку заменить значение инпута


const inputElement = document.getElementById('myInput');
const buttonElement = document.getElementById('changeTextAndColorButton');
let flag = false;

// Добавляем обработчик события на кнопку
buttonElement.addEventListener('click', function () {
    let inp = document.querySelector('input');
    
    if (flag === false) {
        inp.value = 'H1';
        inputElement.style.color = 'red';
        flag = true;
    } else {
        inp.value = 'Привет';
        inputElement.style.color = 'pink';
        flag = false;
    }
});













