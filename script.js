let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = +prompt('Сколько будет стоить данная работа?', 1200);
//screens = screens.toLowerCase().split(', ');
let rollback = 25;
let adaptive = prompt('Нужен ли адаптив на сайте?', 'да/нет');
let service1 = prompt('Какой дополнительный тип услуги нужен?', 'service1');
let servicePrice1 = +prompt('Сколько это будет стоить?', 1000);
let service2 = prompt('Какой дополнительный тип услуги нужен?', 'service2');
let servicePrice2 = +prompt('Сколько это будет стоить?', 2000);
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let percent = fullPrice * (rollback/100);
let servicePercentPrice = Math.ceil(fullPrice - percent);
console.log(servicePercentPrice);

if(fullPrice>=30000) {
    console.log('Даем скидку в 10%');
} else if(fullPrice>=15000 && fullPrice<30000) {
     console.log('Даем скидку в 5%');
} else if(fullPrice<15000 && fullPrice>0) {
    console.log('Скидка не предусмотрена');
} else {
      console.log('Что то пошло не так');
}

/*
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(screens);
console.log(percent);
*/