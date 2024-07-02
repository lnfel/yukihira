/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                /**
                 * https://uicolors.app/create
                 * Base: #4c3029
                 */
                'saddle': {
                    '50': '#f8f4ee',
                    '100': '#ede4d4',
                    '200': '#dcc9ac',
                    '300': '#c8a77c',
                    '400': '#b78a58',
                    '500': '#a8774a',
                    '600': '#905f3e',
                    '700': '#744834',
                    '800': '#623e31',
                    '900': '#4c3029', // base
                    '950': '#301b18',
                },

            }
        },
    },
    plugins: [],
}

