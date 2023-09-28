function getFormvalue() {
    
		let firstName = document.getElementById("firstname").value.trim();
		let lastName = document.getElementById("lastname").value.trim();

		if( firstName !== "" && lastName !== "")
		{
			alert( firstName + " " + lastName);
		}
		else{
			alert("Enter your first and last name.");
		}

}
