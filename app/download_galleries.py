import boto3
import json
import requests

global AWS_ACCESS_KEY
global AWS_SECRET_KEY
global AWS_REGION_NAME

response = requests.get(
    "http://169.254.169.254/latest/meta-data/iam/security-credentials/Feather-and-Fern-EC2"
)
credentials = response.json()
AWS_ACCESS_KEY = credentials["AccessKeyId"]
AWS_SECRET_KEY = credentials["SecretAccessKey"]
AWS_REGION_NAME = credentials["Region"]
AWS_SESSION_TOKEN = credentials["Token"]


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
