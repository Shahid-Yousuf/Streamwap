import AWS from 'aws-sdk';

 AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY
});

export default AWS;