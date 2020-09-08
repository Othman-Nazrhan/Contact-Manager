import React, { Component } from 'react'


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
        default:
            return state;
    }
}

export class Provider extends Component {

    //  data 
    state = {
        contacts: [
            { id: 1, name: "Othman Na", email: "othman@gmail.com", tel: "0987654321" },
            { id: 2, name: "Alaoui Adibe", email: "alaoui@gmail.com", tel: "12345678900" },
            { id: 3, name: "Simo bahti", email: "simo@gmail.com", tel: "6789012345" },
        ],
        dispatch: action => this.setState(state => reducer(state, action))
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