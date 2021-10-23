const movies= [
    {title: " Game of Thrones", category: "fantasy, drama", seasons: 8, start: 2011, end: 2019, watched: 'yes'},    
    {title: " Vikings", category: "historical, war, drama", seasons: 6, start: 2013, end: 2021, watched: 'watching'},
    {title: " Money Heist", category: "thriller, drama", seasons: 5, start: 2017, end: 'not yet', watched: 'watching'},
    {title: " Squid Game", category: "thriller/drama", seasons: 1, start: 2021, end: 'not yet', watched: 'watching'},
    {title: " Scary Movie", category: "comedy", series: 5, start: 2000, end: 2013, watched: 'yes'},
    {title: " John Wick", category: "action, thriller", series: 4, start: 2014, end: 2022, watched: 'no'},
    {title: " Matrix", category: "sci-fi, action", series: 4, start: 1999, end: 2021, watched: 'yes'},
    {title: " Terminator", category: "sci-fi, action", series: 6, start: 1984, end: 2019, watched: 'yes'}, 
    {title: " Mission Impossible", category: "spy-action", series: 6, start: 1996, end: 2018, watched: 'yes'}, 
    {title: " Johnny English", category: "Spy-action, comedy", series: 3, start: 2003, end: 2018, watched: 'yes'}, 
    {title: " Brave heart", category: "historical, war, drama", series: 1, start: 1995, end: 1995, watched: 'yes'}, 
    {title: " House of Dragon", category: "fantasy", seasons: 0, start: 'not yet', end: 'not yet', watched: 'no'},
];


//create unwatched list movies

const unwatchedList = movies.filter(movie => movie.watched === 'no')

console.log(unwatchedList);


//Create drama movies lists array

const dramaMoviesList = movies.filter( movie => movie.category.includes('drama'))

console.log(dramaMoviesList)

// Create movie names with thriller categories

const thrillerMovies = movies.map(movie => `${movie.title}: ${movie.category}`)

console.log(thrillerMovies)

// Sort companies start from early years to later ones:

const moviesForYears = movies.sort((a, b) => a.start > b.start ? 1 : -1)

console.log(moviesForYears)

//Find the movie has not released yet
  
const result = movies.find(({start}) => start.includes('not yet'));
console.log(result)