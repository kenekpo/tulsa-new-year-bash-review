/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Ken
   Date: 03/26/2025

*/
"use strict";

// Call the showClock() function initially
showClock();

// Run the showClock() function every second
setInterval(showClock, 1000);

// Function to display the countdown clock
function showClock() {
    // Step a: Declare a variable storing the specific date and time
    let thisDay = new Date(2021, 4, 19, 9, 31, 27); // May 19, 2021 at 9:31:27 a.m.

    // Step b: Extract local date and time strings
    let localDate = thisDay.toLocaleDateString();
    let localTime = thisDay.toLocaleTimeString();

    // Step c: Update the inner HTML of the element with ID "currentTime"
    document.getElementById("currentTime").innerHTML = `<span>${localDate}</span><span>${localTime}</span>`;

    // Step d: Call nextJuly4() and store the returned date
    let j4Date = nextJuly4(thisDay);

    // Step e: Set the time to 9 p.m. (21 in 24-hour format)
    j4Date.setHours(21);

    // Step f: Calculate countdown variables
    let now = new Date(); // Current date and time
    let timeDiff = j4Date - now; // Time difference in milliseconds

    let days = Math.floor(timeDiff  (1000 * 60 * 60 * 24)); // Days left
    let hrs = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hours left
    let mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // Minutes left
    let secs = Math.floor((timeDiff % (1000 * 60)) / 1000); // Seconds left

    // Step g: Update the text content of countdown elements
    document.getElementById("dLeft").textContent = days;
    document.getElementById("hLeft").textContent = hrs;
    document.getElementById("mLeft").textContent = mins;
    document.getElementById("sLeft").textContent = secs;
}

// Sample nextJuly4() function provided by Hector
function nextJuly4(currentDate) {
    let year = currentDate.getFullYear();
    let july4 = new Date(year, 6, 4); // July is month 6 (0-indexed)
    if (currentDate > july4) {
        // If the current date is past July 4, get next year's date
        july4.setFullYear(year + 1);
    }
    return july4;
}
function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}