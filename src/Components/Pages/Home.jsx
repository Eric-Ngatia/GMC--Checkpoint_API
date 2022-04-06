import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Article from '../Article';
import NavBar from '../NavBar';
import fecthAllProductData from '../../Redux/actions'


function Home() {

    let dispatch = useDispatch();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
                dispatch(fecthAllProductData(json))
                setLoading(false)
            })
    })

    let articles = useSelector(state => state.articles);


    return (
        <div>
            <NavBar/>
            {loading === false ?
                    <div class="row">
                        {articles.map(article => 
                            <div class="col-md-3" key={article.id} >
                                <Article article={article} />
                            </div>
                            )
                        }
                    </div>
                : <div className="spinner-box"><div className='spinner-border spinner' role='status'><span className='visually-hidden'>Loading...</span></div></div> 
            }
        </div>
    )
}

export default Home;