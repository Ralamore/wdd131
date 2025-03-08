function changeTheme() {
    const currentTheme = document.querySelector('select').value;
    if (currentTheme == 'dark') {
        document.querySelector('body').setAttribute('class', 'dark');
        document.querySelector('img').setAttribute('src', "images\\byui-logo_white.png");
    } else {
        document.querySelector('body').removeAttribute('class');
    }
};

const changer = document.querySelector('select');
changer.addEventListener('change', changeTheme);