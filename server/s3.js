require('dotenv').config()
const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')
const { get } = require('./routes/Places')

// 
// 
// 
// 
const bucketname = process.env.AWS_BUCKET_NAME 
const region = process.env.AWS_BUCKET_REGION  
const accesKeyId = process.env.AWS_ACCESS_KEY  
const secretAccessKey  = process.env.AWS_SECRTE_ACCESS_KEY 


const s3 = new S3({
    region: region, 
    accessKeyId: accesKeyId,
    secretAccessKey: secretAccessKey,
})

//uploads a file to s3
function uploadFile(file){
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketname,
        Body: fileStream,
        Key: file.filename
    }

    return s3.upload(uploadParams).promise()

}
exports.uploadFile = uploadFile


//downloads a file from s3

function getFileStream(fileKey){
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketname,

    }
    return s3.getObject(downloadParams).createReadStream()

}
exports.getFileStream = getFileStream

