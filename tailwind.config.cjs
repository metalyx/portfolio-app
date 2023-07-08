/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                // primary: '#050816',
                primary: '#010E17',
                // secondary: '#aaa6c3',
                secondary: '#23E0E2',
                // tertiary: '#151030',
                tertiary: '#116D6E',
                'black-100': '#100d25',
                'black-200': '#090325',
                'white-100': '#f3f3f3',
            },
            boxShadow: {
                card: '0px 35px 120px -15px #211e35',
            },
            screens: {
                xs: '450px',
            },
            backgroundImage: {
                'hero-pattern': "url('/src/assets/herobg.jpeg')",
            },
        },
    },
    plugins: [],
};
