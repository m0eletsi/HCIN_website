// DARK MODE

const darkToggle = document.getElementById("darkModeBtn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
}

if(darkToggle){

    darkToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });

}



// LOGIN SYSTEM

const loginForm = document.querySelector(".login-form");

if(loginForm){

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = loginForm.querySelector("input[type='email']").value;

        if(email.includes("@rosebankcollege.co.za")){

            localStorage.setItem("studentEmail", email);

            alert("Login successful!");

            window.location.href = "profile.html";

        } else {

            alert("Use a valid student email!");

        }

    });

}



// PROFILE

const profileName = document.getElementById("profileName");
const saveProfileBtn = document.getElementById("saveProfile");

if(profileName){

    profileName.value = localStorage.getItem("profileName") || "";

}

if(saveProfileBtn){

    saveProfileBtn.addEventListener("click", () => {

        localStorage.setItem("profileName", profileName.value);

        alert("Profile Updated!");

    });

}



// CREATE POSTS

const postBtn = document.getElementById("postBtn");

if(postBtn){

    postBtn.addEventListener("click", () => {

        const postInput = document.getElementById("postInput");

        const postContainer = document.getElementById("posts");

        if(postInput.value.trim() !== ""){

            const post = document.createElement("div");

            post.classList.add("card");

            post.innerHTML = `
                <h3>Student Post</h3>
                <p>${postInput.value}</p>
            `;

            postContainer.prepend(post);

            savePost(postInput.value);

            postInput.value = "";

        }

    });

}



// SAVE POSTS

function savePost(text){

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.push(text);

    localStorage.setItem("posts", JSON.stringify(posts));

}

function loadPosts(){

    const postContainer = document.getElementById("posts");

    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    posts.reverse().forEach(text => {

        const post = document.createElement("div");

        post.classList.add("card");

        post.innerHTML = `
            <h3>Student Post</h3>
            <p>${text}</p>
        `;

        postContainer.appendChild(post);

    });

}

loadPosts();



// SEARCH FILTER

const searchInput = document.getElementById("searchInput");

if(searchInput){

    searchInput.addEventListener("keyup", () => {

        let filter = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".forum-card");

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            card.style.display = text.includes(filter)
                ? "block"
                : "none";

        });

    });

}



// NOTIFICATIONS

const notifyBtn = document.getElementById("notifyBtn");

if(notifyBtn){

    notifyBtn.addEventListener("click", () => {

        alert("You have 3 new notifications!");

    });

}