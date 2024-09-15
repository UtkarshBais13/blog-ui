const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/categories")
const Category = require("./models/Category");
const multer = require("multer")
const path = require("path")


dotenv.config();
app.use(express.json());
app.use("/api/images",express.static(path.join(__dirname,"/images")))
mongoose.connect('mongodb+srv://utkarshbais899:utkarsh899@cluster0.tfqqlxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
   

})
.then(console.log("connected to MONGu"))
.catch((err)=>console.log(err));

app.use(cors(
    {
        origin:["https://blog-ui-five.vercel.app/"],
        methods:["POST","GET"],
        credentials:true

    }
))

app.use(express.json())
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images")
    },filename:(req,file,cb)=>{
        cb(null,req.body.name)
    },
})
const upload = multer({storage:storage})

app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded");
})
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute)

// app.use(express.static(path.join(__dirname, "/blog--ui")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/blog--ui/build', 'index.html'));
// });

app.listen(process.env.PORT || 5000,()=>{
    
    console.log("backend is running");
    
})