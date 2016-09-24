var namesList = [];

for (var i = 0; i < 5; i++) {
	namesList[i] = prompt('введите имя');
}

var nameRequest = prompt('введите Ваше имя');


for (var j = 0; j < 2; j++) {
	// outer:
	for (var i = 0; i < 5; i++) {
		if (nameRequest == namesList[i]) {
			alert(namesList[i] + ', добрый день')
			break;
			// break outer;
		}	
	}

	alert('We are sorry but no user with such a login exists in the system')

}







	

