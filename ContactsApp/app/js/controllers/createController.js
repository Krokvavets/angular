contactsApp.controller('createController',
function contactsController($scope, contactsService, $location) {
	$scope.contacts = contactsService.getContacts();

	$scope.addItem = function (createForm,firstName, lastName, DOB, phone, gender, relationship, description) {
		var id = $scope.contacts[$scope.contacts.length-1].id + 1;
		function formatDate(date) {
			
			  var dd = date.getDate();
			  if (dd < 10) dd = '0' + dd;
			
			  var mm = date.getMonth() + 1;
			  if (mm < 10) mm = '0' + mm;
			
			  var yy = date.getFullYear();
			
			  return dd + '.' + mm + '.' + yy;
			}
		var DOBFormate = formatDate(DOB);
		if(createForm.$valid){
		contactsService.update({
			id: id,
			firstName: firstName,
			lastName: lastName,
			DOB: DOBFormate,
			phone: phone,
			gender: gender,
			relationship: relationship,
			description: description
		});
	}
	$scope.return();
	}

	$scope.return = function () {
		$location.url('/contacts/table')
	}

}
)