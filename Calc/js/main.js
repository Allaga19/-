// Calc
window.addEventListener('DOMContentLoaded', function() {
    'use strict'; // Переводим весь код в строгий режим
    // Сoздаём переменные калькулятора
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'), // Базы отдыха
        totalValue = document.getElementById('total'), // Общая сумма
        personsSum = 0, // Количество людей
        daysSum = 0, // Количество дней
        total = 0; // Общая сумма

    totalValue.innerHTML = 0;
    // Навешиваем собитие на первый инпут (количество людей)
    persons.addEventListener('change', function() {
        personsSum = +this.value; // Записывает то что ввёл пользователь
        total = (daysSum + personsSum)*4000;  // Результат. Стоимость поездки(количество людей на количество дней)

        if(restDays.value == '') {  // Если поле пустое (второй инпут)
            totalValue.innerHTML = 0; // то  ничего не изменится
        } else {      // Если заполнено
            totalValue.innerHTML = total;  
        }
    });
    // Навешиваем собитие на второй инпут (количество дней)
    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personsSum)*4000;

        if(persons.value == '') {  // Проверяем на заполненность первого поля(первый инпут)
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });
    // Чтобы небыло бага(функции будут сробатывать если все поля заполнены)
    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') { // Если поля незаполнены  
            totalValue.innerHTML = 0;  // то  функции не срабатывают
        } else {  // Если поля заполнены
            let a = total;  // То всё работает (используем временную переменную)
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
});