const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const bodyRef = document.querySelector('body');

function onChangeCheckbox (evt) {
    if (evt.target.checked) {
        bodyRef.classList.add(Theme.DARK);
        bodyRef.classList.remove(Theme.LIGHT);

        localStorage.setItem('Theme', Theme.DARK);
         
    } else if (!evt.target.checked) {
        bodyRef.classList.add(Theme.LIGHT);
        bodyRef.classList.remove(Theme.DARK);
        
        localStorage.setItem('Theme', Theme.LIGHT);
    };
}

export {onChangeCheckbox};