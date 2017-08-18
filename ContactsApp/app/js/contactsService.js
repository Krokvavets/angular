contactsApp.factory('contactsService', function () {
	var id = [];
	var contacts = [
		{
			"id": "1",
			"firstName": "Jon",
			"lastName": "Snow",
			"DOB": "05.04.1990",
			"phone": "880055535",
			"gender": "Male",
			"relationship": "Others",
			"description": "he know nothing",
			"favorite": false
		},
		{
			"id": "2",
			"firstName": "Alex",
			"lastName": "Ivanov",
			"DOB": "12.10.1991",
			"phone": "990055535",
			"gender": "Male",
			"relationship": "Home",
			"description": "smart",
			"favorite": false
		},
		{
			"id": "3",
			"firstName": "Eva",
			"lastName": "Des",
			"DOB": "12.10.1991",
			"phone": "12355535",
			"gender": "Female",
			"relationship": "Home",
			"description": "smart",
			"favorite": true
		},
		{
			"id": "4",
			"firstName": "Mila",
			"lastName": "Ivanova",
			"DOB": "08.11.1971",
			"phone": "192253565",
			"gender": "Female",
			"relationship": "Work",
			"description": "qwer",
			"favorite": false
		}];

	function update(obj) {
		contacts.push(obj);
	}

	function getContacts() {
		return contacts;
	}
	function setId(num) {
		id.push(num);
	}
	function getContact() {
		for(var i = 0; i<contacts.length; i++){
			if(id[id.length-1] == contacts[i].id)
				return contacts[i];
		}
		return undefined;
	}
	function getFavoriteContacts() {
		var favorite = [];
		for(var i = 0; i<contacts.length; i++){
			if(contacts[i].favorite)
				favorite.push(contacts[i]);
		}
		return favorite;
	}

	return {
		update: update,
		getContacts: getContacts,
		setId : setId,
		getContact : getContact,
		getFavoriteContacts : getFavoriteContacts
	}

    /*return{
		function getData(){
			var deferred = $q.defer();
            $http({method: 'GET', url: 'Contacts.json'}).
                then (function success(response) {
                        deferred.resolve(response.data.contacts);
                    },function error(response) {
                        deferred.reject(response.status);
                    }
				);
				deferred.promise.then(function(value) { contacts=value; });

            return deferred.promise;
        }
	}*/

})