// Скасування тайм-ауту


// Якщо з якихось причин нам потрібно скасувати відкладений виклик функції, зареєстрованої тайм-аутом, використовується метод clearTimeout(id).
// Метод clearTimeout(id)приймає ідентифікатор таймера та “очищає його”, тобто видаляє реєстрацію відкладеного виклику функції з черги.

import { name } from "./helper";



const setBtn = document.querySelector(".js-set");
const clearBtn = document.querySelector(".js-clear");
let timeoutId;

setBtn.addEventListener("click", () => {
  timeoutId = setTimeout(() => {  // timerID
    console.log("I love async JS!");
  }, 2000);
});

clearBtn.addEventListener("click", () => {
  clearTimeout(timeoutId);
  console.log(`Timeout with id ${timeoutId} has stopped!`);
});


// можливість передати параметри до колбеку

function logger(name, secondName) {
    console.log(`Hello ${name} ${secondName}`)    
}

setTimeout(logger, 1000, "Alice", "Franko"); //  після 2-го аргумента ми можемо додати передати додаткові параметри (name, secondName), які будуть передані в нашу ф-ю.

// також можна передати в аргументи об'єкт.

function logger1({name, secondName, str}) {
    console.log(`Hello ${name} ${secondName}.`, str)    
}

setTimeout(logger1, 1000, { name: "Alice", secondName: "Franko", str: "Your room is ready. Welcome onboard!" });


// kahoot задачка //
for (let i = 3; i > 0; i--) {
    console.log(i);    
    const delay = i * 1000;
    setTimeout(() => console.log(i), delay); // logs 3, 2, 1 with delays // 1, 2, 3
} 
// Чому тка послідовність?  
// тут, якщо при синхронному коді в циклі у нас послідовність від більшого до меншого 3, 2, 1. (рядок: 45) 
// при  const delay = i * 1000; ми отримаємо затримку: 3000, 2000, 1000 мс відповідно для 3, 2, 1 // рядок: 60

for (let i = 3; i > 0; i--) {       
    const delay = i * 1000;  
    console.log(delay);    
} 
// відповідго наші знчення будуть виводитись в консоль з відповідною затримкою: 3 - через 3000мс, 2 - через 2000мс, 1 - через 1000мс!!!
// тому результат: 1, 2, 3
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// метод setInterval(callback, delay, args)

 // setInterval(() => {
//     console.log("jojoba");  
// }, 2500)

// так само як setTimeot ас. метод, приймає першим аргументом ф-ю, другим - час, але на відміну від одноразової дії, інтревал буде повторювати ф-ю через заданий інтервал безкінечно. Додамо в зовнішню функцію аргумент(str), який буде переданий в нашу ф-ю.

//створимо ф-ю зовні

const logger2 = (str) => {
    console.log(`Hola!${str}`);    
}
 
setInterval(logger2, 2000, "Muchachos!");

// після 2-го аргумента ми можемо додати передати додаткові параметри
// давайте тепер додамо всередині функції(name, secondName), які будуть передані в нашу ф-ю.

const logger3 = () => {
    console.log(`Bongiorno,`);    
}
 
setInterval((name1) => {
    console.log(`Bongiorno, ${name1}`);
    
}, 2000, "Mango!");

// ми передали у ф-ю параметр "name", аналогічно ці дані ("Alice") передажмо після часу нашої затримки 5000 мс

// Очищення інтревалу за допомогою clearInterval(intervalID)
// setInterval так само,як і setTimeout повертає нам в момент свого виклику унікальний ідентифікатор (id)

// зробимо всередині КБФ

const intervalID = setInterval(() => {
    console.log("trololo");
    
}, 2000);
console.log(intervalID);

setTimeout(() => {
    clearInterval(intervalID);
}, 5000)
 
// для скасування/очищення інтервалу використаємо setTimeout із затримкою на 5000 мс, де запуститься КБФ, в тілі якої ми викликаємо метод clearInterval(intervalId)
// наша функція відпрацює через 2 сек, 4 сек, а через секунду припиниться, тому що на 5 сек ми зупинили нроботу нашого інтервалу.


///////////////////////////////////////////////
// задачка - 2 половина лекції

/**
 * - показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - ховаємо через певний час
 * - ховаємо при кліці
 * - не забуваємо читстити таймер * 
 */

const NOTIFICATION_DELAY = 3000;

const notification = document.querySelector(".js-alert"); // отримаємо
notification.addEventListener("click", onClick);
let timerID = null
// відобразимо через функцію

showNotification();

function onClick() {
    // notification.classList.remove("is-visible");
    hideNotification();
    clearTimeout(timerID) // при кліці повідомлення в консолі відсутнєб тому що ми осичтили наш таймаут    
}

function showNotification() {
    notification.classList.add("is-visible"); // додаємо клас is-visible, щоб показати повідомлення, щоб показати повідомлення і викликаємо ф-ю зверху.
}

timerID = setTimeout(() => {
    console.log("setTimeout");
    //notification.classList.remove("is-visible"); // тут прибираємо клас is-visible, щоб приховати повідомлення
    hideNotification();
}, NOTIFICATION_DELAY) // через цей час функція спрацює

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// але у нас дублюється код!!!! == notification.classList.remove("is-visible"); ==
// тому застосуємо тут ф-ю для запобігання дублювання коду, винесемо шмат, що дублюєсться в окрему функцію.

function hideNotification() {
    notification.classList.remove("is-visible");
}

// але є ще один ньюанc: у нас в консолі висить повідомлення setTimeout
// приберемо його за допомогою clearTimeout але спочатку ідентифікатор "приклеїмо"
// створимо змінну за допомогою кл. слова let timerId = null;(глобальна змінна)
// коли ми сторюємо setTimeout він буде повертати свій ідентифікатор, ами його будемо зберігати в timerID
// ми взяли функцію setTimeout і перед нею поставили 
// timerId = setTimeout(() => {
    //console.log("setTimeout");
    //notification.classList.remove("is-visible"); 
    //notification.classList.remove("is-visible"); 
    // },
    // NOTIFICATION_DELAY)


///////////////===========PROMISE============///////////////////

 

  

