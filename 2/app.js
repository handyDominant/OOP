try {
    class Calculator {
        doPlus(value1, value2) { 
            return value1 + value2;
        }
    
        doMinus(value1, value2) { 
            return value1 - value2;
        }
    
        doMultiply(value1, value2) { 
            if (value1 == 0 || value2 == 0) {
                
                return 'На ноль умножить нельзя, значение: 0';
            } else {
                return value1 * value2;
            }
        }
    
        doDivide(value1, value2) { 
            if (value1 == 0 || value2 == 0) {
                return 'На ноль поделить нельзя, значение: 0';
            } else {
                return value1 / value2;
            }
        }
    }
    
    const calculator = new Calculator();
    
    const sumValuesInTheCalculator = calculator.doPlus(10, 30);  // сумма чисел (плюс)
    const minusValueInTheCalculator = calculator.doMinus(10, 30);  // разность чисел (минус)
    const multiplyingNumbersInTheCalculator = calculator.doMultiply(0, 30);  // произведение чисел (умножение)
    const dividingNumbersInTheCalculator = calculator.doDivide(10, 30);  // частное чисел (деление)
    
    console.log('Сумма: ', sumValuesInTheCalculator);
    console.log('Разность: ', minusValueInTheCalculator);
    console.log('Произведение: ', multiplyingNumbersInTheCalculator);
    console.log('Частное чисел: ', dividingNumbersInTheCalculator);

} catch (error) {
    console.log(error);
}