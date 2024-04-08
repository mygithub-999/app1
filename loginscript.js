document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Fetch login form data
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  // Implement login logic here (for demonstration purposes, assuming successful login)
  // Redirect to the rules page after successful login
  redirectToRulesPage();
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Fetch signup form data
  const username = document.getElementById('signup-username').value;
  const phone = document.getElementById('signup-phone').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;
  // Implement signup logic here (for demonstration purposes, assuming successful signup)
  // Redirect to the rules page after successful signup
  redirectToRulesPage();
});

function redirectToRulesPage() {
  // Redirect to the rules page
  window.location.href = 'index.html'; // Assuming your rules page is named rules.html
}
