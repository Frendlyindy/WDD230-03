let date = localStorage.getItem('last-visit-date');
const visit = new Date(date*1000)
document.getElementById('local').textContent = "You last visited on: " + visit.toUTCString();