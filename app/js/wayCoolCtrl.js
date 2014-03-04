greenvilleJS.controller('wayCoolCtrl', ['$scope', '$q',  function ($scope, $q) {
  $scope.address = "";
  $scope.mapMarkers= [];
  $scope.zoom = 8;
  $scope.geoCoder = new google.maps.Geocoder(); 

  $scope.mapCenter = function() {
    return $scope.map.center;
  };

  $scope.map = {
    center: {
      latitude: 29,
      longitude: -95
    },
    zoom: $scope.zoom
  };

  $scope.initMap = function() {
    $scope.currentPosition().then(function(center){
      $scope.map.center = center;
    });
  };

  $scope.find = function() {
    geoCode($scope.address).then(function(newCoords) {
      $scope.map.center = newCoords;
      $scope.mapMarkers = new Array(newCoords);
    });
  };

  geoCode = function(address) {
    var deferred = $q.defer();
    $scope.geoCoder.geocode({address: address}, function(results, status) {
      deferred.resolve( { latitude:  results[0].geometry.location.d,
                          longitude: results[0].geometry.location.e});
    });
    return deferred.promise;
  };

  $scope.currentPosition = function() {
    var deferred = $q.defer();
    navigator.geolocation.getCurrentPosition( function (position) {
      deferred.resolve(position.coords);
    });
    return deferred.promise;
  };


}
]);

