import React from 'react'

import { Information, Meta } from '../components'

const ImagePreview = ({ image, price, people }) => (
    <div className="image-preview" style={{ 'backgroundImage': 'url(' + image + ')' }}>
        <div className="workspace-overview">
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