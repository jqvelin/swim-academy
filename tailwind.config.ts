import type { Config } from "tailwindcss";

const HEADER_HEIGHT = "4."

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        animation: {
            "pop-up": "slide-up 0.5s ease-in-out forwards, reveal 0.5s ease-in-out forwards"
        },
        keyframes: {
            "slide-up": {
                "0%": { transform: "translateY(50%)" },
                "100%": { transform: "translateY(0%)" }
            },
            reveal: {
                "0%": { opacity: "0" },
                "100%": { opacity: "1" }
            }
        },
        extend: {
            height: {
                "section-regular": "var(--section-height-regular)",
                "section-mobile": "var(--section-height-mobile)",
            },
            width: {
                "section-regular": "var(--section-width-regular)",
                "section-mobile": "var(--section-width-mobile)"
            },
            colors: {
                "primary": "var(--primary)",
                "secondary": "var(--secondary)",
                "cyan-soft": "var(--cyan-soft)",
                "cyan-dark": "var(--cyan-dark)",
                "cyan-neon": "var(--cyan-neon)",
                blue: "var(--blue)",
                darkblue: "var(--darkblue)"
            },
        }
    },
    plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
