import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
   darkMode: boolean;
   toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
   const context = useContext(ThemeContext);
   if (context === undefined) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }
   return context;
};

interface ThemeProviderProps {
   children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
   const [darkMode, setDarkMode] = useState(() => {
      // Check if there's a saved theme preference in localStorage
      const savedTheme = localStorage.getItem('darkMode');
      return savedTheme ? JSON.parse(savedTheme) : false;
   });

   useEffect(() => {
      // Save theme preference to localStorage whenever it changes
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
   }, [darkMode]);

   const toggleDarkMode = () => {
      setDarkMode((prev: boolean) => !prev);
   };

   const value = {
      darkMode,
      toggleDarkMode
   };

   return (
      <ThemeContext.Provider value={value}>
         {children}
      </ThemeContext.Provider>
   );
}; 