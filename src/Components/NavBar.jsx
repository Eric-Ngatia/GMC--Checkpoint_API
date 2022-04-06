import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



function NavBar() {


    return (
        <div className='Navigation'>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <h1 class="navbar-brand mb-0" style={{color:"purple"}}> <FontAwesomeIcon icon={faCartShopping} /> <b>RickyShop</b> </h1>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;