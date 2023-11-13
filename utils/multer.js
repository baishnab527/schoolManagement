import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        if(file.fieldname === "studentPhoto"){
            cb(null , "public/student");
        }else{
            cb(new Error("Invalid fieldname"));
        }
    },
    filename: (req, file, cb)=>{
        cb(null , Date.now() + "_" + Math.floor(Math.random()) + "_" + file.originalname);
    }
});

// create a student multer ;
export const StudentMulter = multer({storage : storage , fileFilter: (req, file, cb) =>{
    if(file.mimetype === "image/jpg" 
    || file.mimetype === "image/png" 
    || file.mimetype === "image/ai" 
    || file.mimetype === "image/webp" 
    || file.mimetype === "image/tiff" 
    || file.mimetype === "image/jpeg" 
    || file.mimetype === "image/svg"){
        cb(null , true);
    }else{
        cb(new Error("Invalid mimetype"));
    }
}, limits: {
    fileSize: (1024*1024)*5,
}}).single("studentPhoto");

