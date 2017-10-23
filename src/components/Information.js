import React from 'react'
import pluralize from 'pluralize'

const Information = ({ duration, name, price }) => {
    const time = pluralize('day', duration);

    return (
        <div className="workspace-information">
            <div className="workspace-name">{name}</div>
            <div className="workspace-price">
                <div className="price">{price} GBP</div>
                <div className="duration">/ {time}</div>
            </div>
        </div>
    )
}

export default Information