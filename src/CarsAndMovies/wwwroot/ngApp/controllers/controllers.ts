namespace CarsAndMovies.Controllers {
    let movies = [];
    let cars = [];

    export class HomeController {
        public message = 'Hello from the home page!';
       
        public slides = [
            { image: "../../images/American-cars-Camaro-convertible_car.jpg" },
            { image: "../../images/star-wars-poster.jpg" },
            { image: "../../images/Jaguar.1966.MK X-02.jpg" },
            { image: "../../images/gone_with_wind.jpg"}
        ]

    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class MoviesController {
        public message = "Hello from the movies controller";
        public movies;
        public sortBy = "none";
        public deleteName = "";
        public deleteIndex: number;
        public deleteId: number;
        public editId: number;
        public editIndex: number;
        public editTitle = "";
        public editDirector = "";
        public dialogTitle = "";

        constructor(private $http: ng.IHttpService, public MovieService: CarsAndMovies.Services.MovieService) {
            this.$http.get("/api/movies").then((response) => {
                this.movies = response.data;
                movies = this.movies;
            });
        } 

        sortChoice(choice: string) {
            this.sortBy = choice;
        }

        deleteChoice(id: number) {
            this.deleteName = this.MovieService.getTitleFromId(movies, id);
            this.deleteIndex = this.MovieService.getIndexFromId(movies, id);
            this.deleteId = id;
        }

        editChoice(id: number) {
            this.editTitle = this.MovieService.getTitleFromId(movies, id);
            this.editDirector = this.MovieService.getDirectorFromId(movies, id);
            this.editId = id;
            this.editIndex = this.MovieService.getIndexFromId(movies, id);
            this.dialogTitle = "Edit Movie";
        }

        addDialog() {
            this.editTitle = "";
            this.editDirector = "";
            this.editId = movies[movies.length - 1].id + 1;
            this.editIndex = movies.length;
            this.dialogTitle = "Add Movie";
        }

        saveChanges() {
            if (this.editIndex == movies.length) {     // Adding new movie
                movies[this.editIndex] = { id: this.editId, title: this.editTitle, director: this.editDirector };
                let movie = { id: 0, title: this.editTitle, director: this.editDirector };
                this.$http.post("/api/movies", movie).then((response) => { console.log(response); });
            } else {                                   // Editing existing movie
                movies[this.editIndex].title = this.editTitle;
                movies[this.editIndex].director = this.editDirector;
                let movie = { id: this.editId, title: this.editTitle, director: this.editDirector };
                this.$http.post("/api/movies", movie).then((response) => { console.log(response); });;
            }
        }

        deleteMovie() {
            movies.splice(this.deleteIndex, 1);
            console.log(this.deleteId);
            this.$http.delete("/api/movies", this.deleteId).then((response) => { console.log(response);})
        }

    }

    export class CarsController {
        public message = "Hello from the cars controller";
        public cars;

        constructor(private $http: ng.IHttpService) {
            this.$http.get("/api/cars").then((response) => {
                this.cars = response.data;
                cars = this.cars;
            });
        }
 
    }

    export class MovieDetailsController {
        public message = "Hello from the movie details controller";
    }

    export class CarDetailsController {
        public message = "Hello from the car details controller";
        public car;
        public carIndex: number;

        constructor(private $stateParams: ng.ui.IStateParamsService, public CarDetailsService: CarsAndMovies.Services.CarDetailsService, private $state: ng.ui.IStateService) {
            this.car = cars.filter((c) => { return c.id == $stateParams["id"] })[0];
        }

        saveChanges() {
            this.carIndex = this.CarDetailsService.getIndexFromId(cars, this.car.id);
            cars[this.carIndex].shortDescription = this.car.shortDescription;
            cars[this.carIndex].price = this.car.price;
            cars[this.carIndex].fullDescription = this.car.fullDescription;
            cars[this.carIndex].imageUrl = this.car.imageUrl;
        }

        public backButton() {
            this.$state.go("cars");
        }
    }
}


