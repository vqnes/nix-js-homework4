/*
Задание No6. Вставьте HTML в список
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
<ul id="ul">
<li id="one">1</li>
<li id="two">4</li>
</ul>
*/
let oneLi = document.querySelector('#ul > #one');
oneLi.insertAdjacentHTML('afterend', '<li></li>');
