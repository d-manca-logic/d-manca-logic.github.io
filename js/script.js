document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.photo-links a');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      document.body.classList.add('fade-out');

      setTimeout(() => {
        window.location = href;
      }, 300); // Adjust time to match CSS animation
    });
  });
});