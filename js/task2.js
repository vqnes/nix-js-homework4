/*
Задание No2. Выделите ячейки по диагонали
Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
Вам нужно получить из таблицы <table> все диагональные <td> и выделить их,
используя код:
// в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red';
*/
function createTable(amountRows, amountColumns) {
    let table = document.createElement('table');

    for (let i = 0; i < amountRows; i++) {
        let tr = document.createElement('tr');

        for (let j = 0; j < amountColumns; j++) {
            let td = document.createElement('td');
            td.textContent = `${i + 1}:${j + 1}`;

            tr.append(td);
        }

        table.append(tr);
    }

    return table;
}

function paintingDiagonalTableElems(table) {
    let allTr = table.querySelectorAll('tr');
    let allTd = table.querySelectorAll('td');

    let distanceDiagonalElems = allTd.length / allTr.length + 1;

    for (let i = 0; i < allTd.length; i += distanceDiagonalElems) {
        allTd[i].style.backgroundColor = 'red';
    }

    return table;
}

let table = createTable(5, 5);
paintingDiagonalTableElems(table);
document.body.prepend(table);
