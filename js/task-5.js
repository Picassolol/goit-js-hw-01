const country = prompt('В какою страну необходимо доставить товар?');
let price;

if(country === null) {
    alert('Отменено пользователем!');
    console.log('Отменено пользователем!');
} else {
    switch (country.toLowerCase()) {
        case 'китай':
            price = 100;
            alert(`Доставка в ${country} будет стоить ${price} кредитов`);  
            break;
    
        case 'чили':
            price = 250;
            alert(`Доставка в ${country} будет стоить ${price} кредитов`);  
            break;
        
        case 'австралия':
            price = 170;
            alert(`Доставка в ${country} будет стоить ${price} кредитов`);  
            break;
        
        case 'индия':
            price = 80;
            alert(`Доставка в ${country} будет стоить ${price} кредитов`);  
            break;
        
        case 'ямайка':
            price = 120;
            alert(`Доставка в ${country} будет стоить ${price} кредитов`);  
            break;
        default:
            alert('В вашей стране доставка не доступна');
    }     
}