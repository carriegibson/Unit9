document.addEventListener("DOMContentLoaded", function() {

    var checkForm = function(e)
    {
      if(this.name.value == "") {
        alert("Error: Name cannot be blank");
		this.name.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
	  if(this.email.value == "") {
        alert("Error: Email cannot be blank");
        this.email.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
      if(this.username.value == "") {
        alert("Error: Login name cannot be blank");
        this.username.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
	  if(this.pwd1.value == "") {
        alert("Error: Password cannot be blank");
        this.username.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
	  if(this.pwd2.value == "") {
        alert("Error: Must retype password");
        this.username.focus();
        e.preventDefault(); // equivalent to return false
        return;
	  }
      if(this.pwd1.value != "" && this.pwd1.value == this.pwd2.value) {
		alert("Both username and password are valid");
		this.pwd1.focus();
		e.preventDefault(); // equivalent to return false
		return;
	  }
    };

    var myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", checkForm, true);

  }, false);