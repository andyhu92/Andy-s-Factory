angular.module('myApp').directive("googleMap",function(){
  return{
    restrict:'E',
    templateUrl: 'template/googlemap.html',
    link:function(){
      googleMap.initialize();
      }
       
  }
})