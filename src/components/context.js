import React, { useEffect, createContext, useReducer } from 'react'
import Axios from 'axios';

const Context = createContext();

// reducer method
const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact)
            };
        case 'SET_CONTACTS':
            return {
                ...state,
                contacts: action.payload
            };
        default:
            return state;
    }
}

export const Provider = ({ children }) => {
    const initialState = {
        contacts: [
            { id: 1, name: "use 1", email: "one@gmail.com", phone: "0987654321" },
            { id: 2, name: "use 2", email: "ada@gmail.com", phone: "12345678900" },
            { id: 3, name: "use 3", email: "tree@gmail.com", phone: "6789012345" },
        ],
        snackbar: {
            open: false,
            message: '',
            severity: 'success'
        },
        darkMode: false
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    // GET USERS REQUEST WITH API
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                dispatch({ type: 'SET_CONTACTS', payload: res.data });
            })
            .catch(err => {
                // Handle error silently or log appropriately
            })
    }, []);

    const value = {
        ...state,
        dispatch
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export const Consumer = Context.Consumer;
