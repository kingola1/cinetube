import React from 'react';

import './movieCard.scss'

import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = props => {
    const item = props.item;

    const link =  '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                
            </div>
            <h4>{item.title || item.name}</h4>
        </Link>
    );
}

export default MovieCard;