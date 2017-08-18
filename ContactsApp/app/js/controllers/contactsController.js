contactsApp.controller('contactsController',
	function contactsController($scope, contactsService, $location) {
		$scope.contacts = contactsService.getContacts();

		$scope.deleteContacts = function () {

			for (var i = 0; i < $scope.contacts.length; i++) {
				if ($scope.contacts[i].deleteItem) {
					$scope.contacts.splice(i, 1);
					i = i - 1;
				}
			}
		}
		$scope.gotoCreate = function () {
			$location.url('/contacts/create');
		}
		$scope.gotoEdit = function (id) {
			contactsService.setId(id);
			$location.url('/contacts/edit');
		}
	}
)