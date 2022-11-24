import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { apiKey, imageUrl } from '../../constants/constants'
import './Banner.css'
function Banner() {

    const [movie, setMovie] = useState();
    useEffect(()=>{
        axios.get(`trending/all/day?api_key=${apiKey}`).then((response)=>{
            console.log(response.data.results[0]);
            setMovie(response.data.results[Math.round(Math.random()*20)])
        })
    },[])
  return (
    //  <div style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}} className="banner">
    <div className="banner" style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}}>
    <div className="content">
        {/* <h1>{movie.title}</h1> */}

        <h1 className="title">{movie ? movie.name || movie.title : ""}</h1>            
    <div className="banner_buttons">
        <button className="button">play</button>
        <button className="button">my List</button>
    </div>
    
    <h1 className="description">{movie ? movie.overview : ""} </h1>
    </div>
    
    <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
