let credits = 23580;
const pricePerDroid = 3000;
let message;

const quantity = prompt('Введите количество')

if (quantity === null) {
    message = 'Отменено пользователем!'
} else {

    let totalPrice = quantity * pricePerDroid;

    if(totalPrice > credits) {
        message = 'Недостаточно кредитов!'
    } else {
        credits = credits - totalPrice
        message = `Вы купили ${quantity} дроидов, на счету осталось ${credits} кредитов.`
    }
}
alert(message);
console.log(message);
    





