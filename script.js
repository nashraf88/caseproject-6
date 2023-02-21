/*
      JavaScript 6th Edition
      Chapter 6
      Case Project Chapter 6

      Author: Nazia Ashraf
      Date: 2/17/2023

      Filename: script.js
   */

      "use strict"; // interpret document contents in JavaScript strict mode

      var formvalidity = true;

      	/* remove default values and formatting from state and delivery date selection lists */
        function removeSelectDefaults() {
            var emptyBoxes = document.getElementsByTagName("select");
            for (var i = 0; i < emptyBoxes.length; i++) {
                emptyBoxes[i].selectedIndex = -1;
            }   
        }

        /* automatically check Custom message check box if user makes entry in customText box */
        function autocheckCustom () {
            var messageBox = document.getElementById("cutomText");
            if (messageBox.value !== "" && messageBox.value !== messageBox.placeholder) {
                //if user entry in text area, check Custom check box
                document.getElementById("custom").checked = "checked";
            }
        }

        /* validate address fieldsets */
        function validateAddress(fieldsetId) {
            var inputElements = document.querySelectorAll("#" + fieldsetId + "input");
            var errorDiv = document.querySelectorAll("#" + fieldsetId + " .errorMessage") [0];
            var fieldsetValidity = true;
            var elementCount = inputElements.length;
            var currentElement;

            try {
                for (var i = 0; i < elementCount; i++) {
                    //validate all input elements in fieldset
                    currentElement = inputElements[i];
                    if (currentElement.value === "") {
                        currentElement.style.background = "rgb(255,233,233)";
                        fieldsetValidity = false;
                    } else {
                        currentElement.style.background = "white";
                    }
                }
                currentElement = document.querySelector("#" + fieldsetId + "select");
                //validate state select element
                if (currentElement.selectedIndex === -1) {
                    currentElement.style.border = "1px solid red";
                    fieldsetValidity = false;
                } else {
                    currentElement.style.border = "";
                }
                if (fieldsetValidity === false) {
                //throw appropriate message based on current fieldset
                    if (fieldsetId === "myAddress") {
                        throw "Address information required.";
                    }
                } else {
                    errorDiv.style.display = "none";
                    errorDiv.innerHTML = "";
                }
            }
            catch(msg) {
                errorDiv.style.display = "block";
                errorDiv.innerHTML = msg;
                formValidity = false;
            }
        }

        /* validate form */
        function validateform(evt) {
            if (evt.preventDefault) {
                evt.preventDefault(); //prevent form from submitting
            } else {
                evt.returnValue = false; //prevent form from submitting in IE8
            }
            formValidity = true; //reset value for revalidation
            validateAddress("myAddress");
            if (formValidity === true) {
                document.getElementById("errorText").innerHTML = "";
                document.getElementById("errorText").style.display = "none";
                document.getElementsByTagName("form") [0].submit();
            } else {
                document.getElementById("errorText").innerHTML = "Please fix the indicated problems and the resubmit your order.";
                document.getElementById("errorText").style.display = "block";
                scroll(0,0);
            }
        }

        /* create event listeners */
        function createEventListeners() {
            var form = document.getElementsByTagName("form")[0]; 
            if (form.addEventListener) {
              form.addEventListener("submit", validateForm, false); 
            } else if (form.attachEvent) {
              form.attachEvent("onsubmit", validateForm);
            }
            var messageBox = document.getElementById("customText");
            if (messageBox.addEventListener) {
                messageBox.addEventListener("blur", autocheckCustom, false);
            } else if (messageBox.attachEvent) {
                messageBox.attachEvent("onblur", autocheckCustom);
            }
          }


        /* run setup function when page finishes loading */
        if (window.addEventListener) { 
            window.addEventListener("load", createEventListeners, false);
        } else if (window.attachEvent) { 
            window.attachEvent("onload", createEventListeners);
        }

        /* validate number fields for older browsers */
        function validateNumbers() { 
            var numberInputs = document.querySelectorAll("#contactinfo input[type=number]"); 
            var elementCount = numberInputs.length; 
            var numErrorDiv = document.getElementById("numErrorText"); 
            var numbersValidity = true; 
            var currentElement;
            try {
                for (var i = 0; i < elementCount; i++) { 
                    // validate all input elements of type "number" in fieldset 
                    currentElement = numberInputs[i]; 
                    if (isNaN(currentElement.value) || (currentElement.value === "")) {
                        currentElement.style.background = "rgb(255,233,233)"; 
                        numbersValidity = false;
                    } else { 
                        currentElement.style.background = "white";
                    }
                }
                if (numbersValidity === false) {
                    throw "Zip and Social Security must be numbers.";
                }
                numErrorDiv.style.display = "none";
                numErrorDiv.innerHTML = "";
            }
            catch(msg) {
                numErrorDiv.style.display = "block";
                numErrorDiv.innerHTML = msg;
                formValidity = false;
            }
        }

        	/* remove fallback placeholder text */
            function zeroPlaceholder() {
                var messageBox = document.getElementById("customText");
                messageBox.style.color = "black";
                if (messageBox.value === messageBox.placeholder) {
                    messageBox.value = "";
                    if (messageBox.addEventListener) {
                        messageBox.addEventListener("focus", zeroPlaceholder, false);
                    } else if (messageBox.attachEvent) {
                        messageBox.attachEvent("onfocus", zeroPlaceholder);
                    }
                }       
            }
            /* restore placeholder text if box contains no user entry */
            function checkPlaceholder() { 
                var messageBox = document.getElementById("customText");
                if (messageBox.value === "") { 
                    messageBox.style.color = "rgb(178,184,183)"; 
                    messageBox.value = messageBox.placeholder;
                }
            }

        
            function generatePlaceholder() { 
            if (!Modernizr.input.placeholder) {
                var messageBox = document.getElementById("customText"); 
                messageBox.value = messageBox.placeholder; 
                messageBox.style.color = "rgb(178,184,183)";
                if (messageBox.addEventListener) {
                    messageBox.addEventListener("focus", zeroPlaceholder, false);
                    messageBox.addEventListener("blur", checkPlaceholder, false);
                } else if (messageBox.attachEvent) {
                    messageBox.attachEvent("onfocus", zeroPlaceholder);
                    messageBox.attachEvent("onblur", checkPlaceholder);
                }       
            }
        }




      var formValidity = true;

      var form = document.getElementsByTagName("form")[0]; 
      if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false); 
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
        

    function validateName() { 
        try {
            var Name = document.getElementById("myName").value; 
            if (Name === "") {
                throw "Please enter your name.";
            }
        }
                catch(NameError) { 
                    window.alert(NameError) 
                    return false;
                } 
                finally {
                    NameValid = true;
                }
                return true;
            }

    function validatePhone() { 
        try {
            var Phone = document.getElementById("myPhone"); 
            if (Phone.value === "") {
                throw "Please enter your contact number.";
            }
        }
                catch(PhoneError) { 
                    window.alert(PhoneError) 
                    return false;
                } 
                finally {
                    PhoneValid = true;
                }
                return true;
            }       

    function validateEmail() { 
        try {
            var Email = document.getElementById("myEmail").value; 
            if (Email === "") {
                throw "Please enter your email.";
            }
        }
                catch(EmailError) { 
                    window.alert(EmailError) 
                    return false;
                } 
                finally {
                    NameEmail = true;
                }
                return true;
            }
        
    function validateAddress() { 
        try {
            var Address = document.getElementById("myAddress").value; 
            if (Address === "") {
                throw "Please enter your address.";
            }
        }
                catch(AddressError) { 
                    window.alert(AddressError) 
                    return false;
                } 
                finally {
                    AddressValid = true;
                }
                return true;
            }

    function validateCity() { 
        try {
            var City = document.getElementById("myCity").value; 
            if (City === "") {
                throw "Please enter your city.";
            }
        }
        catch(CityError) { 
            window.alert(CityError) 
            return false;
        } 
        finally {
            CityValid = true;
            }
            return true;
        }

    function validateZip() { 
        try {
            var Zip = document.getElementById("myZip"); 
            if (Zip.value === "") {
                throw "Please enter your Zip Code.";
            }
        }
                catch(ZipError) { 
                    window.alert(ZipError) 
                    return false;
                } 
                finally {
                    ZipValid = true;
                }
                return true;
            }       

    function testformcompleteness(){
        validateName()
        validatePhone()
        validateEmail()
        validateAddress()
        validateCity()
        validateZip()
        generatePlaceholder()
    }