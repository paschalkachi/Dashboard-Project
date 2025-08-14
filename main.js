import dashBoard from './dashboard.js';

console.log(dashBoard);
render(dashBoard);

function render(e) {
  document.querySelector('.main-container').innerHTML = e;
}

// Dashboard Event listeners
document.querySelector('#dashboard-btn').addEventListener('click', () => {
  render(dashBoard);
  closeSidebar(); //closes the sidebar
});


document.querySelector('#dashboard-link').addEventListener('click', () => {
  render(dashBoard);
});



// Set the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle sidebar functionality
const sidebar = document.getElementById('sidebar');
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  toggleSidebar();
});

document.getElementById('sidebar-close-btn').addEventListener('click', () => {
  closeSidebar();
});

function toggleSidebar() {
  sidebar.classList.toggle('translate-x-0');
  sidebar.classList.toggle('-translate-x-80');
}

function closeSidebar() {
  sidebar.classList.add('-translate-x-80');
  sidebar.classList.remove('translate-x-0');
}
