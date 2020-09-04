import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Contact extends Component {

state ={
    showContactToggle : true
}


showContact(){
    console.log('hello');

    this.setState({
        showContactToggle : !this.state.showContactToggle
    });
}
    
render() {
        // input whith props
        const { name, email, tel } = this.props.data;
        // const myContact = this.props.data;

        return (
            <div className="card">

                <div className="card-body">
                    <h4 className="card-title">
                        {name} <i onClick ={this.showContact.bind(this, name) } className="fa fa-sort-down"></i>
                    </h4>
                    <p className="card-text">
                        {(this.state.showContactToggle)? (
                        <ul className="list-group">
                            <li className="list-group-item">{email}</li>
                            <li className="list-group-item ">{tel}</li>
                        </ul>
                        ):null}
                    </p>
                </div>
            </div>

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
    data: PropTypes.object.isRequred
}


export default Contact;