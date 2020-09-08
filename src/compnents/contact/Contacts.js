import React, { Component } from 'react'
import Contact from './contact'
import { Consumer } from '../context'

class Contacts extends Component {



    deleteConatct(id) {
        const { contacts } = this.state;
        const newListContacts = contacts.filter((contact) => contact.id !== id)

        this.setState({
            contacts: newListContacts
        })
    }

    render() {

        // const { contacts } = this.state;

        return (
            <Consumer>{value => (
                <div>
                    {value.contacts.map((contact) => (
                        <Contact key={contact.id} data={contact} DeleteContactFromChild={this.deleteConatct.bind(this, contact.id)} />
                    ))}
                </div>)}
            </Consumer>
        )

    }
}

export default Contacts;
