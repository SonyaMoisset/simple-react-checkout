import React from 'react'
import pluralize from 'pluralize'

const Information = ({ duration, name, price }) => {
    const time = pluralize('day', duration);

    return (
        <div className="WorkspaceInformation">
            <div className="WorkspaceName">{name}</div>
            <div className="WorkspacePrice">
                <div className="Price">{price} GBP</div>
                <div className="Duration">/ {time}</div>
            </div>
        </div>
    )
}

export default Information