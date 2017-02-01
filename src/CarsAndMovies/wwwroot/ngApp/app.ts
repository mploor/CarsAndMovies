namespace CarsAndMovies {

    angular.module('CarsAndMovies', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: CarsAndMovies.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: CarsAndMovies.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('movies', {
                url: '/movies',
                templateUrl: '/ngApp/views/movies.html',
                controller: CarsAndMovies.Controllers.MoviesController,
                controllerAs: 'controller'
            })
            .state('cars', {
                url: '/cars',
                templateUrl: '/ngApp/views/cars.html',
                controller: CarsAndMovies.Controllers.CarsController,
                controllerAs: 'controller'
            })
            .state('movieDetails', {
                url: '/movieDetails/:id',
                templateUrl: '/ngApp/views/movieDetails.html',
                controller: CarsAndMovies.Controllers.MovieDetailsController,
                controllerAs: 'controller'
            })
            .state('carDetails', {
                url: '/carDetails/:id',
                templateUrl: '/ngApp/views/carDetails.html',
                controller: CarsAndMovies.Controllers.CarDetailsController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

}
