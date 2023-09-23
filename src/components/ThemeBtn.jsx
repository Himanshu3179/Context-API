import React from 'react'
import { ThemeContext } from "../context/theme";

const ThemeBtn = () => {
    const { toggleTheme } = React.useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Toggle Theme
            </button>
        </div>
    )
}

export default ThemeBtn