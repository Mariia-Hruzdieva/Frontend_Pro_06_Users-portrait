let birthYear = prompt('Вкажи твій рік народження:');
let yourCity = prompt('В якому місті ти живеш?');
let favouriteSport = prompt('Який твій улюблений вид спорту: футбол, баскетбол, бокс?');

let sentenceOne = '';
switch (birthYear) {
    case (null):
    case (birthYear):
        if (isNaN(birthYear)) {
            sentenceOne = 'Шкода, що Ви не захотіли ввести своій рік народження.';
            break;
        }
    case (birthYear):
        const currentYear = new Date().getFullYear();
        const age = (currentYear - +birthYear);

        sentenceOne = 'Тобі ' + age + ' років.';
        break;
}

let sentenceTwo = '';
switch (yourCity) {
    case null:
        sentenceTwo = 'Шкода, що Ви не захотіли ввести своє місто.';
        break;
    case 'Київ':
        sentenceTwo = 'Ти живеш у столиці України.';
        break;
    case 'Вашингтон':
        sentenceTwo = 'Ти живеш у столиці США.';
        break;
    case 'Лондон':
        sentenceTwo = 'Ти живеш у столиці Великої Британії.';
        break;
    default:
        sentenceTwo = 'Ти живеш у місті ' + yourCity + '.';
}

let sentenceThree = '';
switch (favouriteSport) {
    case null:
        sentenceThree = 'Шкода, що Ви не захотіли ввести свій улюблений спорт.';
        break;
    case 'футбол':
        sentenceThree = 'Футбол - круто! Хочеш стати як Роналду?';
        break;
    case 'баскетбол':
        sentenceThree = 'Баскетбол - круто! Хочеш стати як Майкл Джордан?';
        break;
    case 'бокс':
        sentenceThree = 'Бокс - круто! Хочеш стати як Джо Луіс?';
        break;
    default:
        sentenceThree = 'Спорт: ' + favouriteSport;
}

const fullText = sentenceOne + '\n' + sentenceTwo + '\n' + sentenceThree;

alert(fullText);
