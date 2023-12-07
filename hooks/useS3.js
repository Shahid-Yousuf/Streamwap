import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    region: 'ap-south-1',
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey:process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY
});

const Bucket = "stream-wap-storage"

const useS3 = (file,key=file.name)=>{
    console.log(file)
    const upload = ()=>{
        const options = {
            Bucket,
            Body:file,
            Key:key
        }
        return s3.upload(options);
    }
    return upload;
}

export default useS3;