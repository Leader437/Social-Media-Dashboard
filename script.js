let body = document.querySelector('body');
let toggle = document.querySelector('input');

// If preferred color scheme is dark
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.remove('light');
        body.classList.add('dark');
        toggle.checked = true;
        localStorage.setItem("theme", "dark_theme");
}

toggle.addEventListener('click', () => {
        // Theme Button functionality
        if (toggle.checked) {
                body.classList.remove('light');
                body.classList.add('dark');

                /*Store this in the local storage of the device*/
                localStorage.setItem("theme", "dark");
        } else {
                body.classList.add('light');
                body.classList.remove('dark');

                /*Store this in the local storage of the device*/
                localStorage.setItem("theme", "light_theme");
        }
});

//check & apply last time selected theme from localStorage
if (localStorage.getItem("theme") === "light") {
        body.classList.add('light');
        body.classList.remove('dark');
        toggle.removeAttribute('checked');
} else {
        body.classList.remove('light_theme');
        body.classList.add('dark_theme');
        toggle.setAttribute('checked', '');
}