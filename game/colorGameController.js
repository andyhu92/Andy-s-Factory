app.controller('gameController',function($scope){
$scope.red = $scope.green = $scope.blue = 0;
$scope.g_red = $scope.g_green = $scope.g_blue =255;
$scope.generateValue=function(){
$scope.g_red = Math.floor((Math.random()*255));
$scope.g_green = Math.floor((Math.random()*255));
$scope.g_blue = Math.floor((Math.random()*255));
$scope.red = $scope.green = $scope.blue = 0;
};
$scope.showAnswer = function(){
alert("The answer is "+$scope.g_red+", "+$scope.g_green+" ,"+$scope.g_blue);
};
$scope.submitValue = function(){
if($scope.g_red == $scope.red && $scope.g_green ==$scope.green && $scope.g_blue ==$scope.blue){
alert("Totally Match!!! Unbelievable!!!");
}
else if(Math.abs($scope.g_red - $scope.red)<=10 && Math.abs($scope.g_green - $scope.green)<=10 && Math.abs($scope.g_blue - $scope.blue)<=10){
alert("Top Color expert!");
}
else if(Math.abs($scope.g_red - $scope.red)<=20 && Math.abs($scope.g_green - $scope.green)<=20 && Math.abs($scope.g_blue - $scope.blue)<=20){
alert("Color Master!");
}
else if(Math.abs($scope.g_red - $scope.red)<=30 && Math.abs($scope.g_green - $scope.green)<=30 && Math.abs($scope.g_blue - $scope.blue)<=30){
alert("So Close!");
}
else alert("Have another try!");
};
});