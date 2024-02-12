// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let number = parseInt(prompt('Write the number'));

for (let a = 2; a < number; a++) {
    if (number % a === 0) {
        console.log("No, this is not a simple number");
        break;
    } else {
        console.log("Yes, this is a simple number");
    }
}