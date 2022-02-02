let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 1200);
let rollback = 25;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1');
let servicePrice1 = +prompt('Сколько это будет стоить?', 1000);
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'service2');
let servicePrice2 = +prompt('Сколько это будет стоить?', 2000);

const getAllServicePrices = function(price1, price2) {
    return price1+price2;
}

function getFullPrice(screen, service) {
    return screen + service;
}

function getTitle() {
    title = title.trim();
    return title[0].toUpperCase()+title.slice(1).toLowerCase();
}

function getServicePercentPrices(per, resultPrice) {
    return Math.ceil(resultPrice - resultPrice*(per/100))
}

const showTypeOf = function(variable) {
    return typeof variable;
} 

const getRollbackMessage = function(price) {
    if(price>=30000) {
    return 'Даем скидку в 10%';
} else if(price>=15000 && price<30000) {
     return 'Даем скидку в 5%';
} else if(price<15000 && price>0) {
    return 'Скидка не предусмотрена';
} else {
      return 'Что то пошло не так';
}
}

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
let fullPrice = getFullPrice(screenPrice, allServicePrices);
let servicePercentPrice = getServicePercentPrices(rollback, fullPrice); 
title = getTitle();

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));
console.log(screens = screens.toLowerCase().split(', '));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);