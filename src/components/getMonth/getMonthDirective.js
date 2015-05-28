angular.module('app').directive('getMonth', function(){
return {
    scope: {
      data: '='
    },
    template: '<p>{{monthName}}</p>',
    controller: function($scope){
      var meseci = ['Januar','Februar','Marec','April','Maj','Junij','Julij','Avgust','September','Oktober','November','December'];
         $scope.$watch('data', function(data) {
           if(data > 0 && data < 13){
              $scope.monthName = meseci[data-1];
           }else{
             $scope.monthName='';
           }
   });
    }
  }
});