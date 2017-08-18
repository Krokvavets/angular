contactsApp.controller('searchController',
function contactsController($scope, contactsService, $location) {
    $scope.contacts = contactsService.getContacts();
}
)