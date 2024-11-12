// access the userList and errorMessage elements
const userList = document.getElementById("userList")
const errorMessage = document.getElementById("errorMessage")

// function to fetch and display user data
function fetchUserData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json();
        })
        .then(data => { displayUsers(data) })
        .catch(error => {
            errorMessage.textContent = error;
            console.error("Error fetching user data:", error);
        })
}


// function to render each user on the page
function displayUsers(users) {
    users.forEach((user) => {
        // create a div for each user
        const userDiv = document.createElement("div")
        userDiv.classList.add("user");

        // add user details
        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `

        // append the user div to the userList
        userList.appendChild(userDiv)
    })
}

fetchUserData();