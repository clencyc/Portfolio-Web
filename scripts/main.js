const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click',   
 (e) => {
    e.preventDefault();
    const sectionId = link.dataset.section;   


    sections.forEach(section => {
      section.classList.remove('active');
    });

    document.getElementById(sectionId).classList.add('active');   

  });
});