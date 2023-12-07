import AWS from 'aws-sdk';
const media = new AWS.MediaConvert({
    region : 'ap-south-1',
    apiVersion:"2017-08-29",
    endpoint:'https://htunurlzb.mediaconvert.ap-south-1.amazonaws.com',
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY
});

import VideoProcessing from '../modules/video-processing.module';

export const fetch = async(req,res)=>{
    try {

        const params = {
            MaxResults:1
        }
        const jobs = await media.listJobs(params).promise();
        return res.json({
            message:"success",
            jobs
        },{status:200})
    }

    
    catch(err){
        return res.json({
            message:"failed",
            error:err
        },{status:424})
    }

}

export const create = async(req,res)=>{
   try {
            const {key} = await req.json();
             //console.log(key)
            const params = VideoProcessing(key);
            //params contains the configurtion like which file to convert and destinaton of the converted and  input etc;
            const job = await media.createJob(params).promise();
            //console.log(params)
            return res.json({
                message:"Media-convert POST api called",
                success:true,
                job
            },{status:200});
        }
   catch(err) {
        return res.json({
            message:"failed",
            success:false,
            err
            
        },{status:424});  
   }
}