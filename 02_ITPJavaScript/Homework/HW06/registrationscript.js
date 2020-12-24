// Nusaiba Mahmood
// ITJS HW #6 Q.3
// registrationscript.js

/**
 * 3. Based on your refreshed knowledge on DOM manipulation, create a registration form that takes your
 * 
 *      First Name, Last Name, 
 *      Age, Gender (dropdown), 
 *      Phone No, PresentAddress, Permanent Address.
 * 
 *      There will be a checkbox named “Present and PermanentAddress same”,
 *          if the user checks it, Permanent Address will be automatically filled with the value of Present Address
 * 
 * Now, upon submitting the form, the following should be met:
 * 
 *      - All fields except Phone No is ​required​. Which means, if the user doesn’t fill up the fields,
 *          a corresponding ​error message​ will be shown in ​red​ just after that field.
 *          If multiple fields are left blank, the same error message would be shown adjacent to the fields
 * 
 *      - The Phone number should be valid and should not contain anything other than numbers.
 *          If it does, show the appropriate message showing the error (look forisNaN​ function)
 * 
 *      - The Phone No should have an exact length of​ 11​.
 *          If it doesn’t, then show the proper error message adjacent to the field.
 * 
 *      - When the user corrects the errors and submits, the previous errors should be cleared (if any)
 *          and then would show an Alert saying “Submission Successful”
 * 
 * HINT:​ To hide/show the error messages, you have to use CSS property display. 
 * Setting display = None will hide the object and display = block will show the object.
 */

// Checkbox event handler for Same addresses
const checkbox = document.querySelector('#permaAdd_sameAsCurrent');
checkbox.addEventListener('change', function (event) {
    if (checkbox.checked) {
        //copy currentAddress.values to permanentAddress.values
        for (i = 0; i < document.querySelectorAll('#currentAddress input').length; i++) {
            document.querySelectorAll('#permanentAddress input')[i].value =
                document.querySelectorAll('#currentAddress input')[i].value;
        }
    }
    else {
        for (i = 0; i < document.querySelectorAll('#currentAddress input').length; i++) {
            document.querySelectorAll('#permanentAddress input')[i].value = "";
        }
    }
});

// Setting up error text elements for required fields
const myRegForm = document.forms['RegForm'];

// const genderSelect = myRegForm.querySelector("#gender");
// genderSelect.insertAdjacentHTML('afterend', `<label for="gender" id="gender_error" style="display:none;"><b style="color:Tomato;">REQUIRED</b></label>`);

// const inputNodes = myRegForm.querySelectorAll("input[required]");

        // for (i = 0; i < inputNodes.length; i++) {
        //     inputNodes[i].insertAdjacentHTML('afterend',

        //         `<label for="${inputNodes[i].id}" id="${inputNodes[i].id}_error" style="display:none;"><b style="color:Tomato;">REQUIRED</b></label>`
        //     )
        // }

// On submit check fields
myRegForm.addEventListener('submit', function (event) {
    event.preventDefault();
    for(i=0; i< myRegForm.querySelectorAll('select[required], input[required]').length; i++)
    {
        let validity = myRegForm.querySelectorAll('select[required], input[required]')[i].checkValidity()
        if(!validity) return;
    }
    window.alert("Submission Successful!");


    // if(genderSelect.value === "")
    // {
    //     document.querySelector(`#gender_error`).style = "display:inline-block;";
    // }
    // for (i = 0; i < inputNodes.length; i++) {
    //     if (inputNodes[i].value === "")
    //     { 
    //         document.querySelectorAll(`#${inputNodes[i].id}_error`).style = "display:inline-block;";
    //     }
    // }

    

    // const fname = myRegForm.querySelector("#fname").value;
    // console.log(fname);
    // if (fname === "") {
    //     document.querySelector("#fname")
    //         .insertAdjacentHTML('afterend', '<b>Fields marked with <b style="color:Tomato;">*</b> are required.</b>')
    //     // document.getElementById("fname").style.borderColor = "red";
    // };
    // const lname = myRegForm.querySelector("#lname").value;
    // console.log(lname);
    // const age = myRegForm.querySelector("#age").value;
    // console.log(age);
    // const gender = myRegForm.querySelector("#gender").value;
    // console.log(gender);
    // const phone = myRegForm.querySelector('#phone').value;
    // console.log(phone);

    // const currentAddress_l1 = myRegForm.querySelector('#currentAddress_l1').value;
    // console.log(currentAddress_l1);
    // const currentAddress_city = myRegForm.querySelector('#currentAddress_city').value;
    // console.log(currentAddress_city);
    // const currentAddress_state = myRegForm.querySelector('#currentAddress_state').value;
    // console.log(currentAddress_state);
    // const currentAddress_zipcode = myRegForm.querySelector('#currentAddress_zipcode').value;
    // console.log(currentAddress_zipcode);
    // const currentAddress_country = myRegForm.querySelector('#currentAddress_country').value;
    // console.log(currentAddress_country);

    // const permanentAddress_l1 = myRegForm.querySelector('#permanentAddress_l1').value;
    // console.log(permanentAddress_l1);
    // const permanentAddress_city = myRegForm.querySelector('#permanentAddress_city').value;
    // console.log(permanentAddress_city);
    // const permanentAddress_state = myRegForm.querySelector('#permanentAddress_state').value;
    // console.log(permanentAddress_state);
    // const permanentAddress_zipcode = myRegForm.querySelector('#permanentAddress_zipcode').value;
    // console.log(permanentAddress_zipcode);
    // const permanentAddress_country = myRegForm.querySelector('#permanentAddress_country').value;
    // console.log(permanentAddress_country);

    
});