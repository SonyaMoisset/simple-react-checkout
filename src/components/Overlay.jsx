import React from 'react'

const Overlay = ({ image }) => (
    <div
        className="overlay"
        style={{ 'backgroundImage': 'url(' + image + ')' }}>
        Something
    </div>
)

export default Overlay