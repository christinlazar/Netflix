
import React, { useEffect, useState } from 'react'
import { API_KEY,ImageUrl } from '../../Constants/Constants'
import axios from '../../Constants/axios'
import './RowPost.css'
import YouTube from 'react-youtube'



function RowPost(props) {
  const[movies,setMovies] = useState([])
  const[trailer,setTrailer] = useState()
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay:1,
    },
  };
  

  const handleYoutube = (id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US'`).then((resposne)=>{
      if(resposne.data.results.length!=0){
        console.log(resposne.data.results[0])
        setTrailer(resposne.data.results[0])
      }else{
        alert('cant find trailer')
      }
    }).catch((err=>{
      alert(err)
    }))
    }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div  className='rowPosters'>
        {
          movies.map((obj)=>{
            return <img key={obj.id} onClick={()=>handleYoutube(obj.id)} className={props.isSmall?'smallPoster':'poster'} alt="poster" src={`${ImageUrl+obj.backdrop_path}`} ></img>
          })
        }
      </div>
    {
        trailer &&  <YouTube videoId={trailer.key} opts={opts}  />
    }
    </div>
  )
}

export default RowPost
