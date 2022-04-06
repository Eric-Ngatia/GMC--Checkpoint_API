import { faReplyAll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router';
import { getSingleProduct } from '../../Redux/actions';

import Article from '../Article';
import './Details.css';

function Details() {
    let article = useSelector((state)=> state.article )
    let id = useParams().id;
    let dispatch = useDispatch();
    
    const [loading, setLoading] = useState();
    useEffect(() => {
        console.log('try')
        fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res=>res.json())
                .then(json=>{
                    dispatch(getSingleProduct(json));
                    setLoading(false)
                })
    }, [dispatch, id])


    const navigate = useNavigate();
    const returnBack = () => {

        navigate('/')
    }


    return (
        <div className='container'>
            {loading === false ? 
                <div>
                    <div className='article__detail'>
                        <div><img width={555} height={538}  src={article.image} alt="" /> </div>
                        <div> 
                            <p>
                                {article.description}
                            </p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faReplyAll} className="back" onClick={returnBack} />
                </div>
                :  <div className="spinner-box"><div className='spinner-border spinner' role='status'><span className='visually-hidden'>Loading...</span></div></div> }
        </div>
    )
}

export default Details;