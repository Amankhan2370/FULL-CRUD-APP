document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');

    // Fetch users from MockAPI
    fetch('https://67403079d0b59228b7eefbab.mockapi.io/users')
        .then(response => response.json())
        .then(users => {
            userList.innerHTML = ''; // Clear any existing content
            users.forEach(user => {
                // Create a user card for each user
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');
                userCard.innerHTML = `
                    <p>${user.name}</p>
                    <div class="user-card-buttons">
                        <a href="detail.html?id=${user.id}">Details</a>
                        <a href="edit.html?id=${user.id}">Edit</a>
                        <button onclick="deleteUser(${user.id})">Delete</button>
                    </div>
                `;
                userList.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});

// Function to delete a user
function deleteUser(id) {
    if (confirm("Are you sure you want to delete this user?")) {
        fetch(`https://67403079d0b59228b7eefbab.mockapi.io/users/${id}`, {
            method: 'DELETE',
        })
            .then(() => location.reload()) // Refresh the page
            .catch(error => console.error('Error deleting user:', error));
    }
}
