import { fromJSON } from "postcss";
import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const HEADER_HEIGHT = "4.";

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
            "pop-up":
                "slide-up 0.5s ease-in-out forwards, reveal 0.5s ease-in-out forwards",
            reveal: "reveal 0.3s ease-in-out forwards",
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "running-line": "running-line 60s linear infinite",
            "running-line-reverse": "running-line 70s linear infinite reverse",
            "up-down": "up-down 1.2s linear infinite",
            "up-down-100": "up-down 1.2s 100ms linear infinite",
            "up-down-200": "up-down 1.2s 200ms linear infinite",
        },
        keyframes: {
            "slide-up": {
                "0%": { transform: "translateY(50%)" },
                "100%": { transform: "translateY(0%)" }
            },
            reveal: {
                "0%": { opacity: "0" },
                "100%": { opacity: "1" }
            },
            "accordion-down": {
                from: { height: "0" },
                to: { height: "var(--radix-accordion-content-height)" }
            },
            "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: "0" }
            },
            "running-line": {
                from: { right: "-100vw" },
                to: { right: "100%" }
            },
            stroke: {
                "100%": {
                    "stroke-dashoffset": "0"
                }
            },
            scale: {
                "0%": {
                    transform: "none"
                },
                "50%": {
                    transform: "scale3d(1.1, 1.1, 1)"
                },
                "100%": {
                    transform: "none"
                }
            },
            fill: {
                "100%": {
                    "box-shadow": "inset 0px 0px 0px 30px $green"
                }
            },
            "up-down": {
                "0%": { bottom: "-50%" },
                "50%": { bottom: "50%"},
                "100%": { bottom: "-50%" },
            }
        },
        extend: {
            height: {
                "section-regular": "var(--section-height-regular)",
                "section-mobile": "var(--section-height-mobile)"
            },
            width: {
                "section-regular": "var(--section-width-regular)",
                "section-mobile": "var(--section-width-mobile)"
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))"
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))"
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))"
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))"
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                cyan: {
                    DEFAULT: "hsl(196, 100%, 47%)",
                    soft: "hsl(var(--cyan-soft))",
                    dark: "hsl(var(--cyan-dark))",
                    neon: "hsl(var(--cyan-neon))"
                },
                blue: {
                    DEFAULT: "hsl(var(--blue))",
                    dark: "hsl(var(--blue-dark))"
                }
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)"
            },
            fontFamily: {
                sans: ["var(--montserrat)", defaultTheme.fontFamily.montserrat]
            }
        }
    },
    plugins: [require("tailwindcss-animate")]
} satisfies Config;

export default config;
