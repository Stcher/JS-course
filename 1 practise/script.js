
let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    toggleVisibleMyDB() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
      },
    howManyFilms() {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    checkFilm() {
        for(let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('Во сколько оцените?', '');
            personalMovieDB.movies[a] = b;
                if(a === null && b === null ||  a.length > 50 && b.length > 50 || a === "" && b === "" ) {
                    i--;
                }
        }
    },
    showMyDB() {
        if(personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres() {
        for(let i = 1; i <= 3; i++) {
            const c = prompt( `Ваш любимий жанр під номером ${i}` );
            personalMovieDB.genres[i - 1] = c;
            if(c === null || c === "" ) {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимий жанр # ${i + 1} - це ${item}`);
        });
        // my solution also works
        // let genresList = Object.values(personalMovieDB.genres);
        // for(let j = 0; j < personalMovieDB.genres.length; j++) {
        // const genreResult = genresList.forEach((element) => 
        // {
        //         return console.log(`Любимий жанр # ${j} - це ${genresList[j]}`);
        //     });
        // }
    },
    checkVisitorRate() {
        if(personalMovieDB.count < 10) {
            alert("Not enough films");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Not bad");
        } else if(personalMovieDB.count > 30) {
            alert("Nigga you mad!");
        } else {
            alert("Nigga wtf");
        }
    }
};
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.howManyFilms();
personalMovieDB.checkFilm();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.checkVisitorRate();









// Or u can use it by adding personalMovieDB.movies[lastFilm] = filmRate //


// function getMathResult(a,b) {
//     let number = a;
//     let result = a;
//     for (let i = 0; i < b - 1; i++) {
//             result += "---";
//             number += a;
//             result += number;
//     }
//     if(typeof b === "string" || b === 0 || b < 0 ) {
//         return a;
//     }
// }
// function sayHello(name) {
//     let a = `Привет,${name}`;
//     return console.log(a);
// }
// sayHello("Alex");

// function returnNeighboringNumbers(num) {
//     let a = [num - 1, num, num + 1];
//     return console.log(a);
// }
// returnNeighboringNumbers(5);

// const fruit = "deda";
// console.log(fruit.slice(1));
// console.log(fruit.substring(5,12));

// function ucFirst(params) {
//     return console.log(params[0].toUpperCase()+params.slice(1));
// }
// ucFirst("penisdeda");

// const passport = {
//     name: 'Ivan',
//     surname: 'Dick',
//     sex: 'male',
//     country: {
//         countryName: 'Ukraine',
//         state: 'Ivano-Frankivsk'
//     },
//     ages: 21,
// };
// console.log(Object.keys(passport.country).length);
// console.log(Object.keys(passport.country).length);

// arr = [1,2,3];
// arr.pop(2);
// // console.log(arr);
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%',
//         },
//         exp: '1 month',
//     },
//     showAgeAndLangs: function() {
//         let lang = personalPlanPeter.skills.languages;
//         let toUpper = function(x){
//             return x.toUpperCase();
//         };
//         return console.log(`Мне ${personalPlanPeter.age} и я владею язиками:${lang.map(toUpper)}`);
//       }
// };
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



// function showProgrammingLangs(plan) {
//     return console.log(`Язык js изучен на ${plan.skills.programmingLangs.js} 
//     Язык php изучен на ${plan.skills.programmingLangs.php}`);
// }
// showProgrammingLangs(personalPlanPeter);
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     let toUpper = function(x){
//         return x.toLowerCase();
//     };
//     arr.forEach(element => console.log(toUpper(element)));
// }
// standardizeStrings(favoriteCities);
// const someString = 'This is some strange string';

// function reverse(str) {
//         return str.split("").reverse().join("");
// }
// reverse(someString)


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// function availableCurr(arr, missingCurr) {
//     const found = arr.indexOf(missingCurr);
//     if (found > -1) {
//     arr.splice(found, 1);
//     }
//     console.log("Доступні валюти:")
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }

// }
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY');


