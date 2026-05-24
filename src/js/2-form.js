const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');

const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (savedData) {
  formData.email = savedData.email?.trim() ?? '';
  formData.message = savedData.message?.trim() ?? '';

  formEl.elements.email.value = formData.email;
  formEl.elements.message.value = formData.message;
}

formEl.addEventListener('input', event => {
  const fieldName = event.target.name;

  if (!(fieldName in formData)) {
    return;
  }

  formData[fieldName] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

formEl.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  formEl.reset();
});
