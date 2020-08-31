import React from 'react'

import useSelect from '../hooks/useSelect'
const Form = ({setCategory}) => {
    const CATEGORIES = [
        {value:'general', label:'Generlal'}, 
        {value:'business',label:'Bussines'},
        {value:'entertainment',label:'Entertaiment'},
        {value:'health',label:'Health'},
        {value:'science',label:'Science'},
        {value:'sports',label:'Sports'},
        {value:'technology',label:'Technology'}
    ]
    //Using customize hook
    const [category, NewsSelect] = useSelect('science', CATEGORIES)
    const handleForm = e =>{
        e.preventDefault()
        setCategory(e.target.value)
    }
    return ( 
        <div className="form">
            <form onChange={handleForm}>
                <NewsSelect/>
            </form>
        </div>
     );
}
 
export default Form;