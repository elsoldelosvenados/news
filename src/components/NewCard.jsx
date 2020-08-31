import React from 'react'

import cutText from '../helpers/text'
import noImage from '../assets/no_image.png'
const NewCard = ({NewObject}) => {
    console.log(NewObject)

    return ( 
        <div className='new'>
            <div className="img-container">
                <img clasName='new-img' src={NewObject.urlToImage === null ? noImage : NewObject.urlToImage} alt=""/>
            </div>
            <h3>{NewObject.title}</h3>
            <p>
                {cutText(NewObject.description, 255)}
            </p>
            <h6 className='time-new'>{NewObject.publishedAt}</h6>
            <div className="final">
                <a href={NewObject.url}>To see more</a>
            </div>
        </div>
     );
}
 
export default NewCard;