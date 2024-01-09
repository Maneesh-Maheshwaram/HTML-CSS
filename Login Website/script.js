function submitForm() {
    const form = document.getElementById('loginForm');
    const username = form.elements['username'].value;
    const password = form.elements['password'].value;

    // Add your login logic here
    // For simplicity, let's just show a welcome message on successful "login"
    const welcomeMessage = document.querySelector('.card__message');
    welcomeMessage.textContent = `Welcome Back, ${username}!`;
}
