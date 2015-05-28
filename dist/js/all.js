angular.module('app', []);
angular.module('app').directive('emailForm', function(){
  return {
    scope: {
      ngModel: '='
    },
    template: '<div class=\'col-xs-12\'>  <div class=\'col-xs-8\'>    <input type=\'email\' ng-model=\'data\' class=\'form-control\' />  </div>  <div class=\'col-xs-4\'>    <button class=\'form-control btn btn-primary\' ng-click=\'signUp()\'>Prijavi</button>  </div></div>',
    link: function(scope, element, attributes) {
      scope.signUp = function() {
        alert('Prijava uspešna');
      }
    }
  }
});
angular.module('app').controller('LoterijaController', function($scope, $q) {
  $scope.arr = [];
  $scope.calculating = false;

  function getRandomNumber(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  function contains(item) {
    for (var i = 0; i < $scope.arr.length; i++) {
      if ($scope.arr[i].number == item) {
        return true;
      }
    }
    return false;
  }

  function getPromise() {
    var defer = $q.defer();
    var calculateTime = getRandomNumber(2000, 5000);
    setTimeout(function() {
      var number = undefined;
      do {
        number = getRandomNumber(1, 100);
      } while (contains(number));
      var item = {
        number: number,
        calculateTime: calculateTime
      };
      $scope.arr.push(item);

      defer.resolve(number);
    }, calculateTime);
    return defer.promise;
  };

  $scope.zazeni = function() {
    $scope.calculating = true;
    $scope.arr = [];
    getPromise().then(function(success) {
      return success;
    }).then(function(success) {
      return getPromise();
    }).then(function(success) {
      return getPromise();
    });

  }

});
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
angular.module('app').directive('numbers', function(){
return {
    scope: {
      data: '='
    },
    template: '<p class="text-center {{(data.length < 10) ? \'text-success\' : \'text-danger\'}}">{{data.length}}</p>'
  }
});