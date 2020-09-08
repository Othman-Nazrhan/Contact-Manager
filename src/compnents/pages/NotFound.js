import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h3>Page Not Found</h3>
            <Link to='/'> Back to Home page</Link>
        </div>
    )
}
