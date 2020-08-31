import React from 'react'

import NewCard from './NewCard'
const News = ({news}) => {
    console.log('--------')
    console.log(news)
    return ( 
        <div className="news-container">
            {news.map(newObject => (
                <NewCard NewObject={newObject}/>
            ))}
        </div>
     );
}
 
export default News;