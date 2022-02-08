const calculator = document.getElementsByTagName('h1')[0];
const buttons = document.getElementsByClassName('handler_btn');
const plusButton = document.querySelector('.screen-btn');
const percentItems = document.querySelectorAll('.other-items.percent');
const numberItems = document.querySelectorAll('.other-items.number');
const range = document.querySelector('.rollback input[type="range"]');
const rangeValue = document.querySelector('.rollback span.range-value');
const totalInput = document.getElementsByClassName('total-input');
let screenPrice = totalInput[0];
let quantity = totalInput[1];
let allServicePrices = totalInput[2];
let fullPrice = totalInput[3];
let servicePercentPrice = totalInput[4];
let screens = document.querySelectorAll('.screen');

console.log(calculator);
console.log(buttons);
console.log(plusButton);
console.log(percentItems);
console.log(numberItems);
console.log(range);
console.log(rangeValue);
console.log(totalInput);
console.log(screenPrice);
console.log(quantity);
console.log(allServicePrices);
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(screens);
/*
const appData = {
    rollback: 25,
    title: '',
    screens: [],
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    screenPrice: 0,
    services: {},

    isNumber: function(str) {
        if (str.includes(' ')) {
        return false;
        }
        return !isNaN(parseFloat(str)) && isFinite(str);
    },

    asking: function() {
        do{
            appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        } while (appData.isNumber(appData.title));
    
  
        for (let i = 0; i < 2; i++){
        let name;
            do{
                name = prompt('Какие типы экранов нужно разработать?');
            } while (appData.isNumber(name))
         
        let price = 0;
           do{
            price = prompt('Сколько будет стоить данная работа?')
            } while (!appData.isNumber(price));
        appData.screens.push({id: i, name: name, price: +price,})
        }

        for (let i = 0; i < 2; i++) {
        let name;
            do{
                name =  prompt('Какой дополнительный тип услуги нужен?');
            } while (appData.isNumber(name));
            if (name in appData.services) {
                name = name + i;
            }
        let price = 0;
            do {
                price = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(price)) 
            
        appData.services[name] = +price;
        }
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');   
    },

    addPrices: function () {
        for (let service in appData.services) {
            appData.allServicePrices += appData.services[service];
        }

        appData.screenPrice = appData.screens.reduce(function(sum, accum){
            return sum + accum.price;
        }, 0)
    },

    getFullPrice: function(screen, service) {
        appData.fullPrice = screen + service;
    },

    getTitle: function() {
        appData.title = appData.title.trim();
        appData.title = appData.title[0].toUpperCase()+appData.title.slice(1).toLowerCase();
    },

    getServicePercentPrices: function(per, resultPrice) {
        appData.servicePercentPrice = Math.ceil(resultPrice - resultPrice * (per / 100));
    },

    getRollbackMessage: function(price) {
    if(price >= 30000) {
        return 'Даем скидку в 10%';
        } else if(price >= 15000 && price > 30000) {
        return 'Даем скидку в 5%';
        } else if(price < 15000 && price > 0) {
        return 'Скидка не предусмотрена';
        } else {
        return 'Что то пошло не так';
        }
    },

    logger: function() {
        for (let key in appData) {
            console.log(`${key}: ${appData[key]}`);
        }
    },

    start: function() {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.getServicePercentPrices(appData.rollback, appData.fullPrice); 
        appData.getTitle();

        appData.logger();
    },
}

appData.start();
*/