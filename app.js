// // File Validation

function validateuser() {
    var first_name = document.getElementById("fname").value;
    var last_name = document.getElementById("lname").value;
    var email = document.getElementById("mail").value;
	var tel = document.getElementById("phone").value;
    var telno = /^\d{10}$/;
    var re_email = document.getElementById("re-mail").value;
    var password = document.getElementById("pass").value;
    var re_password = document.getElementById("re-pass").value;
    var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
    var validEmail = regEx.test(email);
     var submit = true;
     
    // alert(first_name);
    if (first_name == "") {
             document.getElementById("fname-msg").innerHTML="Enter first name";
			 submit= false;
        
    }
    if (last_name == ""){
        document.getElementById("lname-msg").innerHTML="Enter last name";
					 submit= false;

    }
    if (email == "" || email.length < 1 ) {
        document.getElementById("mail-msg").innerHTML="Enter mail address";
					 submit= false;

                
    } 
    if(email != re_email) {
        document.getElementById("remail-msg").innerHTML="Email address mismatch";
                			 submit= false;

    }
        if(tel.match(telno)) {
        document.getElementById("phone-msg").innerHTML="phone number is invalid";
					 submit= false;

    }
    if(password === " " ){
        document.getElementById("pass-msg").innerHTML="Enter password";
					 submit= false;

                   
    }
    if (password != re_password) {
        document.getElementById("repass-msg").innerHTML="password mismatch" ;
					 submit= false;

                    
    }
	if (submit== false) {
        alert("enter the details");
	
    }
	else 
		alert("form is submitted");
	
}


