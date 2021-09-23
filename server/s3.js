require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')

const bucketname =  process.env.AWS_BUCKET_NAME 
const bucket_region = process.env.AWS_BUCKET_REGION  
const access_key = process.env.AWS_ACCESS_KEY  
const secret_key = process.env.AWS_SECRTE_ACCESS_KEY 

const s3 = new S3({
    bucket_region, 
    access_key,
    secret_key,
})

//uploads a file to s3
export function uploadFile(file){
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketname,
        Body: fileStream,
        key: file.filename
    }

    return s3.upload(uploadParams).promise()

}
exports.uploadFile = uploadFile


//downloads a file from s3