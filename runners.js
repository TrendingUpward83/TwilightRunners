/*  JavaScript 6th Edition
      Chapter 1
      Chapter Individual Case

      Twilight Runners
      Case Project
      Author: Christina Sereday
      Date:   01/28/2021
      Last Modified: 02/22/2021

      Filename: runners.js
*/

//Form and function to allow users to log their miles to a total pool of all user miles ever run.
document.getElementById("usermiles").addEventListener("change", calcTotalMiles, false);
var begBal = 0;
var lastBal = 10001;

function calcTotalMiles() {
      var newMiles = document.getElementById("usermiles").value;
      var totalMiles = parseInt(newMiles)+ parseInt(lastBal);
      document.getElementById("totalmiles").innerHTML = totalMiles;


        try { 
            if (newMiles > 1000) {
                throw "Miles entered this time must be 1,000 or less.";
            }

        }
        
        catch(newMilesError) {
            window.alert(newMilesError)
            return false;
        }
        finally {
            newMilesError = true;
        }
      lastBal = parseInt(totalMiles);
  }


//possible list to use to check for events: eventList= ["Moraine State Park", "Raccoon State Park", "Schenley Park", "Brady's Run", "Brush Creek Park", "Your choice"];

//Form and function to allow users to choose a specific date and check if there are any events going on; if event, return event title & location (to be developed), else if no event, return msg.
var submitButton =document.getElementById("sButton"); 
      if (submitButton.addEventListener) {
      submitButton.addEventListener("click", isEvent, 
      false);
      }     
      else if (submitButton.attachEvent)  {
          submitButton.attachEvent("onclick", isEvent);
      }
  
  //Huge thank you to Ryan Custer for the below code to get my preliminary event checking function going!   
  function isEvent() {
      var inputDate = document.getElementById("userdate").value;
      var actualDate = new Date(inputDate);
      var incDate = actualDate.getDate()+1;
      actualDate.setDate(incDate);
      //var isEven = parseInt(inputDate);
    

      if (actualDate.getDate()%2==0) {
           document.getElementById("isevent").innerHTML = "Yes, there is!"; 
      } 
      else {
           document.getElementById("isevent").innerHTML = "Sorry, no event slated for "+inputDate+ "!";
      }
}

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }

}
