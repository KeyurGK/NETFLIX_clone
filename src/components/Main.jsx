import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {
    const[movies,setMovies] = useState([])

    useEffect(()=>{
      axios.get(requests.requestPopular).then((response)=>{
        setMovies(response.data.results)
      })
    },[])

    const movie = movies[Math.floor(Math.random()*movies.length)]

    console.log(movie)
  return (
    <div className='w-full h-[550px] text-white'>
       <div className='w-full h-full'>
       <div className=' absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
          <img className='w-full h-full object-fit' src={`https:/image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
       <div>
        <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
        <button className='border  text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
       </div>
       </div>
    </div>
  )
}

export default Main