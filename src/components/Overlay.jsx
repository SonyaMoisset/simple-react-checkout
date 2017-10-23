import React from 'react'

const Overlay = ({ image }) => (
    <div
        className="Overlay"
        style={{ 'backgroundImage': 'url(' + image + ')' }}>
        Something
    </div>
)

export default Overlay