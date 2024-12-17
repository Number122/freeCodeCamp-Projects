document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section.main-section');
    const navLinks = document.querySelectorAll('.nav-link');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveLink();

    window.addEventListener('scroll', changeActiveLink);
});