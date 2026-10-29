const movies = [
    {
        title: '«Пираты Карибского моря: Проклятие Черной жемчужины» (2003)',
        genre: 'приключения, фэнтези, боевик и комедия',
        rating: 8.4,
        price: 200,
        ageLimit: +12,
        availableSeats: 4
    },
    {
        title: '«Пираты Карибского моря: Сундук мертвеца» (2006)',
        genre: 'приключения, фэнтези, боевик и комедия',
        rating: 8.1,
        price: 220,
        ageLimit: +12,
        availableSeats: 7
    },
    {
        title: '«Пираты Карибского моря: На краю света» (2007)',
        genre: 'приключения, фэнтези, боевик и комедия',
        rating: 8.1,
        price: 240,
        ageLimit: +12,
        availableSeats: 1
    },
    {
        title: '«Пираты Карибского моря: На странных берегах» (2011)',
        genre: 'приключения, фэнтези, боевик и комедия',
        rating: 7.4,
        price: 260,
        ageLimit: +12,
        availableSeats: 10
    },
    {
        title: '«Пираты Карибского моря: Мертвецы не рассказывают сказки» (2017)',
        genre: 'приключения, фэнтези, боевик и комедия',
        rating: 6.6,
        price: 280,
        ageLimit: +16,
        availableSeats: 2
    }
    
]
let userBalance = 1000;
const userAge = 14;

function checkAccess(movie, userAge){
  return userAge >= movie.ageLimit;
}


for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
    if (movies.rating > 8) {
        console.log(`название фильма: ${movies.title} рейтинг: ${movies.rating}`);
    }
}
let totalSeats = 0;;
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
    totalSeats += movies[i].availableSeats
}
console.log("всего мест", totalSeats);


for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating > 8) {
        console.log(`название фильма: ${movies[i].title} рейтинг: ${movies[i].rating}`);
    }
}
function showMovie(movie){
       if (movie) {
        console.log(`название: "${movie.title}" | жанр: ${movie.genre} | рейтинг: ${movie.rating} | цена: ${movie.price} | возраст: ${movie.ageLimit}+ | свободных мест: ${movie.availableSeats}`);
    } else {
        console.log("нет такого фильма");
    }
    
}
showMovie(movies[0]);
function calculatePrice(movie, count){
    return movie ? movie.price * count : 0;
}   
console.log("Стоимость 3 билетов:", calculatePrice(movies[0], 3));


function findMovieByName(name){
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase().includes(name.toLowerCase())) {
            return movies[i];
        }
    }
    return null;
}
console.log("Поиск фильма:", findMovieByName("Сундук мертвеца"));

const cinema = {
    name: 'Нуркинотеатр',
    movies: [...movies],
    
    showInfo() {
        console.log(`кинотеатр: ${this.name}, фильмов в прокате: ${this.movies.length}`);
    },
    
    showMovies() {
        this.movies.forEach(movie => console.log(movie.title));
    },
    
    addMovie(movie) {
        this.movies.push(movie);
    },
    
    removeLastMovie() {
        this.movies.pop();
    }
};
cinema.showInfo();
cinema.showMovies();
cinema.addMovie({ title: "человек паук", genre: "боевик,фантастика", rating: 7.8, price: 250, ageLimit: +12, availableSeats: 10 });
cinema.showMovies();
cinema.removeLastMovie();
cinema.showMovies();

movies.forEach(movie => console.log(movie.title));

const movieTitles = movies.map(movie => movie.title);

const highRatingMovies = movies.filter(movie => movie.rating > 8);

const singleMovie = movies.find(movie => movie.title.includes("На краю света"));

function buyTicket(movieName, userAge, tickets, balance) {
    const movie = movies.find(m => m.title.toLowerCase().includes(movieName.toLowerCase()));
    
    if (!movie) {
        console.log("Фильм не найден");
        return balance;
    }
    
    if (!checkAccess(movie, userAge)) {
        console.log("Отказ по возрасту");
        return balance;
    }
    
    if (movie.availableSeats < tickets) {
        console.log("Недостаточно мест");
        return balance;
    }
    
    const totalPrice = calculatePrice(movie, tickets);
    
    if (balance < totalPrice) {
        console.log("Недостаточно средств");
        return balance;
    }
    
    movie.availableSeats -= tickets;
    const newBalance = balance - totalPrice;
    
    console.log("Покупка совершена успешно");
    return newBalance;
}

userBalance = buyTicket("Проклятие Черной жемчужины", userAge, 2, userBalance);