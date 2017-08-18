contactsApp.controller('editController',
function contactsController($scope, contactsService, $location) {
    $scope.contact = contactsService.getContact();
    
    $scope.return = function () {
        $location.url('/contacts/table')
    }
}
)