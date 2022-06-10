const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            height: {
                '15': '60px',
            },
            colors: {
                gray: {
                    1: '#efefef',
                    2: '#dbdbdb',
                    4: '#a8a8a8',
                    5: '#8e8e8e',
                    6: '#737373',
                    8: '#363636',
                    9: '#262626',
                },
            }


        },
    },

    plugins: [require('@tailwindcss/forms')],
};
