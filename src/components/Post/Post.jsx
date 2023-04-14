import React, { useState } from 'react'
import './Post.css'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import { Link } from "react-router-dom";
import Comments from '../Comments/Comments';


const Post = ({post}) => {

    const [data,setData] = useState([])

const [commentOpen,setCommentOpen]=useState(true)
// const liked=false
const [like, setLike]=useState(false)
const [count, setCount]=useState(0)
//handle like
const handleLikes=()=>{
if(!like){
    setLike(true)
    setCount(count+1)

}else{
   setLike(false) 
   setCount(count-1)
}
}


  return (
<div className="post">
    <div className="container">
    <div className="user">
        <div className="userinfo">
            <img className='midimg' src={post.profilePic} alt="" />
            <div className="details">
                <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit"}}>
                    <span className='name'>{post.name}</span>
                    <span className='date'> 1 min ago</span>

                </Link>
            </div>
        </div>
        <MoreHorizIcon />
    </div>
    <div className="content">
        <p>{post.desc}</p>
        <img className='postimg' src={post.img} alt="" />
    </div>
    <div className="info">
        <div className="item">
    {like ? <FavoriteOutlinedIcon onClick={handleLikes} /> : <FavoriteBorderOutlinedIcon onClick={handleLikes} />}
    {count}
    </div>
    <div className="item" onClick={()=> setCommentOpen(!commentOpen)}>
<TextsmsOutlinedIcon />
    3 comments
    </div> 

    <div className="item">
<ShareOutlinedIcon/>
  1 share
    </div>
    </div>
   { commentOpen &&<Comments />}
    </div>
</div>
    )
}

export default Post