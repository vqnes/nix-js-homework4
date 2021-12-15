/*
Задание No5. Создайте список
Напишите интерфейс для создания списка.
Для каждого пункта:
1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
2. Создавайте элемент <li> и добавляйте его к <ul>.
3. Процесс прерывается, когда пользователь нажимает Esc или вводит пустую
строку.
Все элементы должны создаваться динамически.
Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный
текст.
*/
function createList() {
    let ul = document.createElement('ul');
    
    while (true) {
        let text = prompt('Введите текст пункта');

        if (text === null || text.trim() === '') {
            break;
        }

        let li = document.createElement('li');
        li.textContent = text;

        ul.append(li);
    }

    return ul;
}

document.body.prepend(createList());
