import React from 'react'
import './LeftBar.css'
const LeftBar = () => {
  return (
    
<div className="leftbar">
  <div className="menu">
    <div className="user">
    <img className='img' src='https://tse2.mm.bing.net/th?id=OIP.v4XMtWippCWuYeP4bDap9gHaNK&pid=Api&P=0' alt="sanvi" />
  <span className='name'>Sanvi Kharat</span>
    </div>
    <div className="item">
      <img className='img' src="https://cdn-icons-png.flaticon.com/128/880/880441.png" alt="" />
      <span>Friends</span>
    </div>
    <div className="item">
      <img className='img' src="https://cdn-icons-png.flaticon.com/128/7829/7829198.png" alt="" />
      <span>Groups</span>
    </div> <div className="item">
      <img className='img' src="https://cdn-icons-png.flaticon.com/128/4764/4764718.png" alt="" />
      <span>Marketplace</span>
    </div> <div className="item">
      <img className='img' src="https://img.icons8.com/color/1x/time-span.png" alt="" />
      <span>Watch</span>
    </div> <div className="item">
      <img className='img' src="https://cdn-icons-png.flaticon.com/512/3997/3997691.png" alt="" />
      <span>Memories</span>
    </div> 
     <hr />
     <div className="menu">
      <span style={{fontWeight:"bold"}}>Your Shortcuts</span>
      <div className="item">
      <img className='img' src="https://cdn-icons-png.flaticon.com/128/7829/7829198.png" alt="" />
      <span>Events</span>
    </div> <div className="item">
      <img className='img' src="https://cdn-icons-png.flaticon.com/128/4764/4764718.png" alt="" />
      <span>Gaming</span>
    </div> <div className="item">
      <img className='img' src="https://img.icons8.com/color/1x/time-span.png" alt="" />
      <span>Gallary</span>
    </div> <div className="item">
      <img className='img' src="https://cdn-icons-png.flaticon.com/512/3997/3997691.png" alt="" />
      <span>Videos</span>
    </div> 
     </div>
  </div>
</div>
    )
}

export default LeftBar