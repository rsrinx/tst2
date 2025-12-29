// HOTFIX: correct active menu item
document.querySelectorAll('.nav-link').forEach(link => {
  link.classList.remove('active');
});
document.querySelector('.nav-home').classList.add('active');
