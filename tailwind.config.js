const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            backgroundImage: {
                'root-1': "url('/img/svg_cross.svg')",
                'header-1': "url('/img/frameless_slider.png')",
                'btn-l-hover': "url('/img/btn_l_hover.png')",
                'btn-r-hover': "url('/img/btn_l_hover.png')",
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
        container: {
            center: true,
        },
    },

    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
