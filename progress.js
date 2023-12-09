document.addEventListener('DOMContentLoaded', function() {
    const scrollProgressBar = document.getElementById('scroll-progress-bar');

    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = scrollTop / scrollHeight * 100;

        scrollProgressBar.style.width = scrollPercent + '%';
    });
});