import React from 'react'
import '../App.css'
//importing loading page
import { XLVILoader } from '../CssLoader/XLVILoader'

const About = () => {
    return (
        <div className="loader">
            <XLVILoader/>
            <p>There is nothing here..</p>
        </div>
    )
}

export default About
