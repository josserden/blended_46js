import 'material-icons/iconfont/material-icons.css';
import './sass/main.scss';

import { getRefs } from './js/getRefs';
const { formSearch, modalForm, contactsList } = getRefs();

// Event listeners
modalForm.addEventListener('submit', e => {
  e.preventDefault();
  const { name, phone, email } = e.target;

  const userName = name.value.trim();
  const userPhone = phone.value.trim();
  const userEmail = email.value.trim();

  if (!userName || !userPhone || !userEmail) {
    alert('Please fill in all fields');
    return;
  }

  const contact = {
    name: userName,
    phone: userPhone,
    email: userEmail,
  };

  console.log(contact);

  modalForm.reset();
});
