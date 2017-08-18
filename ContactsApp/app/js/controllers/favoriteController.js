contactsApp.controller('favoriteController',
function contactsController($scope, contactsService,) {
    $scope.contacts = contactsService.getFavoriteContacts();
}
)