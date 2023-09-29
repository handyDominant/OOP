// 9. На вход программе подается переменная date, в котрой лежит дата в формате
// 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)

let userInput = ('xxxx-xx-xx'.replaceAll('-', '/').split('/'));

userInput.reverse()

console.log(userInput.join().replaceAll(',', '/'));