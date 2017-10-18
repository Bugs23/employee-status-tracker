/**********************************************************
Employee Office Status
**********************************************************/

// Create xml object
var xhr = new XMLHttpRequest();

// Create callback
xhr.onreadystatechange = function() {
	// If server response is complete
	if (xhr.readyState === 4) {
		// Convert text response into object
		var employees = JSON.parse(xhr.responseText);
		// Get the employee list container div
		var employeeList = document.getElementById('employeeList');
		// Creat unordered list for emplyee items
		var htmlStatus = document.createElement('ul');
		htmlStatus.classList = 'bulleted list-unstyled';

		// Loop through the emplyees array
		for (var i = 0; i < employees.length; i++) {
			// Create a new list item
			var employee = document.createElement('li');
			// Set the list items text to the employees name
			employee.textContent = employees[i].name;

			/* If the employees in office property value is true set the item's class to in,
			if it's not set the class to out */
			if (employees[i].inoffice === true) {
				employee.classList = 'in';
			} else {
				employee.classList = 'out';
			}

			htmlStatus.appendChild(employee);
		}
		employeeList.appendChild(htmlStatus);
	}
};

// Open request
xhr.open('GET', 'data/employees.json');

// Send request
xhr.send();



/**********************************************************
Room Status
**********************************************************/

var roomStatus = new XMLHttpRequest();

roomStatus.onreadystatechange = function() {
	if (roomStatus.readyState === 4) {
		var rooms = JSON.parse(roomStatus.responseText);
		var roomList = document.getElementById('roomList');
		var roomVacancy = document.createElement('ul');
		roomVacancy.classList = 'bulleted list-unstyled';

		for (var i = 0; i < rooms.length; i++) {
			var room = document.createElement('li');
			room.textContent = rooms[i].rname;

			if (rooms[i].vacancy === true) {
				room.classList = 'open';
			} else {
				room.classList = 'closed';
			}

			roomVacancy.appendChild(room);
		}

		roomList.appendChild(roomVacancy);
	}
};

roomStatus.open('GET', 'data/rooms.json');

roomStatus.send();








