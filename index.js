const emptyBucket = require('empty-aws-bucket');
const aws = require('aws-sdk');
const s3 = new aws.S3();

const deleteBucket = async (Bucket) => {

  // before we can delete the bucket, we must delete all versions of all objects
  await emptyBucket(Bucket);

  // finally, delete the empty bucket
  await s3.deleteBucket({ Bucket }).promise();
};

module.exports = deleteBucket;
