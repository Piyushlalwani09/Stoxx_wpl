function updateDateTime() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    
    const liveDateElements = document.querySelectorAll('.live-date-time'); // Select all elements with class 'live-date-time'

    liveDateElements.forEach(element => {
        element.textContent = `${dateString} ${timeString}`;
    });
}

// Call the function initially to set the initial live date and time
updateDateTime();

// Update live date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);
