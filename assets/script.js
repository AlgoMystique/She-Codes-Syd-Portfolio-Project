let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'),
    navbar.classList.toggle('active');
}

function showPage(pageNumber) {
  const pages = document.querySelectorAll('.project-page');
  pages.forEach(page => {
    page.style.display = 'none';
  });

  const selectedPage = document.getElementById(`page-${pageNumber}`);
  if (selectedPage) {
    selectedPage.style.display = 'block';
  }
}

// Example usage: showPage(2); // This will hide all pages and show only page 2
