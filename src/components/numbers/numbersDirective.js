angular.module('app').directive('numbers', function(){
return {
    scope: {
      data: '='
    },
    template: '<p class="text-center {{(data.length < 10) ? \'text-success\' : \'text-danger\'}}">{{data.length}}</p>'
  }
});