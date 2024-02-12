// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.
// (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let number = parseInt(prompt('Write the number'));

for (let a = 3; a < number; a *= a) {
    if (number % (a * a) === 0) {
        console.log("Yes");
            break;
            
        } else {
            console.log("No");
        }
}