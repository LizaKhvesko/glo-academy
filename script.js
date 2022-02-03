let rollback = 25;

let title;
let screens;
let adaptive;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let screenPrice;
let service1;
let service2;

const isNumber = function(num) {
    if (num === null || num[0] === ' ' || num[num.length-1] === ' ') {
        return false;
    }
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const asking = function() {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    
    do{
        screenPrice = prompt('Сколько будет стоить данная работа?')
    }
        while (!isNumber(screenPrice));
    screenPrice = +screenPrice;

    adaptive = confirm('Нужен ли адаптив на сайте?');   
}

const getAllServicePrices = function() {
   let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1');
        } else if(i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'service2');
        }
         do {
            sum = prompt('Сколько это будет стоить?');
        }
            while (!isNumber(sum))  
    sum = +sum;
    sum += sum;
    }  
    return sum;
}

function getFullPrice(screen, service) {
    return screen + service;
}

function getTitle() {
    title = title.trim();
    return title[0].toUpperCase()+title.slice(1).toLowerCase();
}

function getServicePercentPrices(per, resultPrice) {
    return Math.ceil(resultPrice - resultPrice * (per / 100));
}

const showTypeOf = function(variable) {
    return typeof variable;
} 

const getRollbackMessage = function(price) {
    if(price >= 30000) {
        return 'Даем скидку в 10%';
} else if(price >= 15000 && price > 30000) {
        return 'Даем скидку в 5%';
} else if(price < 15000 && price > 0) {
        return 'Скидка не предусмотрена';
} else {
      return 'Что то пошло не так';
}
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(rollback, fullPrice); 
title = getTitle();

console.log(showTypeOf(title));
console.log(showTypeOf(screenPrice));
console.log(showTypeOf(adaptive));
console.log(screens = screens.toLowerCase().split(', '));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);