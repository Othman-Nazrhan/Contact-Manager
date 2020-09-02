import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Contact extends Component {
    

    render() {
        // input whith props
        const{ name} = this.props;

        return (


            <div>
              type :  {name}

            </div> 
        )
    }
}

// la valeur par defut 
Contact.defaultProps = {
    name : "cadre" ,
}

Contact.prototypes = {
    name : PropTypes.string.isRequred
}


export default Contact;