import { cookies } from 'next/headers'
import {NextApiRequest} from 'next';
import login from '../schema/login.schema';
 import AWS from '../modules/aws.module';

 const s3 = new AWS.S3();
 const options = {
    Bucket:'stream-wap-storage'
 }
 export const fetch = async (req, res) => {
    try {
        const url = new URL(req.url);
        const limit = url.searchParams.get('limit');
        const folder = url.searchParams.get('folder');
        options.MaxKeys = limit ? limit : null;
        options.Prefix = folder ? folder : null;
      const data = await s3.listObjects(options).promise();
      return res.json({
        message: 'success',
        data : data.Contents
      }, { status: 200 });
    } catch (err) {
      return res.json({
        message: 'failed',
        err
      }, { status: 424 });
    }
  };

export const fetchByQuery = async(req,res)=>{
    try{
        const path = req.params.join('/');
        options.Key = path;
       await s3.headObject(options).promise();
       const response = s3.getSignedUrl('getObject',options)
        return res.json({
            message:"Dynamic Get Request",
            response
        });
    }
    catch(err){
        return res.json({
            message:"Not Found"
        },{status:404});
    }

}
export const create = async (req,res)=>{
    return res.json({message:"post request..."});
}



export const update = (req,res)=>{
    return res.json({"message":"put request"});
}

export const trash = async (req,res)=>{
   try {
        const path = req.params.join('/');
        options.Key = path;
        await s3.headObject(options).promise();
        const response = s3.deleteObject(options).promise()
        
        return res.json({
            message:"Delete request",
            url:req.params,
            success:true,
            response
        })

   } catch (err) {
    return res.json({
        message:"failed",
    },{status:err.statusCode})
   }
}

//define routees
//cookies
//middleware
//.env
//database