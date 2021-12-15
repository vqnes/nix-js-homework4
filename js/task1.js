/*
Задание No1. Дочерние элементы в DOM
Для страницы:
<html>
<body>
<div>Пользователи:</div>
<ul>
<li>Джон</li>
<li>Пит</li>
</ul>
</body>
</html>
Как получить:
• Напишите код, который получит элемент <div>?
• Напишите код, который получит <ul>?
• Напишите код, который получит второй <li> (с именем Пит)?
*/

let div = document.querySelector('div');
console.log(div.textContent);

let ul = document.querySelector('ul');
console.log(ul.innerHTML);

let li = document.getElementsByTagName('li')[1];
console.log(li.textContent);
