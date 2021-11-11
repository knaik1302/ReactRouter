import React from 'react'
import '../App.css'
//importing loading page
import { Circle } from '../CssLoader/Circle'

function Contact() {
    return (
        <div className="loader">
            <div className="anime"><Circle/></div>
            <p>There is nothing here..</p>
        </div>
    )
}

export default Contact
