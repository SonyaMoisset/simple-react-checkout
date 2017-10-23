import React from 'react'
import pluralize from 'pluralize'

export const Meta = (props) => {
    const people = pluralize('person', props.people);

    return (
        <div className="workspaceMeta">
            <div className="Description">Entire office for <strong>{props.people} {people}</strong></div>
            <div className="Dates"><strong>Mon, July 22, 2017</strong> to <strong>Fri, Aug 29, 2017</strong></div>
        </div>
    )
}
