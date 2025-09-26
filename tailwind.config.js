module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Blue
        primary: {
          DEFAULT: "#1D3557", // deep-blue-900
          50: "#F0F4F8", // deep-blue-50
          100: "#D9E2EC", // deep-blue-100
          200: "#BCCCDC", // deep-blue-200
          300: "#9FB3C8", // deep-blue-300
          400: "#829AB1", // deep-blue-400
          500: "#627D98", // deep-blue-500
          600: "#486581", // deep-blue-600
          700: "#334E68", // deep-blue-700
          800: "#243B53", // deep-blue-800
          900: "#1D3557", // deep-blue-900
        },
        // Secondary Colors - Steel Blue
        secondary: {
          DEFAULT: "#457B9D", // steel-blue-600
          50: "#F0F6FA", // steel-blue-50
          100: "#D6E8F3", // steel-blue-100
          200: "#B8D4E7", // steel-blue-200
          300: "#94BFDB", // steel-blue-300
          400: "#6FA8CE", // steel-blue-400
          500: "#5A94C2", // steel-blue-500
          600: "#457B9D", // steel-blue-600
          700: "#3A6B8A", // steel-blue-700
          800: "#2F5A77", // steel-blue-800
          900: "#244A64", // steel-blue-900
        },
        // Accent Colors - Crimson Red
        accent: {
          DEFAULT: "#E63946", // crimson-600
          50: "#FEF2F2", // crimson-50
          100: "#FEE2E2", // crimson-100
          200: "#FECACA", // crimson-200
          300: "#FCA5A5", // crimson-300
          400: "#F87171", // crimson-400
          500: "#EF4444", // crimson-500
          600: "#E63946", // crimson-600
          700: "#DC2626", // crimson-700
          800: "#B91C1C", // crimson-800
          900: "#991B1B", // crimson-900
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: "#F5F5F5", // gray-100
        // Text Colors
        text: {
          primary: "#2D3748", // gray-800
          secondary: "#718096", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // green-600
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          500: "#48BB78", // green-500
          600: "#38A169", // green-600
        },
        warning: {
          DEFAULT: "#D69E2E", // yellow-600
          50: "#FFFBEB", // yellow-50
          100: "#FEF3C7", // yellow-100
          500: "#F59E0B", // yellow-500
          600: "#D69E2E", // yellow-600
        },
        error: {
          DEFAULT: "#E53E3E", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#E53E3E", // red-600
        },
        // Border Colors
        border: "#E2E8F0", // gray-200
        "border-light": "#F7FAFC", // gray-50
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      fontWeight: {
        'montserrat-semibold': '600',
        'montserrat-bold': '700',
        'montserrat-extrabold': '800',
        'open-sans-normal': '400',
        'open-sans-semibold': '600',
      },
      boxShadow: {
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}