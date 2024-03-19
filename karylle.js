const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });

  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
    if (idx === 6) { // Check if it's the 7th span
      console.log("Redirecting to index.html...");
      window.location.href = 'karylle.html';
    }
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx + 1));
});
