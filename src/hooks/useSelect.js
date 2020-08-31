import React, {useState} from 'react'

const useSelect = (initialState, options) => {

     const [selected, updateSelected] = useState(initialState)
     const newsSelect = () => (
        
        <select
        className='news-select'
        value={selected}
        onChange={e => updateSelected(e.target.value)}
        >
            {options.map(option => (
                <option key={option.value}
                        value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    ) 
    return [selected, newsSelect]      
}

export default useSelect
    

