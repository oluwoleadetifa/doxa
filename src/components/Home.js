import React from 'react'
import '../styles/style.css';
import Navbar from './layout/Navbar';

const Home = () => {
  return (
    <div className='home-body'>
      <Navbar />
      <div className='home-content'>
        <div className='left'>
          <div>Become a coding guru</div>
          <h2>Begin your coding journey</h2>
          <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eum ipsum perferendis modi impedit eveniet ut fugit rem, ipsam voluptas rerum temporibus quisquam provident praesentium, ullam laboriosam nam, aliquid ea?</div>
        </div>
        <div className='right'>
          <img className='image-wrapper' src='../assets/images/sea.jpeg' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Home