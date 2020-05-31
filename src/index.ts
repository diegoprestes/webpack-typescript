import { formData } from './forms';

console.log('Index');
const form = document.querySelector('form')!;

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = formData(form);
  console.log(data);
});
