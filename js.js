document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const projects = document.querySelectorAll('.project');
      projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
          project.style.transform = 'scale(1.05)';
        });
        project.addEventListener('mouseleave', () => {
          project.style.transform = 'scale(1)';
        });
      });
    });
  </script>
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simple form validation
    if (name && email && message) {
      // Prepare data for sending (you can use Fetch API or Axios for more advanced usage)
      const formData = {
        name: name,
        email: email,
        message: message
      };
  
      console.log('Sending data:', formData);
  
      // Clear the form
      document.getElementById('contactForm').reset();
  
      // Show success message
      alert('Mensaje enviado con éxito.');
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });
  

