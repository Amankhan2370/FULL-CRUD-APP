const API_URL = 'https://67403079d0b59228b7eefbab.mockapi.io/users';

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

async function fetchUserDetails() {
    const response = await fetch(`${API_URL}/${userId}`);
    const user = await response.json();
    const userDetails = document.getElementById('user-details');
    userDetails.innerHTML = `
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Username:</strong> ${user.username}</p>
    `;
}

fetchUserDetails();

