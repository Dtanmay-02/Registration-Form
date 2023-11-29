function switchForm() {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');

    if (loginForm.classList.contains('active')) {
        loginForm.classList.remove('active');
        registrationForm.classList.add('active');
    } else {
        loginForm.classList.add('active');
        registrationForm.classList.remove('active');
    }
}
