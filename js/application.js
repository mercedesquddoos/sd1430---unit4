function printOurForm(){
	var firstname;
	var lastname;
	var address;
	var phonenumber;
	var phonetype;
	
	firstname = document.getElementById("firstname");
	lastname = document.getElementById("lastname");
	address = document.getElementById("address");
	phonenumber = document.getElementById("phonenumber");
	
	printOut = document.getElementById("printstuffhere");
	
	 printOut.innerHTML = "Hello " + firstname.value + " " + lastname.value + "<br>" ;
	 printOut.innerHTML += "You live at " + address.value + "<br>" ;
	 printOut.innerHTML += "And your phone number is " + phonenumber.value; 
	
}