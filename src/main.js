import jojoba from "./scripts/helper";
console.log(jojoba(3, 5, 50)); // при дефолтному імпорті (add) змінну можна називати як завгодно (jojoba)(яблуко в коробці)

import { makeMessage1, levels, userName as newName } from "./scripts/helper"; // іменовані імпорти {.... , ... , .... }
console.log(makeMessage1("Jacob")); // "Welcome, Jacob!"
console.log(levels); // ["easy", "medium", "hard"]


const userName = "Oopsala";

console.log(userName);

console.log(newName); // якщо в main.js вже є userName і вони конфліктують (помилкка в консолі) - userName as newName


// Імпорт простору імен - імпорт цілого файлу

import * as services from "./scripts/helper";  // це імпорт всього з файлу helper.js

console.log(services.userName); // 
console.log(services.makeMessage1()); // 



import * as user from "./scripts/helper"; // теж саме (export const name = "Mango"; export const age = 26;export const email = "mango@mail.com";)

console.log(user.name);
console.log(user.age);
console.log(user.email);


import jojoba1 from "./scripts/page-2";
console.log(jojoba1());

import { nanoid } from 'nanoid'
console.log(nanoid()); // генератор випадкових ключів // tlIh6d_Y-2ZBUKnWdDIl8 // JnzXCO-sTGC-14CUJ0HjO // vtsewqJh_RI22GsGwKko-
