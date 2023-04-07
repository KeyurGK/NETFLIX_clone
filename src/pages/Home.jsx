import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row title='Popular' fetchURL={requests.requestPopular}/>
      <Row title='Upcoming' fetchURL={requests.requestUpcoming}/>
      <Row title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row title='Horror' fetchURL={requests.requestHorror}/>
      <Row title='Trending' fetchURL={requests.requestTrending}/>
    </div>
  )
}

export default Home