const title = document.getElementsByTagName('h1')[0];
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const plusButton = document.querySelector('.screen-btn');
const percentItems = document.querySelectorAll('.other-items.percent');
const numberItems = document.querySelectorAll('.other-items.number');
const range = document.querySelector('.rollback input[type="range"]');
const rangeValue = document.querySelector('.rollback span.range-value');
const totalInput = document.getElementsByClassName('total-input');
let total = totalInput[0];
let quantity = totalInput[1];
let allServicePrices = totalInput[2];
let fullTotalCount = totalInput[3];
let profitNoRollbackInput = totalInput[4];
let screens = document.querySelectorAll('.screen');

const appData = {
    rollback: 0,
    title: '',
    screens: [],
    adaptive: true,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    profitNoRollback: 0,
    screenPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    screensQuantity: 0,

    init: function() {
        appData.addTitle();
        plusButton.addEventListener('click', appData.addScreenBlock);
        startBtn.addEventListener('click', appData.start); 
        range.addEventListener('input', appData.getRollback);
        range.addEventListener('change', appData.getRollback);
    },

    addTitle: function() {
        document.title = title.textContent;
    },

    showResult: function() {
        total.value = appData.screenPrice;
        allServicePrices.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        profitNoRollbackInput.value = appData.profitNoRollback;
        quantity.value = appData.screensQuantity;
    },

    addScreens: function() {
        screens = document.querySelectorAll('.screen');
        appData.screens = [];
        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

                appData.screens.push({
                id: index, 
                name: selectName, 
                count: +input.value,
                price: +select.value * +input.value,
            })
        }) 
        for (let i = 0; i < appData.screens.length; i++) {
            if (appData.screens[i].name === 'Тип экранов' || appData.screens[i].count === 0) {
                appData.screens = [];
            }
        }   
    },

    addServices: function() {
        percentItems.forEach(function(item){
           const check = item.querySelector('input[type=checkbox]');
           const label = item.querySelector('label');
           const input = item.querySelector('input[type=text]');

           if (check.checked) {
            appData.servicesPercent[label.textContent] = +input.value;
           }
        })

        numberItems.forEach(function(item){
           const check = item.querySelector('input[type=checkbox]');
           const label = item.querySelector('label');
           const input = item.querySelector('input[type=text]');

           if (check.checked) {
            appData.servicesNumber[label.textContent] = +input.value;
           }
        })
    },

    addScreenBlock: function() {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },

     getRollback: function(event) {
       rangeValue.textContent =  event.target.value;
       appData.rollback = event.target.value;
    },

    addPrices: function () {
        appData.screenPrice = appData.screens.reduce(function(sum, accum){
            return sum + accum.price;
        }, 0)

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

         appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
         appData.profitNoRollback = Math.ceil(appData.fullPrice - appData.fullPrice * (appData.rollback / 100));

         appData.screensQuantity = 0;
         for (let i = 0; i < appData.screens.length; i++) {
             appData.screensQuantity += appData.screens[i].count;
         }
    },

    logger: function() {
        for (let key in appData) {
            console.log(`${key}: ${appData[key]}`);
        }
    },

    start: function() {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        console.log(appData);
        //appData.logger();
        appData.showResult();
    },
}

appData.init();
