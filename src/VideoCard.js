import React, { forwardRef } from 'react'
import './VideoCard.css'
import TextTruncate from "react-text-truncate";
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';
const  base_url = "https://images.tmdb.org/t/p/original/";
const VideoCard = forwardRef((props,ref) => {
    return (
        <div ref={ref} className="videocard">
            <img src={`${base_url}${props.movie.backdrop_path || props.movie.poster_path}`}/>
            <TextTruncate 
            line={1}
            truncateText="..."
            text={props.movie.overview}
            />
            <h2>{props.movie.title || props.movie.original_name}</h2>
            <p className="videocard__stats">
            {props.movie.media_type && `${props.movie.media_type} •`} 
            {props.movie.release_date || props.movie.first_air_date} •   
              <ThumbUpSharpIcon/>
              {props.movie.vote_count}
            </p>
        </div>
    )
});

export default VideoCard
