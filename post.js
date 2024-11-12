// access the postList and errorMessage elements
const postList = document.getElementById("postList")
const errorMessage = document.getElementById("errorMessage")

// function to fetch and display user data
function postFetch() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return response.json();
    })
    .then(data => { displayPosts(data) })
    .catch(error => {
        errorMessage.textContent = error;
        console.error("Error fetching user data:", error);
    })

}

// function to render each user on the page
function displayPosts(posts) {
    posts.forEach((post) => {
        // create a div for each user
        const postDiv = document.createElement("div")
        postDiv.classList.add("post");

        // destructuure the user object
       // const { name, email, address } = user;

        // add post details
        postDiv.innerHTML = `
            <h3>${id}</h3>
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>body:</strong> ${body}</p>
        `

        // append the user div to the userList
        postList.appendChild(postDiv)
    })
}

postFetch();
