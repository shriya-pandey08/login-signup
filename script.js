document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('login')) {
            container.classList.remove('active');
        }
        if (event.target.classList.contains('register')) {
            container.classList.add('active');
        }
        if (event.target.closest('.icon')) {
            // Handle social icon click if needed
            event.preventDefault();
            alert(`Social icon clicked`);
        }
        if (event.target.id === 'forgot-password-link') {
            event.preventDefault();
            alert('Forgot Password link clicked');
        }
    });
});
