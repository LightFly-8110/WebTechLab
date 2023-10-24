function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation, you can add more complex validation logic as needed
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please fill out all the fields.');
    return;
  }

  // Additional validation for the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Show a confirmation message using the `confirm` function
  const isConfirmed = confirm('Are you sure you want to submit this form?');
  if (isConfirmed) {
    // Form submission logic (send data to the server if required)
    // For this example, we will just display a success message
    displayResponse('success', 'Form submitted successfully!');
  }
}

function displayResponse(status, message) {
  // You can customize this function to display the response message as needed
  alert(message);
}
