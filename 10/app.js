// 10. Дополнить класс Validator. Добавить метод isDate для проверки на дату.

class Validator {
    isDate(dateStr) {
        // Check if the dateStr is a valid date in the format "dd.mm.yyyy"
        const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;

        if (!datePattern.test(dateStr)) {
            return 'Некорректное значение';
        }

        // Split the date string into day, month, and year
        const [day, month, year] = dateStr.split('.');

        // Convert day, month, and year to numbers
        const dayNum = parseInt(day, 10);
        const monthNum = parseInt(month, 10);
        const yearNum = parseInt(year, 10);

        // Check if the day, month, and year are valid
        if (
            dayNum < 1 || dayNum > 31 ||
            monthNum < 1 || monthNum > 12 ||
            yearNum < 1900 // Adjust the lower limit as needed
        ) {
            return 'Некорректное значение';
        }

        // Check for specific rules based on your date validation requirements

        // If all checks passed, the date is valid
        return dateStr;
    }
}

const validator = new Validator();

const dateStr = '31.12.2023'; // Change this to the date you want to check
const result = validator.isDate(dateStr);
console.log(result); // Will either print the valid date or 'Некорректное значение'