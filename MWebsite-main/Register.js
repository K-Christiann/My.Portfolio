document.getElementById('toggleVisibility').addEventListener('click', function() {
  togglePasswordVisibility('passwordInput', 'toggleVisibility', 'bx-show');
});

document.getElementById('toggleVisibility1').addEventListener('click', function() {
  togglePasswordVisibility('passwordInput1', 'toggleVisibility1', 'bx-show');
});

function togglePasswordVisibility(passwordId, toggleId, showClass) {
  var passwordInput = document.getElementById(passwordId);
  var toggleVisibility = document.getElementById(toggleId);

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleVisibility.classList.remove('bx-hide');
      toggleVisibility.classList.add('show');
      toggleVisibility.innerHTML = "<c class='bx bx-show'></c>";
  } else {
      passwordInput.type = 'password';
      toggleVisibility.classList.remove('show');
      toggleVisibility.classList.add('bx-hide');
      toggleVisibility.innerHTML = "";
  }
}
