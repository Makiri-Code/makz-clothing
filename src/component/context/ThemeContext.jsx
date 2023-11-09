import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
    theme: 'light', 
    toggleTheme: ()=>{},
}); 

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    };
    const value = {
        theme,
        toggleTheme,
    }
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);