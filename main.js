function showSection(type) {
  const homepage = document.getElementById('homepage');
  const upcoming = document.getElementById('upcoming-events');
  const past = document.getElementById('past-events');
  const buttons = document.querySelectorAll('nav button');
  const backToHomeButton = document.getElementById('back-to-home');

  homepage.style.display = 'none';
  upcoming.style.display = 'none';
  past.style.display = 'none';

  if (type === 'upcoming') {
    upcoming.style.display = 'block';
    backToHomeButton.style.display = 'block'; 
  } else if (type === 'past') {
    past.style.display = 'block';
    backToHomeButton.style.display = 'block'; 
  } else {
    homepage.style.display = 'block';
    backToHomeButton.style.display = 'none'; 
  }

  buttons.forEach(button => button.classList.remove('active'));

  buttons.forEach(button => {
    if (button.textContent.toLowerCase().includes(type)) {
      button.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
});