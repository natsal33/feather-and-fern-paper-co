import boto3
import json

global AWS_ACCESS_KEY
global AWS_SECRET_KEY
global AWS_REGION_NAME

AWS_ACCESS_KEY = ""
AWS_SECRET_KEY = ""
AWS_REGION_NAME = "us-west-2"


client = boto3.client(
    "s3", aws_access_key_id=AWS_ACCESS_KEY, aws_secret_access_key=AWS_SECRET_KEY
)
s3 = boto3.resource(
    "s3", aws_access_key_id=AWS_ACCESS_KEY, aws_secret_access_key=AWS_SECRET_KEY
)

list_bucket = client.list_buckets()

s3_response = client.get_object(
    Bucket="ben-n-natalie-photos", Key="Natalie__Ben/IMG-1.jpg"
)

print(s3_response)
