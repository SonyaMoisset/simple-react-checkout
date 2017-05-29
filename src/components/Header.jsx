import React from 'react';

const Header = (props) => {
    return (
        <header>
            <input 
                onChange={props.onChange}
                type="range"
                max="100"
                min="1"
                step="1" />
        </header>
    )
}

export default Header