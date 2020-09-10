import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';
import Axios from 'axios';
import {Link} from 'react-router-dom';

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

        // DELETE REQUEST WITH API
        Axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
            .then(res => dispatch(
                {
                    type: 'DELETE_CONTACT',
                    payload: id,

                }
            )  )
            .catch(err => console.error('error'))



    }

    render() {
        // input whith props
        const { id, name, email, phone } = this.props.data;
        // const myContact = this.props.data;

        return (
            <Consumer>{value => {
                const { dispatch } = value;

                return (
                    <div className="card" >

                        <div className="card-body">
                            
                            <h4 className="card-title">
                                {name} <i style={{ cursor: 'pointer' }} onClick={this.showContact.bind(this, name)} className="fa fa-sort-down"></i>
                                <i style={{ color: 'red', float: 'right', cursor: 'pointer' }} onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fa fa-times" aria-hidden="true"></i>
                                 
                                 <Link to ={`EditContact/${id}`} > <i className="fa fa-pencil"
                                  style={{color:"orange" ,
                                   float:"right" ,
                                   cursor :"pointer",
                                   marginLeft:"8px"}}></i> </Link>
                            </h4>
                            <div className="card-text">
                                {(this.state.showContactToggle) ? (
                                    <ul className="list-group">
                                        <li className="list-group-item">{email}</li>
                                        <li className="list-group-item ">{phone}</li>
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