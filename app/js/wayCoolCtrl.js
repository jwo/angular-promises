greenvilleJS.controller('wayCoolCtrl', ['$scope', '$q', '$timeout', function ($scope, $q, $timeout) {
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
    // Set map.center to $scope.currentPosition() ?
  };

  $scope.find = function() {
    // set map.center = geocode($scope.address) 's coords
    // set mapMarkers = [newCoords]
  }

  geoCode = function(address) {
    $scope.geoCoder.geocode({address: address}, function(results, status) {
      return { latitude:  results[0].geometry.location.d,
               longitude: results[0].geometry.location.e});
  };

  $scope.currentPosition = function() {
    navigator.geolocation.getCurrentPosition( function (position) {
      return position.coords;
    });
  };
}
]);

