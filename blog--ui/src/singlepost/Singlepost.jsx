import { useLocation } from "react-router-dom"
import "./singlepost.css"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Context} from "../contest/Context.jsx"
import { axiosInstance } from "../config.js";

function Singlepost() {
   const PF = ""
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const[post,setPost] = useState({})
  const {user} = useContext(Context)
  const [title , setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [updateMode,setUpdateMode] = useState(false)
  useEffect(()=>{
   const getPost = async ()=>{
    const res = await axiosInstance.get("/api/posts/" + path);
    console.log(res.data);
    
    setPost(res.data)
    setTitle(res.data.title)
    setDesc(res.data.desc)
   }
   getPost()
  },[path])
  const handleDelete =async()=>{
    try {
       await axiosInstance.delete(`/api/posts/${post._id}`,{data:{username:user.username}})
       window.location.replace("/");
    } catch (error) {
      
    }
  }
  const handleUpdate = async()=>{
    try {
      await axiosInstance.put(`/api/posts/${post._id}`,{
        username:user.username,
        title,
        desc,
      })
    //  window.location.reload();
    setUpdateMode(false)
    } catch (error) {
      
    }
  }
  return (
    <div className="singlePost">
        <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
         <img
         className="singlePostImg"
         src={PF+post.photo}
         alt=""
       />)}{
        updateMode?(<input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)}/>):(
          <h1 className="singlePostTitle">
          {title}
          {post.username === user?.username &&(
            <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>
          )}
          
         </h1>
        )
       }
       
      
         
        
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link to={`/?user=${post.username}`} className="link" >
              {post.username}
              </Link>
           
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode?(<textarea className="singlePostDescInput" value={desc} autoFocus onChange={(e) => setDesc(e.target.value)}/>):(
         <p className="singlePostDesc">
          
         {desc}

       </p>
        )}
        {updateMode &&
        <button className="singlePostButton" onClick={handleUpdate}>Update</button>
        }
        
        
      </div>
    </div>
    </div>
  )
}

export default Singlepost