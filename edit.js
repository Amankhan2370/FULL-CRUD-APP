document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id'); // Get the user ID from the URL

    // Ensure userId is fetched correctly
    if (!userId) {
        console.error('User ID not found in URL.');
        alert('Error: User ID not found.');
        return;
    }

    // Fetch user data from MockAPI
    fetch(`https://67403079d0b59228b7eefbab.mockapi.io/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching user data: ${response.statusText}`);
            }
            return response.json();
        })
        .then(user => {
            // Pre-fill the form with user data
            document.getElementById('name').value = user.name;
            document.getElementById('email').value = user.email;
            document.getElementById('username').value = user.username;
        })
        .catch(error => {
            console.error(error);
            alert('Failed to fetch user data. Please try again later.');
        });

    // Handle form submission
    document.getElementById('edit-form').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Create an updated user object
        const updatedUser = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            username: document.getElementById('username').value.trim(),
        };

        // Validate the form inputs
        if (!updatedUser.name || !updatedUser.email || !updatedUser.username) {
            alert('All fields are required. Please fill out the form.');
            return;
        }

        // Send a PUT request to update the user
        fetch(`https://67403079d0b59228b7eefbab.mockapi.io/users/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedUser),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error updating user: ${response.statusText}`);
                }
                return response.json();
            })
            .then(() => {
                alert('User updated successfully!');
                window.location.href = 'index.html'; // Redirect to homepage
            })
            .catch(error => {
                console.error(error);
                alert('Failed to update user. Please try again later.');
            });
    });
});
