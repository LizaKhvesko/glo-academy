let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 1200);
let rollback = 25;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1');
let servicePrice1 = +prompt('Сколько это будет стоить?', 1000);
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'service2');
let servicePrice2 = +prompt('Сколько это будет стоить?', 2000);

function getAllServicePrices() {
    let allServicePrices = servicePrice1 + servicePrice2;
    return allServicePrices;
}

let getFullPrice = function() {
    let fullPrice = screenPrice + getAllServicePrices();
    return fullPrice;
}

let getTitle = function(name) {
    name = name.trim();
    return name[0].toUpperCase()+name.slice(1).toLowerCase();
}

let getServicePercentPrices = function() {
    let percent = getFullPrice() * (rollback/100);
    let servicePercentPrice = Math.ceil(getFullPrice() - percent);
    return servicePercentPrice;
}

let showTypeOf = function(variable) {
    return typeof variable;
} 

let getRollbackMessage = function() {
    if(getFullPrice()>=30000) {
    return 'Даем скидку в 10%';
} else if(getFullPrice()>=15000 && getFullPrice()<30000) {
     return 'Даем скидку в 5%';
} else if(getFullPrice()<15000 && getFullPrice()>0) {
    return 'Скидка не предусмотрена';
} else {
      return 'Что то пошло не так';
}
}

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));
console.log(screens = screens.toLowerCase().split(', '));
console.log(getRollbackMessage());
console.log(getServicePercentPrices());
