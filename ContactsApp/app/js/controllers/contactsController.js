contactsApp.controller('contactsController', 
    function contactsController($scope,contactsService){
		$scope.contacts = contactsService.contacts;      
		
		/*$scope.deleteContacts = function (){

			for( var i = 0; i < $scope.contacts.length; i++)
			{
				if($scope.contacts[i].deleteItem)
				{
					$scope.contacts.splice(i,1);
					i = i-1;					
				}
			}
		}*/
		$scope.addItem = function (firstName, lastName,DOB, phone, gender, relationship, description){
			alert($scope.contacts[$scope.contacts.length-1].firstName);
			contactsService.update({firstName:firstName, lastName: lastName,DOB:DOB, phone:phone, gender:gender, relationship: relationship, description: description})
			alert($scope.contacts[$scope.contacts.length-1].firstName);
		}
		
    }
)