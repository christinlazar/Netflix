
import React, { useEffect, useState } from 'react'
import axios from '../../Constants/axios'
import { API_KEY,ImageUrl } from '../../Constants/Constants'
import './Banner.css'
export default function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
      console.log(response.data.results[9])
      const i = Math.floor(Math.random() *20) +1
      setMovie(response.data.results[i])
    })
  },[])

  return (
    <div
    style={{backgroundImage:`URL(${movie?ImageUrl+movie.backdrop_path:''})`}}
     className='banner'>
      <div className='content'>
            <h1 className='title'>{movie?movie.title||movie.name:''}</h1>
            <div className='bannerButtons'>
                <button className='button'>play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:''}
            </h1>
            <div className='fade'>
                 
            </div>   
      </div>
    </div>
  )
}
