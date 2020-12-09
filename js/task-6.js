let input;
let total = 0; 

while(input !== null) {
    input = prompt('ведете число');

    
    if(isNaN(Number(input)))  {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        if(input === null){
            alert(`Общая сумма чисел равна ${total}`);
        } else {
            total += Number(input);
        }
    } 
}