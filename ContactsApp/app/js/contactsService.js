contactsApp.service('contactsService', function(){
		this.contacts = [{
		"Id" : "1",
		"firstName": "Jon",
		"lastName" : "Snow",
		"DOB" : "20/11/1990",
		"phone" : "880055535",
		"gender": "Male",
		"relationship" :  "Others",
		"description" : "he know nothing",
		"favorite" : false
	},{
		"Id" : "2",
		"firstName": "Alex",
		"lastName" : "Ivanov",
		"DOB" : "12/10/1991",
		"phone" : "990055535",
		"gender": "Male",
		"relationship" :  "Home",
		"description" : "smart",
		"favorite" : true
	},{
		"Id" : "3",
		"firstName": "Mila",
		"lastName" : "Ivanova",
		"DOB" : "10/12/1981",
		"phone" : "192253565",
		"gender": "Female",
		"relationship" :  "Work",
		"description" : "qwer",
		"favorite" : false
	}];
	var selff = this;
	this.update = function(obj) {
          selff.contacts.push(obj);
		  alert("update");
		  alert(selff.contacts[3].lastName);
		}
	
    /*return{
		update: function(msg) {
          contacts.push(msg);
		  alert("update");
		  alert(contacts[3].lastName);
		},
        getData: function(){
			return contacts;
		}
	}*/
	
})