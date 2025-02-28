tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '29px': '35px',  // Custom font size of 29px
      },
      colors: {
        primary: {
          "50": "#87030303",   // Lightest red
          "100": "#f0b3b3",  // Light red
          "200": "#e68f8f",  // Soft red
          "300": "#d66a6a",  // Medium red
          "400": "#c84444",  // Darker red
          "500": "#b31f1f",  // Main maroon red
          "600": "#9f1a1a",  // Dark maroon
          "700": "#8c1616",  // Darker maroon
          "800": "#7a1212",  // Very dark maroon
          "900": "#690e0e",  // Almost black maroon
          "950": "#580b0b",  // Deep maroon, nearly black

          "blue-50": "#eff6ff",   // Light blue
          "blue-100": "#dbeafe",  // Soft blue
          "blue-200": "#bfdbfe",  // Blue-grayish
          "blue-300": "#93c5fd",  // Medium light blue
          "blue-400": "#60a5fa",  // Light blue
          "blue-500": "#3b82f6",  // Regular blue
          "blue-600": "#2563eb",  // Darker blue
          "blue-700": "#1d4ed8",  // Navy blue
          "blue-800": "#1e40af",  // Deep blue
          "blue-900": "#1e3a8a",  // Dark blue
          "blue-950": "#172554"   // Very dark blue
        }
      }
    },
    fontFamily: {
      'body': [
        'Noto Sans', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
      'sans': [
        'Noto Sans', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ]
    }
  }
}
