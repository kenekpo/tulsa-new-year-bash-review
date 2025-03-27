/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Ken
   Date: 03/26/2025

*/
"use strict"; // Enforce strict JavaScript mode

// Calculate the target date dynamically (46 days, 11 hours, 28 minutes, and 33 seconds from now)
let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 46); // Add 46 days
targetDate.setHours(targetDate.getHours() + 11); // Add 11 hours
targetDate.setMinutes(targetDate.getMinutes() + 28); // Add 28 minutes
targetDate.setSeconds(targetDate.getSeconds() + 33); // Add 33 seconds

// Call showClock() initially
showClock();

// Run the showClock() function every second
setInterval(showClock, 1000);

// Function to display the countdown clock
function showClock() {
    let now = new Date(); // Get the current date and time
    let timeDiff = targetDate - now; // Calculate the difference in milliseconds
    let thisDay = new Date(2021, 4, 19, 9, 31, 27); // Month is 0-based (4 = May)


    // Step b: Extract local date and time strings
    let localDate = thisDay.toLocaleDateString();
    let localTime = thisDay.toLocaleTimeString();

    // Step c: Update the inner HTML of the element with ID "currentTime"
    document.getElementById("currentTime").innerHTML = `<span>${localDate}</span> <span>${localTime}</span>`;

    // If countdown is over, stop at 0
    if (timeDiff <= 0) {
        document.getElementById("dLeft").textContent = "0";
        document.getElementById("hLeft").textContent = "0";
        document.getElementById("mLeft").textContent = "0";
        document.getElementById("sLeft").textContent = "0";
        return;
    }

    // Calculate days, hours, minutes, and seconds left
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hrs = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Update the countdown elements
    document.getElementById("dLeft").textContent = days;
    document.getElementById("hLeft").textContent = hrs;
    document.getElementById("mLeft").textContent = mins;
    document.getElementById("sLeft").textContent = secs;
}

function nextJuly4(currentDate) {
    var cYear = currentDate.getFullYear();
    var jDate = new Date("July 4, 2021");
    jDate.setFullYear(cYear);
    if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
    return jDate;
 }
 