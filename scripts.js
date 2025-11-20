// Back to Top Button
const topBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) topBtn.style.display = 'block';
  else topBtn.style.display = 'none';
});
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Scroll Reveal Animations
const reveals = document.querySelectorAll('.reveal');
function checkReveal() {
  for (let r of reveals) {
    const rect = r.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) r.classList.add('active');
  }
}
window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);
