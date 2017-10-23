import React from 'react'

import Meta from './Meta'
import Information from './Information'

const ImagePreview = ({ image, price, people }) => (
    <div className="ImagePreview" style={{ 'backgroundImage': 'url(' + image + ')' }}>
        <div className="WorkspaceOverview">
            <Information 
                name="Coworking Space, South Korea"
                price={price}
                duration="1" />
            <Meta
                people={people} />
        </div>
    </div>
)

export default ImagePreview