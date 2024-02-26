let body = document.querySelector('body');
let toggle = document.querySelector('input');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark');
        toggle.checked = true;
}

toggle.addEventListener('change', e => {
        body.classList.toggle('dark');
})

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//         const newColorScheme = event.matches ? "dark" : "light";
//         console.log(newColorScheme);
// });