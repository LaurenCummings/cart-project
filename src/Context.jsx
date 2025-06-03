import { useState, useContext, useReducer, useEffect, createContext } from 'react';
import cartItems from './data';


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [cart, setCart] = useState();

    return (
        <AppContext.Provider>

        </AppContext.Provider>
    )
}