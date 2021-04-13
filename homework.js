// 1) Створити масив з 20 чисел та
let numArr = [15, 24, 5, 58, 23, 56, 23, 12, 34, 54, 11, 22, 52, 89, 25, 111, 797, 235, 1245, 678];
// a) відсортувати його від меншого до більшого.
// let numSorted = numArr.sort((a,b) => {
//     return a - b
// })


// b) відсортувати його від більшого до меншого.
// let numSorted = numArr.sort((a,b) => {
//     return b - a
// })

// console.log(numSorted);

// c) Відфілтрувати числа які є кратними 3.
// let numFilter = numArr.filter((value) => {
//     return value % 3 === 0;
// })
// console.log(numFilter);

// d) Відфілтрувати числа які є більшими за 10.

// let numFilter = numArr.filter((value) => {
//     return value > 10;
// })
// console.log(numFilter);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// numArr.forEach((value) => {
//     document.write(`${value}  `)
// })

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let numX3 = numArr.map(value => {
//     return value*3
// })
//
// console.log(numX3);

// g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let sum = numArr.reduce((acc, currentValue) => {
//     return acc + currentValue;
// })
// console.log(sum);


// 2) Створити масив з 20 стрічок та:
let str = ['victorious', 'ferry', 'callous', 'airport', 'branch', 'legs', 'display', 'sneeze', 'care', 'food', 'noise', 'goofy', 'get', 'abaft',
    'smart', 'imprison', 'receive', 'past', 'thoughtless', 'restrain']

// a) Відсортувати його в алфавітному порядку
// let strSort = str.sort();
// console.log(strSort);

// b) Відсортувати в зворотньому порядку
// let strReverse = str.sort((a, b) => {
//     if (a < b) {
//         return 1
//     }
//     return -1
// })
//
// console.log(strReverse);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let strLenght = str.filter((value) => {
//     return value.length > 4;
// } )
//
// console.log(strLenght);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let map = str.map((value) => {
//     return `Sam says ${value}`
// })
//
// console.log(map);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :

const users = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}
    ];


// a) відсортувати його за  віком (зростання , а потім окремо спадання)
//зростання
// let ageSort = users.sort((a, b) => {
//     return a.age - b.age
// })
// console.log(ageSort);

//спадання
// let ageSort = users.sort((a, b) => {
//     return b.age - a.age
// })
// console.log(ageSort);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//зростання
// let charSort = users.sort((a, b) => {
//     return a.name.length - b.name.length
// })
//
// console.log(charSort);

//спадання
// let charSort = users.sort((a, b) => {
//     return b.name.length - a.name.length
// })
//
// console.log(charSort);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// let jsonClone = JSON.stringify(users)
// let usersClone = JSON.parse(jsonClone)
// let idCreate = users.map((user, index) => {
//    user.id = index + 1
//     return user
// })
// console.log(usersClone);
// console.log(users);

// d) відсортувати його за індентифікатором
// let idSort = users.sort((a, b) => {
//     return b.id - a.id
// })
//
// console.log(idSort);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// let usersApart = users.reduce((acc, value) => {
//     if (value.isMarried) {
//         value.apartaments = true;
//         acc.push(value);
//     }
//     return acc
// }, [])
// console.log(usersApart)

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________

const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// let motor = cars.filter((value) => {
//     if (value.volume > 3) {
//         return cars
//     }
// })
// console.log(motor);

// - двигун = 2л
// let motor = cars.filter((value) => {
//     if (value.volume === 2) {
//         return cars
//     }
// })
// console.log(motor);

// - виробник мерс
// let mers = cars.filter((value) => {
//     if (value.producer === 'mercedes') {
//         return cars
//     }
// })
// console.log(mers);
//


// - двигун більше 3х літрів + виробник мерседес
// let mers = cars.filter((value) => {
//     if (value.volume > 3 && value.producer === 'mercedes') {
//         return cars
//     }
// })
// console.log(mers);


// - двигун більше 3х літрів + виробник субару
// let subaru = cars.filter((value) => {
//     if (value.volume > 3 && value.producer === 'subaru') {
//         return cars
//     }
// })
// console.log(subaru);

// - сили більше ніж 300
// let power = cars.filter((value) => {
//     if (value.power > 300) {
//         return cars
//     }
// })
// console.log(power);

// - сили більше ніж 300 + виробник субару
// let power = cars.filter((value) => {
//     if (value.power > 300 && value.producer === 'subaru') {
//         return cars
//     }
// })
// console.log(power);

// - мотор серіі ej
// let ejMotor = cars.filter((value) => {
//     if (value.engine.startsWith('ej')) {
//         return cars
//     }
// })
// console.log(ejMotor);


// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let subaruEj = cars.filter((value) => {
//     if (value.engine.startsWith('ej') && value.power > 300 && value.producer === 'subaru' ) {
//         return cars
//     }
// })
// console.log(subaruEj);

// - двигун меньше 3х літрів + виробник мерседес
// let mers = cars.filter((value) => {
//     if (value.power < 300 && value.producer === 'mercedes' ) {
//         return cars
//     }
// })
// console.log(mers);

// - двигун більше 2л + сили більше 250
// let tiny = cars.filter((value) => {
//     if (value.power > 250 && value.volume > 2 ) {
//         return cars
//     }
// })
// console.log(tiny);

// - сили більше 250  + виробник бмв
// let tiny = cars.filter((value) => {
//     if (value.power > 250 && value.producer === 'bmw' ) {
//         return cars
//     }
// })
// console.log(tiny);


const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID
// let idSort = usersWithAddress.sort((a, b) => {return b.id - a.id})
// console.log(idSort);

// -- Відсортувати їх по ID в зворотньому порядку
// let idSort = usersWithAddress.sort((a, b) => {return a.id - b.id})
// console.log(idSort);

// -- Відсортувати по віку
// let ageSort = usersWithAddress.sort((a, b) => {return b.age - a.age});
// console.log(ageSort);

// -- Відсортувати по віку в зворотньому порядку
// let ageSort = usersWithAddress.sort((a, b) => {return a.age - b.age});
// console.log(ageSort);

// -- Відсорутвати по імені
// let nameSort = usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1
//     }
//     return -1
// })
// console.log(nameSort);

// -- Відсорутвати по назві вулиці
// let adressSort = usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1
//     }
//     return -1
// })
// console.log(adressSort);

// -- Відсорутвати по номеру будинку
// let numberSort = usersWithAddress.sort((a, b) => {
//     return a.address.number - b.address.number
// })
// console.log(numberSort);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// let zoomerFilter = usersWithAddress.filter(value => {
//     return value.age < 30
// })
//
// console.log(zoomerFilter);

// -- Залишити тільки одружених
// let marriedFilter = usersWithAddress.filter(value => {
//     return value.isMarried === true
// })
// console.log(marriedFilter);

// -- Залишити тільки одружених, які молодні за 30
// let marriedFilter = usersWithAddress.filter(value => {
//     return (value.isMarried === true && value.age < 30)
// })
// console.log(marriedFilter);

// -- Залишити лише тих, в кого парні номери будинків.
// let onlyParny = usersWithAddress.filter(value => {
//     return value.address.number % 2 === 0
// })
// console.log(onlyParny);

// -- Порахувати загальний вік всіх людей. (reduce)

// let ageSum = usersWithAddress.reduce((acc, currentValue) => {
//     return acc + currentValue.age
// }, 0)
//
// console.log(ageSum);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
// let child = usersWithAddress.reduce((acc, value) => {
//     if (value.isMarried && value.age > 30) {
//         value.child = true;
//         acc.push(value);
//     }
//     return acc
// }, [])
//
// console.log(child);
