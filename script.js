function getFormvalue() {
    
		let firstName = document.getElementById("firstname").value.trim();
		let lastName = document.getElementById("lastname").value.trim();

		if( firstName !== "" && lastName !== "")
		{
			alert("First name:" +  firstName + "\nLast name:" + lastName);
		}
		else{
			alert("Enter your first and last name.");
		}

}
