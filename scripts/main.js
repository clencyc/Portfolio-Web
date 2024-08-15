const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSectionId = link.dataset.section;
        const targetSection = document.getElementById(targetSectionId);

        // Remove active class from all sections
        sections.forEach(section => section.classList.remove('active'));

        // Hide all sections and show the selected section
        sections.forEach(section => section.style.display = 'none');
        targetSection.style.display = 'block';

        // Handle active class or styling for the clicked link
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');

        // Smooth scrolling to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Initially display the active section
document.querySelector('section.active').style.display = 'block';