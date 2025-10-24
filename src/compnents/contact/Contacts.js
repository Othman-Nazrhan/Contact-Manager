import React, { Component } from 'react'
import Contact from './contact'
import { Consumer } from '../context'

class Contacts extends Component {

    render() {
        return (
            <Consumer>{value => {
                const { contacts } = value;
                console.log(contacts);
                return (
                    <div>
                        {contacts.map((contact) => (
                            <Contact key={contact.id} data={contact} />
                        ))}
                    </div>
                );
            }}
            </Consumer>
        );
    }
}

export default Contacts;
