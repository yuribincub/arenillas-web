/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                // ── Familia Lavanda / Espliego ──
                lavanda: {
                    deep: '#5C4E78',
                    DEFAULT: '#8B7BA8',
                    light: '#C4B5D4',
                    pale: '#EDE8F3',
                },
                // ── Familia Tierra Soriana ──
                tierra: {
                    dark: '#6B4E32',
                    DEFAULT: '#9E7B5A',
                    light: '#C9A882',
                    arena: '#E8D5B8',
                },
                // ── Naturales ──
                musgo: '#5A6B4A',
                cielo: '#A8C4D4',
                piedra: '#7A7268',
                // ── Neutros Cálidos ──
                carbon: '#1A1614',
                grafito: '#2D2926',
                humo: '#6B6561',
                grisclaro: '#C8C3BE',
                crema: '#F7F3EF',
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'display': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
                'heading': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1' }],
                'title': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
                'lead': ['clamp(1.1rem, 2vw, 1.35rem)', { lineHeight: '1.7' }],
            },
            spacing: {
                section: 'clamp(4rem, 10vw, 8rem)',
                'section-sm': 'clamp(2.5rem, 6vw, 5rem)',
            },
            backgroundImage: {
                'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'line-grow': {
                    '0%': { scaleX: '0' },
                    '100%': { scaleX: '1' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.8s ease forwards',
                'fade-in': 'fade-in 1.2s ease forwards',
                'line-grow': 'line-grow 0.6s ease forwards',
            },
        },
    },
    plugins: [],
};
