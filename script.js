const appData = {
    rollback: 25,
    title: '',
    screens: '',
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    screenPrice: 0,
    service1: '',
    service2: '',

    isNumber: function(str) {
        if (str === null || str[0] === ' ' || str[str.length-1] === ' ') {
        return false;
        }
        return !isNaN(parseFloat(str)) && isFinite(str);
    },

    asking: function() {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    
    do{
        appData.screenPrice = prompt('Сколько будет стоить данная работа?')
    }
        while (!appData.isNumber(appData.screenPrice));
    appData.screenPrice = +appData.screenPrice;

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');   
    },

    getAllServicePrices: function() {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1');
        } else if(i === 1) {
            appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'service2');
        }
         do {
            sum = prompt('Сколько это будет стоить?');
        }
            while (!appData.isNumber(sum))  
        sum = +sum;
        sum += sum;
        }  
    return sum;
    },

    getFullPrice: function(screen, service) {
    return screen + service;
    },

    getTitle: function() {
    appData.title = appData.title.trim();
    return appData.title[0].toUpperCase()+appData.title.slice(1).toLowerCase();
    },

    getServicePercentPrices: function(per, resultPrice) {
    return Math.ceil(resultPrice - resultPrice * (per / 100));
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
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.servicePercentPrice = appData.getServicePercentPrices(appData.rollback, appData.fullPrice); 
        appData.title = appData.getTitle();
        appData.logger();
    },
}

appData.start();