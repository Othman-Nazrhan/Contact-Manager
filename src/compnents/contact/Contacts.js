import React, { Component } from 'react'
import Contact from './contact'

class Contacts extends Component {

    state = {
        contacts :[
            { id: 1, name: "othman", email: "othman@gmail.com", tel: "0987654321" },
            { id: 2, name: "alaoui", email: "alaoui@gmail.com", tel: "12345678900" },
            { id: 3, name: "simo", email: "simo@gmail.com", tel: "6789012345" },
        ]
    }

    render() {

        const { contacts } = this.state;

        return (
            <div>
                {contacts.map((contact) => (
                    <Contact data={contact}/>
                ))}
            </div>
        )

    }
}

export default Contacts;
