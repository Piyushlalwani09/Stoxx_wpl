// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting normally
    var formData = new FormData(document.forms["form"]); // Get form data
    var jsonObject = {}; // Create empty JSON object
  
    // Convert form data to JSON
    formData.forEach(function(value, key) {
      jsonObject[key] = value;
    });
  
    // Additional validation for email and phone number
    var isValidEmail = emailcheck(jsonObject["email"]);
    var isValidPhoneNumber = numbercheck(jsonObject["phone"]);
  
    // If both email and phone number are valid, proceed to store and display JSON
    if (isValidEmail && isValidPhoneNumber) {
      // Convert JSON object to JSON string
      var jsonString = JSON.stringify(jsonObject);
  
      // Store JSON string in localStorage
      localStorage.setItem("formData", jsonString);
  
      // Display the JSON string
      document.getElementById("response").innerText = jsonString;
    } else {
      // Display error messages or handle validation failure
      console.log("Email or phone number is invalid.");
    }
  }
  
  // Add event listener to the form
  document.forms["form"].addEventListener("submit", handleSubmit);
  
  // Display stored response on page load
  var storedResponse = localStorage.getItem("formData");
  if (storedResponse) {
    document.getElementById("response").innerText = storedResponse;
  }
  