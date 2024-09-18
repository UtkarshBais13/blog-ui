import { useEffect, useState } from "react"
import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import Sidebar from "../../sidebar/Sidebar"
import"./home.css"
import axiosInstace from '../../config'
import { useLocation } from "react-router-dom"

function Home() {
  const[posts,setPosts] = useState([]);
  const {search} = useLocation();
  
 useEffect(()=>{
  const fetch = async()=>{
    const res = await axiosInstace.get("api/posts"+search)
    setPosts(res.data)
     console.log(res);
    
    
  }
  fetch()
 },[])
  return (
    <>
    <Header/>
    <div className="home">
      <Posts posts={posts}/>
      <Sidebar/>
        
    </div>
    </>
  )
}

export default Home