var app = angular.module("myApp",['ngRoute'])
app.config(function($routeProvider){
  $routeProvider.when('/index.html',{
    templateUrl:"index/index.html"
  }).when('/game',{
    templateUrl: "game/index.html"
  }).when('/about',{
  	templateUrl: "about/index.html"
  }).when('/gallery',{
  	templateUrl: "gallery/index.html"
  }).when('/portfolio',{
  	templateUrl: "portfolio/index.html"
  })
  .otherwise({
redirectTo: "index.html"
});
});        

app.directive("googleMap",function(){
  return{
    restrict:'E',
    templateUrl: 'application/googlemap.html',
    link:function(){
      $("button.mapShow").click(function(){
   
       initialize();
    });
      }
       
  }
})

app.directive("test",function(){
  return{
    restrict:'E',
    templateUrl:'application/googlemap.html',
    link:function(){
      $("button.mapShow").click(function(){

        initialize();
      });
    }
  }
})