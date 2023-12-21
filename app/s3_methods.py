# s3_methods.py

import boto3

s3 = boto3.client("s3")


# List objects in bucket with specified prefix
def list_objects(bucket_name, prefix):
    response = s3.list_objects(
        Bucket=bucket_name,
        Prefix=prefix,
    )
    objects = response.get("Contents", [])

    return objects


# Upload a file to the bucket
def upload_file_to_bucket(bucket_name, file_path, object_key):
    s3.upload_file(file_path, bucket_name, object_key)


# Download a file from the bucket
def download_file_from_bucket(bucket_name, file_path, object_key):
    s3.download_file(
        bucket_name,
        object_key,
        file_path,
    )
