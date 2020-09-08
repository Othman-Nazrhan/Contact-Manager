import React from 'react'
import classnames from'classnames'

export default function TextInputGroup(props) {
    return (
        <div className="form-group" >
            <label htmlFor={props.name}>{props.label}</label>
            <input name={props.name}
            className={classnames ('form-control' ,{ 'is-invalid ':props.error})}
                type={props.type} 
                value={props.value}
                onChange={props.onChange}
         />
        <div className="invalid-feedback"> {props.error}</div>


        </div>
    )
}
