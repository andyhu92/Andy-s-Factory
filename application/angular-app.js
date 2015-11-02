var app = angular.module("myApp",['ngRoute'])
app.config(function($routeProvider){
  $routeProvider.when('/index.html',{
    templateUrl:"template/intro.html"
  }).when('/game',{
    templateUrl: "template/game.html"
  }).when('/about',{
  	templateUrl: "template/about.html"
  }).when('/gallery',{
  	templateUrl: "template/gallery.html"
  }).when('/portfolio',{
  	templateUrl: "template/portfolio.html"
  })
  .otherwise({
redirectTo: "index.html"
});
});        

app.directive("googleMap",function(){
  return{
    restrict:'E',
    templateUrl: 'template/googlemap.html',
    link:function(){
      initialize();
      }
       
  }
})


