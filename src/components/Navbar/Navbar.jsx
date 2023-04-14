import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {

  return (
    <div className='navbar'>
<div className="left">
  <Link to="/" style={{textDecoration:"none"}}>
  <span className='logo'>socialmedia</span>
  </Link>

< HomeOutlinedIcon/>
< DarkModeOutlinedIcon/>
<GridViewOutlinedIcon />
<div className="search">
< SearchIcon/>
<input type="text" placeholder='Search...' />
</div>
</div>


<div className="right">
< PersonOutlineOutlinedIcon/>
<MailOutlineOutlinedIcon />
< NotificationsNoneOutlinedIcon/>

<div className="user">
  <img className='img' src='https://tse2.mm.bing.net/th?id=OIP.v4XMtWippCWuYeP4bDap9gHaNK&pid=Api&P=0' alt="sanvi" />
  <span className='name'>Sanvi Kharat</span>
</div>

</div>

    </div>
     

  )
}

export default Navbar