document.addEventListener("DOMContentLoaded", function() {

    var checkForm = function(e)
    {
      if(this.name.value == "") {
        alert("Error: Name cannot be blank");
        this.username.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
	  if(this.email.value == "") {
        alert("Error: Email cannot be blank");
        this.username.focus();
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
        alert("Error: Password name cannot be blank");
        this.username.focus();
        e.preventDefault(); // equivalent to return false
        return;
      }
	  if(this.pwd2.value == "") {
        alert("Error: Password name cannot be blank");
        this.username.focus();
        e.preventDefault(); // equivalent to return false
        return;
	  }
      if(this.pwd1.value != "" && this.pwd1.value == this.pwd2.value) {
      alert("Both username and password are valid");
	  }
    };

    var myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", checkForm, true);

    // HTML5 form validation

    var supports_input_validity = function()
    {
      var i = document.createElement("input");
      return "setCustomValidity" in i;
    }

    if(supports_input_validity()) {
      var nameInput = document.getElementById("name");
      nameInput.setCustomValidity(nameInput.title);
	  
	  var emailInput = document.getElementById("email");
      emailInput.setCustomValidity(emailInput.title);
	  
	  var usernameInput = document.getElementById("field_username");
      usernameInput.setCustomValidity(usernameInput.title);

      var pwd1Input = document.getElementById("field_pwd1");
      pwd1Input.setCustomValidity(pwd1Input.title);

      var pwd2Input = document.getElementById("field_pwd2");

      // input key handlers

      nameInput.addEventListener("keyup", function() {
        nameInput.setCustomValidity(this.validity.patternMismatch ? nameInput.title : "");
      }, false);
	  
	  emailInput.addEventListener("keyup", function() {
        emailInput.setCustomValidity(this.validity.patternMismatch ? emailInput.title : "");
      }, false);
	  
	  usernameInput.addEventListener("keyup", function() {
        usernameInput.setCustomValidity(this.validity.patternMismatch ? usernameInput.title : "");
      }, false);

      pwd1Input.addEventListener("keyup", function() {
        this.setCustomValidity(this.validity.patternMismatch ? pwd1Input.title : "");
        if(this.checkValidity()) {
          pwd2Input.pattern = this.value;
          pwd2Input.setCustomValidity(pwd2Input.title);
        } else {
          pwd2Input.pattern = this.pattern;
          pwd2Input.setCustomValidity("");
        }
      }, false);

      pwd2Input.addEventListener("keyup", function() {
        this.setCustomValidity(this.validity.patternMismatch ? pwd2Input.title : "");
      }, false);

    }

  }, false);