import React from 'react'
import Contact from './contact'
import { Consumer } from '../context'
import { useSelector } from 'react-redux'

const Contacts = ()  => {

        const conatcts = useSelector(state => state.contacts)
        console.log(conatcts)
   



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

export default Contacts;
