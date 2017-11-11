# Delete AWS Bucket

For a given AWS S3 bucket, all objects, their versions, and the bucket will be deleted.

## Getting Started

### Run

```
npm install --save delete-aws-bucket
```

### API

The first argument is the bucket name, and the second argument is an optional config object passed to the [AWS SDK](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property).

```
deleteBucket(bucketName, [config]);
```

### Usage

```
const deleteBucket = require('delete-aws-bucket');

deleteBucket('my-bucket');

const awsConfig = {
    accessKeyId: 'AKID',
    secretAccessKey: 'SECRET',
    region: 'us-west-2'
};

deleteBucket('other-bucket', awsConfig);
```

### Debugging

The [`AWSJS_DEBUG`](https://github.com/aws/aws-sdk-js/blob/master/CHANGELOG.md#21420) environment variable enables logging in `aws-sdk`. If the `AWSJS_DEBUG` environment variable is set this module will log debug information also.
