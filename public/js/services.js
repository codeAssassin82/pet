'use strict';

var app = angular.module('myApp');
//

app.service('PetService', function($http) {

  this.getAll = function() {
    return $http.get('/pet');
  };

  this.getUpcoming = function() {
    return $http.get('/pet/upcoming');
  };

  this.create = function(pet) {
    return $http.post('/pet', pet);
  };

  this.update = function(petId, updateObj) {
    return $http.put(`/pet/${petId}`, updateObj);
  };

  this.toggleCheckin = function(petId) {
    return $http.put(`/pet/${petId}/checkin`);
  };

  this.addCustomer = function(petId, clientId) {
    return $http.put(`/petId/${petId}/addCustomer`,{customers: customerId});
  };

});
