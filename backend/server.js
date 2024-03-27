import app from "./app.js";
import {v2 as cloudinary} from 'cloudinary';
// import cloudinary from "cloudinary";
import cors from "cors";
app.use(cors());

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });


          
cloudinary.config({ 
  cloud_name: 'dh29ogabx', 
  api_key: '868876723886636', 
  api_secret: 'muWWBGLGK70b5vBMrXVYUuZy_nI' 
});


app.listen(4000, () => {
  console.log(`Server running at port 4000`);
});
