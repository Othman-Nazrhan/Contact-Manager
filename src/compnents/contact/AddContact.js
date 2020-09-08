import React, { Component } from 'react'
import { Consumer } from '../context';
import TextInputGroup from '../helpers/TextInputGroup';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: { }
    }

    // $event = e 
    onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value })

    Submit = (dispatch, size, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

     if(name === ""){
         this.setState({errors :{ name: "this name is requred" }})
         return;
     }
     if(email === ""){
        this.setState({errors :{ email:'this email is requred' }})
        return;
    }
    if(phone === ""){
        this.setState({errors :{ phone:'this phone is requred' }})
        return;
    }

        console.log(this.state)

        dispatch({
            type: "ADD_CONTACT",
            payload: {
                id: size + 1,
                name: name,
                email: email,
                tel: phone
            }

        })
        this.setState(
            {
                name: '',
                email: '',
                phone: '',
                errors:{}
            }
        )

    }
    render() {

        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <form onSubmit={this.Submit.bind(this, dispatch, value.contacts.length)}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title"> Add Conatct</h4>
                                        <div className="card-text">

                                            <TextInputGroup
                                                name="name"
                                                label="name"
                                                value={name}
                                                type="text"
                                                error={errors.name}
                                                onChange={this.onChangeInput}
                                            />

                                            <TextInputGroup
                                                name="email"
                                                label="email"
                                                value={email}
                                                type="email"
                                                error={errors.email}
                                                onChange={this.onChangeInput}
                                            />

                                            <TextInputGroup
                                                name="phone"
                                                label="phone"
                                                value={phone}
                                                type="phone"
                                                error={errors.phone}
                                                onChange={this.onChangeInput}

                                            />
                                            <button className='btn btn-success btn-block'>
                                                Add New Contact</button></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }
                }
            </Consumer>
        )




    }
}
export default AddContact;