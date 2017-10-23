import React from 'react'
import pluralize from 'pluralize'

const Meta = ({ people }) => {
    const numberPeople = pluralize('person', people);

    return (
        <div className="workspace-meta">
            <div className="Description">Entire office for <strong>{people} {numberPeople}</strong></div>
            <div className="Dates"><strong>Mon, July 22, 2017</strong> to <strong>Fri, Aug 29, 2017</strong></div>
        </div>
    )
}

export default Meta