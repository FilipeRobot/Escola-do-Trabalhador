'use strict';

const switcher = document.querySelector('.btn-theme-change');
document.body.className === 'dark-theme'
	? (switcher.textContent = 'Light')
	: (switcher.textContent = 'Dark');

switcher.addEventListener('click', () => {
    const body = document.body;
    let className = document.body.className;

    if (className === 'light-theme') {
        body.classList.replace('light-theme', 'dark-theme');
        switcher.textContent = 'Light';
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        switcher.textContent = 'Dark';
    }
});
