import React, { Component } from 'react'
import Axios from 'axios';
const Context = React.createContext();

// reducer method
const reducer = (state, action) => {

    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {

                contacts: [action.payload, ...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return {

                contacts: state.contacts.map((contact) => contact.id === action.payload.id ? contact = action.payload : contact)
            };
        default:
            return state;
    }
}

export class Provider extends Component {

    //  data
    state = {
        contacts: [
            { id: 1, name: "use 1", email: "one@gmail.com", phone: "0987654321" },
            { id: 2, name: "use 2", email: "ada@gmail.com", phone: "12345678900" },
            { id: 3, name: "use 3", email: "tree@gmail.com", phone: "6789012345" },
        ],
        dispatch: action => this.setState(state => reducer(state, action)),
        snackbar: {
            open: false,
            message: '',
            severity: 'success'
        },
        darkMode: false
    }

    // GET USERS REQUEST WITH API
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => this.setState({
                contacts: res.data
            }))
            .catch(err => console.error(err))
    }
    render() {

        return (
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>

        )
    }
}
export const Consumer = Context.Consumer;