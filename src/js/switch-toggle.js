export default function (evt) {
    const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
    };
    evt.preventDefault();
    const bodyRef = document.querySelector('body');

    if (evt.target.checked) {
        bodyRef.classList.add(Theme.DARK);
        bodyRef.classList.remove(Theme.LIGHT);

        localStorage.setItem('Theme', Theme.DARK);
         
    } else if (!evt.target.checked) {
        bodyRef.classList.add(Theme.LIGHT);
        bodyRef.classList.remove(Theme.DARK);
        
        localStorage.setItem('Theme', Theme.LIGHT);
    };
};