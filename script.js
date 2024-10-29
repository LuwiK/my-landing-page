// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values of the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple validation
    if (name === '' || email === '') {
        alert('Please fill in all fields.');
    } else {
        alert(`Thank you for contacting me, ${name}!`);
        // Optionally, you can reset the form
        form.reset();
    }
});