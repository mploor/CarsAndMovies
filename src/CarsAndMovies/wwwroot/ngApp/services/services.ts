namespace CarsAndMovies.Services {

    export class MovieService {

        getTitleFromId(movies, id: number) {
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].id == id) {
                    return movies[i].title;
                }
            }
        }

        getDirectorFromId(movies, id: number) {
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].id == id) {
                    return movies[i].director;
                }
            }
        }

        getIndexFromId(movies, id: number) {
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].id == id) {
                    return i;
                }
            }
        }

    }

    angular.module('CarsAndMovies').service('MovieService', MovieService);

    export class CarDetailsService {

        getIndexFromId(cars, id: number) {
            for (let i = 0; i < cars.length; i++) {
                if (cars[i].id == id) {
                    return i;
                }
            }
        }
    }

    angular.module('CarsAndMovies').service('CarDetailsService', CarDetailsService);
}