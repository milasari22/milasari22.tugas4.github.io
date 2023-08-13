const wrapperlogin = document.querySelector('.wrapperlogin');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click' , ()=> {
    wrapperlogin.classList.add('active');
});

loginLink.addEventListener('click' , ()=> {
    wrapperlogin.classList.remove('active');
});

