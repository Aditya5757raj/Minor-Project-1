let container = document.getElementById('container');

// Toggle between student and faculty sign-in forms
toggle = () => {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
};

// Automatically add 'sign-in' class after a short delay for initial view
setTimeout(() => {
    container.classList.add('sign-in');
}, 200);
