import { createContext, useContext, useState } from "react";

export const DropdownContext = createContext({
    showDropdown: false,
    setShowDropdown: () => {}
});

export const DropdownProvider = ({children}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const value = {showDropdown, setShowDropdown}
    
    return <DropdownContext.Provider value={value} >{children}</DropdownContext.Provider>
    
};

export const useDropdown = () => useContext(DropdownContext);