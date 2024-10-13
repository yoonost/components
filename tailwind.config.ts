import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {},
        extend: {
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
            },
            colors: {
                palette: {
                    background: {
                        primary: 'var(--palette-background-primary)',
                        secondary: 'var(--palette-background-secondary)',
                    },
                    primary: 'var(--palette-primary)',
                    secondary: 'var(--palette-secondary)',
                    default: {
                        primary: 'var(--palette-default-primary)',
                        secondary: 'var(--palette-default-secondary)',
                        tertiary: 'var(--palette-default-tertiary)',
                    },
                    success: {
                        primary: 'var(--palette-success-primary)',
                        secondary: 'var(--palette-success-secondary)',
                        tertiary: 'var(--palette-success-tertiary)',
                    },
                    warning: {
                        primary: 'var(--palette-warning-primary)',
                        secondary: 'var(--palette-warning-secondary)',
                        tertiary: 'var(--palette-warning-tertiary)',
                    },
                    danger: {
                        primary: 'var(--palette-danger-primary)',
                        secondary: 'var(--palette-danger-secondary)',
                        tertiary: 'var(--palette-danger-tertiary)',
                    },
                    info: {
                        primary: 'var(--palette-info-primary)',
                        secondary: 'var(--palette-info-secondary)',
                        tertiary: 'var(--palette-info-tertiary)',
                    },
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