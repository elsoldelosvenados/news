import React from 'react'

import useSelect from '../hooks/useSelect'
const Form = () => {
    const CATEGORIES = [
        {value:'general', label:'Generlal'}, 
        {value:'bussines',label:'Bussines'},
        {value:'entertaiment',label:'Entertaiment'},
        {value:'health',label:'Health'},
        {value:'science',label:'Science'},
        {value:'sports',label:'Sports'},
        {value:'technology',label:'Technology'}
    ]
    //Using customize hook
    const [category, NewsSelect] = useSelect('science', CATEGORIES)
    
    return ( 
        <div className="form">
            <form >
                <NewsSelect/>
            </form>
        </div>
     );
}
 
export default Form;