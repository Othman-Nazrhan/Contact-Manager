import React, { Component } from 'react'
import { Consumer } from '../context';
import TextInputGroup from '../helpers/TextInputGroup';
import Axios from 'axios'

class AddContact extends Component {


    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        try {
            const res = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            this.setState({

                name: res.data.name,
                email: res.data.email,
                phone: res.data.phone

            })
        }

        catch (e) {
            console.log(e)
        }
    }

    // $event = e 
    onChangeInput = (e) => this.setState({ [e.target.name]: e.target.value })

    Submit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        if (name === "") {
            this.setState({ errors: { name: "this name is requred" } })
            return;
        }
        if (email === "") {
            this.setState({ errors: { email: 'this email is requred' } })
            return;
        }
        if (phone === "") {
            this.setState({ errors: { phone: 'this phone is requred' } })
            return;
        }

        // POST REQUEST WITH API
        const upContact = {
            name,
            email,
            phone
        }
         
        const id =this.props.match.params.id;

        Axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,upContact)
            .then(res => (dispatch({
                type: "UPDATE_CONTACT",
                payload: res.data

            })))
            .catch(err => (console.error('error')))

        this.setState(
            {
                name: '',
                email: '',
                phone: '',
                errors: {}
            }
        )

        // reduction link 
        this.props.history.push('/');

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
                                        <h4 className="card-title"> Edit Conatct</h4>
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
                                            <button className='btn btn-danger btn-block'>
                                                Edit Contact</button></div>
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