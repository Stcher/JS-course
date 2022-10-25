
let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for(let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('Во сколько оцените?', '');
    personalMovieDB.movies[a] = b;
        if(a === null && b === null ||  a.length > 50 && b.length > 50 || a === "" && b === "" ) {
            i--;
        }
}
if(personalMovieDB.count < 10) {
    alert("Not enough films");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Not bad");
} else if(personalMovieDB.count > 30) {
    alert("Nigga you mad!");
} else {
    alert("Nigga wtf");
}

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const c = prompt( `Ваш любимий жанр під номером ${i}` );
        personalMovieDB.genres[i - 1] = c;
    }
}
writeYourGenres();

function showMyDB() {
    if(personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();
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
