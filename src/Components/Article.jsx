import React from 'react';
import './Article.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Article(props) {
    let article = useSelector((state) => state.article)

    return (
        <div className="card card-manage" style={{width: "18rem"}}>
                <div className="card-content-manage">
                    <div className="img-container">
                        <img height={350} width={280} src={props.article.image} className="card-img-top" alt="..."/>
                    </div>
                </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.article.title.substring(0, 20)}</h5>
                        <Link to={`detail/ ${ props.article.id }`} className="btn">More details</Link>
                    </div>
            
            </div>
    )
}

export default Article;