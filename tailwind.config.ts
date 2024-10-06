import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
            },
            colors: {
                palette: {
                    success: 'var(--palette-success)',
                    warning: 'var(--palette-warning)',
                    error: 'var(--palette-error)',
                    info: 'var(--palette-info)',

                    background: 'var(--palette-background)',
                    primary: 'var(--palette-primary)',
                    secondary: 'var(--palette-secondary)',
                    gray: {
                        1: 'var(--palette-gray-1)',
                        2: 'var(--palette-gray-2)',
                        3: 'var(--palette-gray-3)',
                        4: 'var(--palette-gray-4)',
                        5: 'var(--palette-gray-5)',
                    },
                },
            },
        },
    },
    plugins: [],
}

export default config