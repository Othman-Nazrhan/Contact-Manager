import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from '../context';


class Contact extends Component {

    state = {
        showContactToggle: true
    }


    showContact() {
        console.log('hello');

        //   change state

        this.setState({
            showContactToggle: !this.state.showContactToggle
        });
    }

    onDeleteClick = (id, dispatch) => {
        dispatch(
            {
                type: 'DELETE_CONTACT',
                payload: id,

            }

        )

    }

    render() {
        // input whith props
        const { id, name, email, tel } = this.props.data;
        // const myContact = this.props.data;

        return (
            <Consumer>{value => {
                const { dispatch } = value;

                return (
                    <div className="card">

                        <div className="card-body">
                            <h4 className="card-title">
                                {name} <i style={{ cursor: 'pointer' }} onClick={this.showContact.bind(this, name)} className="fa fa-sort-down"></i>
                                <i style={{ color: 'red', float: 'right', cursor: 'pointer' }} onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fa fa-times" aria-hidden="true"></i>

                            </h4>
                            <div className="card-text">
                                {(this.state.showContactToggle) ? (
                                    <ul className="list-group">
                                        <li className="list-group-item">{email}</li>
                                        <li className="list-group-item ">{tel}</li>
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    </div>)
            }
            }
            </Consumer>
        )

    }
}

// la valeur par defut 
Contact.defaultProps = {
    name: "unkouni",
    email: "unkouni@gmail.com",
    tel: "00000000"
}

// systme de validation
Contact.prototypes = {
    data: PropTypes.object.isRequred,

}


export default Contact;