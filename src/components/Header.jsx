import React from 'react'

const Header = ({ onChange }) => (
    <header>
        <input 
            onChange={ onChange }
            type="range"
            max="100"
            min="1"
            step="1" />
    </header>
)

export default Header