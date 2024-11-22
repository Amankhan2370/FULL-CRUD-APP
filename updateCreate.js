document.getElementById('create-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const newUser = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        username: document.getElementById('username').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        website: document.getElementById('website').value.trim(),
    };

    // Validate phone number
    const phoneRegex = /^[1-9][0-9]{9}$/;
    if (!phoneRegex.test(newUser.phone)) {
        alert('Invalid phone number. Enter a 10-digit number not starting with 0.');
        return;
    }

    // Submit data to MockAPI
    fetch('https://67403079d0b59228b7eefbab.mockapi.io/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
    })
        .then(() => window.location.href = 'index.html')
        .catch(error => console.error('Error creating user:', error));
});
