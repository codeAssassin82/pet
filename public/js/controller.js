'use strict';

var app = angular.module('myApp');

// $(document).ready(function(){ // box....
//    $('.collapsible').collapsible({
//      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
//    });
//  });
//  $(document).ready(function(){
//    $('.parallax').parallax();//parallax
//  });


app.controller('animalCtrl', function($scope, PetService) {
  console.log("im here")


function render() {
  PetService.getAll()
  .then(function(res) {
    console.log(res.data);
    $scope.animals = res.data;
  }, function(err) {
    console.log(err);
  })

}
render();
})


function render() {
  PetService.delete()
  .then(function(res) {
    console.log(res.data);
  }, function(err) {
    console.log(err);
})
}
render();
});


app.controller('homeCtrl', function($scope , PetService) {
  console.log('home');
});



// app.controller('pet', function($scope , petService) {
//   console.log('animal');
// });
