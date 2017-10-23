import React from 'react'

const BasicInput = ({ name, label, type, placeholder }) => (
    <div className="basic-input">
        <label htmlFor={name}>{label}</label>
        <input
            id={name}
            type={type}
            placeholder={placeholder} />
    </div>
)

export default BasicInput