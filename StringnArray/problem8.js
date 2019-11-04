//You are given a list of movie duration and the flight duration, return true/false if you can watch at
//least 2 movies during the flight duration.image

//[80, 110, 40] => false
//[80, 110, 80] => true
//[20, 30, 110, 40, 50] =>true

function watchMovies(flightDuration, movieList){
      for(i=1; i<movieList.length; i++){
          var moviesLength = movieList[i-1]+movieList[i];
          if(flightDuration >= moviesLength){
              return true;
          }
       }
       return false;
}

console.log(watchMovies(110, [80, 110, 40]));
console.log(watchMovies(110, [20, 30, 110, 40, 50]));
console.log(watchMovies(110, [80, 110, 80]));