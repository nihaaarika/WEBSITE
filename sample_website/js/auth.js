document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("auth-form");
    const toggleLink = document.getElementById("toggle-link");
    const toggleText = document.getElementById("toggle-text");
    const formTitle = document.getElementById("form-title");
    const nameInput = document.getElementById("name");
    const submitBtn = document.getElementById("submit-btn");

    let isSignUp = false;

    // Check if user exists
    if (localStorage.getItem("user")) {
        isSignUp = false;
        nameInput.classList.add("hidden");
        formTitle.textContent = "Sign In";
        submitBtn.textContent = "Sign In";
        toggleText.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Sign Up</a>`;
    } else {
        isSignUp = true;
        nameInput.classList.remove("hidden");
        formTitle.textContent = "Sign Up";
        submitBtn.textContent = "Sign Up";
        toggleText.innerHTML = `Already have an account? <a href="#" id="toggle-link">Sign In</a>`;
    }

    toggleLink.addEventListener("click", (e) => {
        e.preventDefault();
        isSignUp = !isSignUp;
        if (isSignUp) {
            nameInput.classList.remove("hidden");
            formTitle.textContent = "Sign Up";
            submitBtn.textContent = "Sign Up";
            toggleText.innerHTML = `Already have an account? <a href="#" id="toggle-link">Sign In</a>`;
        } else {
            nameInput.classList.add("hidden");
            formTitle.textContent = "Sign In";
            submitBtn.textContent = "Sign In";
            toggleText.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Sign Up</a>`;
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const name = document.getElementById("name").value;

        if (isSignUp) {
            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            alert("Account created! Please sign in.");
            isSignUp = false;
            nameInput.classList.add("hidden");
            formTitle.textContent = "Sign In";
            submitBtn.textContent = "Sign In";
        } else {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                alert("Login successful!");
                window.location.href = "index.html"; // Redirect to homepage
            } else {
                alert("Invalid email or password");
            }
        }
    });
});
