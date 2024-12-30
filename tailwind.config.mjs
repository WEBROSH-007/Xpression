/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xxs: "360px",
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "2560px",
      },
      width: {
        "2x": "340px",
      },
      height: {
        "2x": "340px",
      },
      keyframes: {
        shooting: {
          "0%": {
            transform: "translateX(0) translateY(0) rotate(-45deg)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translateX(200vw) translateY(100vh) rotate(-45deg)",
            opacity: "0",
          },
        },
        flip: {
          to: {
            transform: "rotate(360deg)", // Full rotation for flip animation
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)", // Rotate 90 degrees
          },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        shooting: "shooting 5s linear infinite",
        flip: "flip 6s infinite steps(2, end)", // Flip animation with 2 steps
        rotate: "rotate 3s linear infinite both", // Continuous 90-degree rotation
        slideUp: "slideUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xxs: "360px",
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "2560px",
      },
      width: {
        "2x": "340px",
      },
      height: {
        "2x": "340px",
      },
      keyframes: {
        shooting: {
          "0%": {
            transform: "translateX(0) translateY(0) rotate(-45deg)",
            opacity: "0.6",
          },
          "100%": {
            transform: "translateX(200vw) translateY(100vh) rotate(-45deg)",
            opacity: "0",
          },
        },
        flip: {
          to: {
            transform: "rotate(360deg)", // Full rotation for flip animation
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)", // Rotate 90 degrees
          },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        shooting: "shooting 5s linear infinite",
        flip: "flip 6s infinite steps(2, end)", // Flip animation with 2 steps
        rotate: "rotate 3s linear infinite both", // Continuous 90-degree rotation
        slideUp: "slideUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
