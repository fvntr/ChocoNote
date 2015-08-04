angular.module('chocoNote', [
  // 'choconote.services',
  'chocoNote.listings',
  'chocoNote.records',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/records', {
      templateUrl: 'app/records/records.html',
      controller: 'RecordsController'
    })
    .when('/listing', {
      templateUrl: 'app/listing/listing.html',
      controller: 'ListingController'
    })
    .otherwise({
      redirectTo: '/records'
    });
})
    