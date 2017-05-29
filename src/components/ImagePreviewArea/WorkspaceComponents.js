import React from 'react'
import pluralize from 'pluralize'

export const Information = (props) => {
    const duration = pluralize('day', props.duration);

    return (
        <div className="WorkspaceInformation">
            <div className="WorkspaceName">{props.name}</div>
            <div className="WorkspacePrice">
                <div className="Price">{props.price} GBP</div>
                <div className="Duration">/ {duration}</div>
            </div>
        </div>
    )
}

export const Meta = (props) => {
    const people = pluralize('person', props.people);

    return (
        <div className="workspaceMeta">
            <div className="Description">Entire office for <strong>{props.people} {people}</strong></div>
            <div className="Dates"><strong>Mon, July 22, 2017</strong> to <strong>Fri, Aug 29, 2017</strong></div>
        </div>
    )
}
