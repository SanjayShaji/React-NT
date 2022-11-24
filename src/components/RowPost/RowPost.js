import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import { apiKey, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {

    const [post, setPost] = useState([]);
    const [urlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data.results)
            setPost(response.data.results)
        }).catch(err => {
            /*alert("network error")*/
        })

    }, [props.url]);
    const opts = {
        height: '390',
        width: '640',

        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const handleMovieClick = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(response => {
            console.log(response.data)
            if (response.data.results.length !== 0) {
                setUrlId(response.data.results[0])
                
            } else {
                console.log("Array empty")
                
            }
        })
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {post.map((obj, index) =>
                    <div>
                        <img onClick={() => {handleMovieClick(obj.id); }} 
                        className={props.isSmall ? 'smallPoster' : "poster"} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                    </div>
                )}

            </div>

            <div className='video'>
                {urlId && <section>
                    <i onClick={() => { setUrlId('') }} style={{ fontSize: '60px' }}>&times;</i>
                    <YouTube videoId={urlId.key} opts={opts} />
                </section>}
            </div>
        </div>
    )
}

export default RowPost
