function printemployeedetails(){		//function to print the employee details
	var employee = {					//nested object array
		employeedetail : [{
			name : "shruthi",
			id	 : "31658",
			job  : "engineer",
			address : {
				street : "BTM",
				city   : "Bangalore"
			}
		},
		{
			name : "swati",
			id	 : "31687",
			job  : "engineer",
			address : {
				street : "Madiwala",
				city   : "Mangalore"
			}
		},
		{
			name : "saleena",
			id	 : "31658",
			job  : "engineer",
			address : {
				street : "Kormangala",
				city   : "Singapore"
			}
		}]
	}
	console.log("Employee name : " + employee.employeedetail[1].name);
	console.log("Employee id   : " + employee.employeedetail[1].id);
	console.log("Employee job  : " + employee.employeedetail[1].job);
	console.log("Employee city  : " + employee.employeedetail[1].address.city);
}

printemployeedetails();