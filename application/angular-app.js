(function(angular){
  angular.module("myApp",['ngRoute'])
.config(function($routeProvider){
  $routeProvider.when('/index.html',{
    templateUrl:"template/intro.html"
  }).when('/game',{
    templateUrl: "template/game.html",
    controller:"gameCtrl"
  }).when('/about',{
  	templateUrl: "template/about.html",
    controller:"aboutCtrl"
  }).when('/gallery',{
  	templateUrl: "template/gallery.html",
    controller: "galleryCtrl"
  }).when('/portfolio',{
  	templateUrl: "template/portfolio.html",
    controller: "portfolioCtrl"
  })
  .otherwise({
redirectTo: "index.html"
});
});        
})(window.angular);



