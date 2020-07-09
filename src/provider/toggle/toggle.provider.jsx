import React, { createContext, useState } from 'react';

export const ToggleContext = createContext({
    colourScheme: false,
    toggleScheme: () => {}
});

const ToggleProvider = ({ children }) => {
    const [colourScheme, setColourScheme] = useState(false);
    const toggleScheme = () => setColourScheme(!colourScheme);

    return (<ToggleContext.Provider
                value={{ colourScheme, toggleScheme }}>
                {children}
        </ToggleContext.Provider>
    );
};

export default ToggleProvider;