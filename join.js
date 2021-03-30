/*  JavaScript 6th Edition
      Chapter 6
      Chapter Individual Case

      Twilight Runners
      Case Project
      Author: Christina Sereday
      Date:   03/08/2021
      Last Modified: 03/08/2021

      Filename: join.js
*/

"use strict"; 
/*Join form validation */

/* Declare validity variable */
var formValidity = true;

/* Define setup function */
function setUpPage () {
    createEventListeners;
}

/* Window onload listening setup for form changes */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}

/* Validate form */
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();//prevent form from submitting
    }
    else {
        evt.returnValue = false; //prevent form from submitting in IE8
    }
    formValidity = false; //reset value for revalidation

    if (formValidity === true) {
        document.getElementById("errorText").innerHTML ="";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    }
    else {
        document.getElementById("errorText").innerHTML = "Please fill all fields.";
        document.getElementById("errorText").style.display = "block";scroll(0,0);
    }

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value)){
    return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
    
}
/* Create validation event listeners */
function createEventListeners() {
    var form = document.getElementsByTagName("form"[0]);
    if (form.addEventListener) {
        form.addEventListener("submit",validateForm,false);
    }
    else if (form.attachEvent) {
        form.attachEvent("onsubmit",validateForm);
    }
}

/* Creating array from user selected additional activities- Ch. 8 Case */

var activitiesSelected;
var newActivitiesStringed;

function addActivities() {
    //var activity = document.getElementById("otherex").value;
    activitiesSelected = Array.from(document.getElementById("otherex").selectedOptions).map(el=>el.value);
}

function createString() {
    newActivitiesStringed = activitiesSelected.toLocaleString();
    clearForm;
}
function clearForm() {
//clear activities/ reset
    var options = activitiesSelected = document.getElementById("otherex");
    options.selectedIndex=0;
}

function createEventListeners() {
    var activity = document.getElementById("otherex");

    if (activity.addEventListener) {
          activity.addEventListener("change", addActivities, false);

    }
    else if (activity.attachEvent) {
          activity.attachEvent("onchange", addActivities);

    }
    
    var button = document.getElementById("submitBtn");
    if (button.addEventListener) {
          button.addEventListener("click", createString, false);
    }
    else if (button.attachEvent) {
          button.attachEvent("onclick", createString);
    }
    activitiesSelected = [];
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}