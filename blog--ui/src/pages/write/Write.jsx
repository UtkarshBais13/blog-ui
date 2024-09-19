import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../contest/Context";
import { axiosInstance } from "../../config";
import { useNavigate } from "react-router-dom";

export default function Write() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
    //  data.append("name", filename);
       
      data.append("file", file);
      data.append("upload_preset","cloudspace")
      data.append("cloud_name","doyufvmui")
      
      try {
       const res =  await axiosInstance.post("https://api.cloudinary.com/v1_1/doyufvmui/image/upload", data);
       newPost.photo = res.data.url;
      } catch (err) {}
      
    }
   
    
    try {
      const res = await axiosInstance.post("api/posts", newPost);
      navigate(`/post/${res.data._id}`, { replace: true });
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <div className="box"><h3 className="namee">ADD PHOTO </h3><i  className="writeIcon fas fa-plus"></i> </div>
          
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}