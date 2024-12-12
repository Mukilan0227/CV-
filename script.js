document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navbar');
    const navLogo = document.querySelector('.logo');

    // Change navbar style on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = '#1f7a3a';
            navLogo.style.transform = 'rotate(360deg)';
        } else {
            nav.style.background = '#28a745';
            navLogo.style.transform = 'none';
        }
    });
});
