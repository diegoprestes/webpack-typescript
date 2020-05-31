import { formData } from './forms';

console.log('Hello');
console.log('World 2');
const form = document.querySelector('form')!;

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = formData(form);
  console.log(data);
});
