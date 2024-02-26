let body = document.querySelector('body');
let toggle = document.querySelector('input');

toggle.addEventListener('change', e => {
        body.classList.toggle('dark');
})

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//         const newColorScheme = event.matches ? "dark" : "light";
//         console.log(newColorScheme);
// });

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggle.checked = true;
}