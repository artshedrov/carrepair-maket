window.onload = function() {
  const form = document.querySelector('form[name=appointment_form]');
  const inputs = document.querySelectorAll('input[type=text]');

  form.onsubmit = checkForm;

  function checkForm() {
    let count = 0;

    for(let i = 0; i < inputs.length; i++) {
      if(inputs[i].value === '') {
        inputs[i].classList.add('border-red');
        count++;
      } else {
        inputs[i].classList.remove('border-red');
      }
    }
    if(count) {
      return false;
    }
  }
};