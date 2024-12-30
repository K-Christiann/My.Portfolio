const numberInputs = document.querySelectorAll('.numberInput');
const validationMessages = document.querySelectorAll('.validationMessage');

function validateInput(input, message) {
  const validInput = /^([0-9]{2}|N\/A)$/i.test(input.value);

  if (!validInput) {
    message.textContent = 'Please enter a two-digit number (0-99) or N/A';
    input.classList.add('invalid');
  } else {
    message.textContent = '';
    input.classList.remove('invalid');
  }
}

numberInputs.forEach((input, index) => {
  input.addEventListener('input', function () {
    validateInput(this, validationMessages[index]);
  });

  input.addEventListener('blur', function () {
    validateInput(this, validationMessages[index]);
  });
});