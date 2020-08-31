import React from 'react'

import Logo from './Logo'
import Form from './Form'
const Header = ({setCategory}) => {
    return ( 
        <div className="header-container">
            <Logo/>
            <Form setCategory={setCategory}/>
        </div>
     );
}
 
export default Header;