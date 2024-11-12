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
        .then(data => { console.log(data) })
        .catch(error => {
            errorMessage.textContent = error;
            console.error("Error fetching user data:", error);
        })
}


// function to render each user on the page
function displayUsers(users) {

}

fetchUserData();