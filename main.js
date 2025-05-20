function showSection(type) {
  const homepage = document.getElementById('homepage');
  const upcoming = document.getElementById('upcoming-events');
  const past = document.getElementById('past-events');
  const buttons = document.querySelectorAll('nav button');

  // Hide all sections by default
  homepage.style.display = 'none';
  upcoming.style.display = 'none';
  past.style.display = 'none';

  if (type === 'upcoming') {
    upcoming.style.display = 'block';
  } else if (type === 'past') {
    past.style.display = 'block';
  } else {
    // Show homepage if no matching type
    homepage.style.display = 'block';
  }

  // Remove 'active' from all buttons
  buttons.forEach(button => button.classList.remove('active'));

  // Add 'active' to the clicked button
  buttons.forEach(button => {
    if (button.textContent.toLowerCase().includes(type)) {
      button.classList.add('active');
    }
  });
}

// Show homepage on initial load and clear active buttons
document.addEventListener('DOMContentLoaded', () => {
  // Show homepage
  showSection('home');

  // Optionally set "Home" button active, if you add one
});