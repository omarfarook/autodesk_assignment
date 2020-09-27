import React from 'react'
import '../../App.scss';

const Footer = () => {
    return (
        <footer>
            <span>Your account for everything Autodesk<a href="#" onClick={(e) => e.preventDefault()}>Learn more</a></span>
        </footer>
    )
}

export default Footer