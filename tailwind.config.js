/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2563eb",
                success: "#16a34a",
                danger: "#dc2626",
            },
            boxShadow: {
                card: "0 2px 6px rgba(0,0,0,0.1)",
            },
            borderRadius: {
                "2xl": "1rem",
                lg: "0.5rem",
            },
            spacing: {
                6: "1.5rem",
                4: "1rem",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),

    ],
};
