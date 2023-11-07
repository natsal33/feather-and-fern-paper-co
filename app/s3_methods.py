# s3_methods.py

import boto3

s3 = boto3.client("s3")


def list_objects_in_bucket(bucket_name, prefix):
    response = s3.list_objects(
        Bucket=bucket_name,
        Prefix=prefix,
    )
    objects = response.get("Contents", [])
    # for obj in objects:
    # print(f'Object Key: {obj["Key"]}, Size: {obj["Size"]} bytes')
    return objects


# Upload a file to the bucket
def upload_file_to_bucket(bucket_name, file_path, object_key):
    s3.upload_file(file_path, bucket_name, object_key)
    # print(f"{file_path} uploaded to {bucket_name} with key {object_key}")


# Download a file from the bucket
def download_file_from_bucket(bucket_name, file_path, object_key):
    s3.download_file(
        bucket_name,
        object_key,
        file_path,
    )
    # print(f"{object_key} downloaded to {file_path}")
