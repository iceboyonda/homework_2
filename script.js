const student = "Зима Дмитрий Владимирович";

document.getElementById("student").innerHTML = student;



const v1 = array(16).fill([4,1,2,5,2,2,0]); // Пары-пн-вт-ср-чт-пт-сб-вс (Расписание пар первого семестра-в1){

const s1 = array(1).fill([0,0,2,2,0,0,0]);  // (с1 расписание экзаменов первого семестра)

const v2 = array(23).fill([1,4,4,2,5,0,0]); // (v2 второй семестр)

const s2 = array(1).fill([0,0,2,2,2,0,0]); // (с2 расписание экзаменов второго семестра)

const k =  array(2).fill([0,0,0,0,0,0,0]); //}МАССИВЫ (КАКОЙ ДЕНЬ И СКОЛЬКО ПАР) (к-каникулы)

const array = [v1, s1, k, v2, s2]; //массив с массивами 


const cenaproezda = 120; // Цена проезда

const playStation = 23500; // Цена приставки (Сколько надо накопить)

const dalinaproezd = 150; // (Сколько дают на проезд в день)

const dalinaobed = 250; // (Сколько дают на обеды в день)


let cenaproezda_diff = dalinaproezd - cenaproezda; // считает сколько чистыми осталось с проезда

let day = 0; // Переменная дней

let week = 0; // Переменная недель

let piggybank = 0; //Сколько у нас есть (Число увеличивается каждый день) КОПИЛКА


for (let i = 0; i < array.length; i++) { //i++ прибавление единицы пока i не станет равным массиву с массивами
    
    for (let j = 0; j < array[i].length; j++) { //Если переменная j>i делаем j++ пока она не станет равной array i

        week = week + 1; // Если к J+1 то week+1 (Счетчик недель)

        console.log('номер недели:' + week); //Вывод того что просчитали сверху


        for (let k = 0; k < array[i][j].length; k++) { //Считаем дни (переменная К по сути дни) Каждый тик цикла j = 7 дней(К)

            let element = array[i][j][k]; // <-- все данные циклов

            day = day +1; // Считаем дни

            console.log('номер дгя: + day'); // Выводим посчитанные дни

            if (element > 0) { // Проверяет, едет ли ученик в колледж. Если элемент больше нуля, он складывает все деньги и выдает результ, записывает в переменную piggybank-копилка

                piggybank = piggybank + cenaproezda_diff; // Проверка, накопил\нет

                if (element <= 3) { //Проверяет кол-во пар в день. Если есть пары и их меньше или равно трем, то откладывает еще и с обедов.

                    piggybank = piggybank + dalinaobed; // Докидывает с обедов деньги к деньгам с проездов

                    console.log('денег:' + piggybank) // Выводит деньги, получившиеся расчетами сверху

                } 

            }

            if(playStation <= piggybank) break //Закрытие зикла номер 1, если накопил 
        
        }

    if(playStation <=  piggybank) break //Закрытие зикла номер 2, если накопил 

    }

    if(playStation <= piggybank) break //Закрытие зикла номер 3, если накопил 

}

if(playStation <= piggybank){console.log('Накопил', piggybank, day) // После проверки на накопление, выдает ответ при успехе

}

else {

    console.log('Накопить не получилось', day, piggybank) // После проверки на накопление, выдает ответ при неудаче (День накопления, сколько получилось накопить, даже при недостатке на Консоль)

}

// K-ДНИ    
// J-НЕДЕЛИ
// I-МАССИВЫ
// element-Грубо говоря полный итог(Подсчет всех данных)