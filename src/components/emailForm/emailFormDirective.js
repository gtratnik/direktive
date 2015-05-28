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