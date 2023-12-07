import dbCon from "../dbConfig/database";
import MoviesSchema from "../schema/movies.schema";
dbCon();
export const fetch = (req,res)=>{
    return res.json({
        message:"movies get api called"
    })
}

export const create = async(req,res)=>{
    
    const data = await req.json();
    const response = await new MoviesSchema(data).save();
   
    return res.json({
        message:"movies get api called",
        response
    })
}