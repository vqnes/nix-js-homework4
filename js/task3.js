/*
Задание No3. Поиск элементов
Вот документ с таблицей и формой. Как найти?...
• Таблицу с id="age-table".
• Все элементы label внутри этой таблицы (их три).
• Первый td в этой таблице (со словом «Age»).
• Форму form с именем name="search".
• Первый input в этой форме.
• Последний input в этой форме.
Используйте код файла table.html и браузерные инструменты разработчика:
    *код из моего файла task3.html*
*/
let table = document.querySelector('table[id=age-table]');
console.log(table);

let td = table.querySelector('td');
console.log(td.textContent);

let labels = table.getElementsByTagName('label');
console.log(labels.length);

let form = document.querySelector('form[name=search]');
console.log(form);

let inputs = form.getElementsByTagName('input');
console.log(inputs[0]);

console.log(inputs[inputs.length - 1]);
