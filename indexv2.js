document.addEventListener("DOMContentLoaded", function() {
    const createAccountForm = document.getElementById("createAccountForm");
    const guestForm = document.getElementById("guestForm");

    createAccountForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = createAccountForm.username.value;
        localStorage.setItem("username", username);
        window.location.href = "redirection.html";
    });

    guestForm.addEventListener("submit", function(event) {
        event.preventDefault();
        localStorage.setItem("username", "Guest");
        window.location.href = "redirection.html";
    });
});
