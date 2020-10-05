import React, { useEffect, useState } from 'react'
import './Results.css'
import VideoCard from './VideoCard'
import axios from './axios'
import FlipMove from 'react-flip-move';
const Resutls = (props) => {
    const [movies,setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const request = await axios.get(props?.selectedOption);
            console.log(request);
            setMovies(request.data.results);
        }
        fetchData();
    },[props.selectedOption]);

    return (
        <div className="results">
            <FlipMove>
                {movies?.map((movie)=>(
                    <VideoCard key={movie.title} movie={movie}/>
                ))}
            </FlipMove>
        </div>
    )
}

export default Resutls
