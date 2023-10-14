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


client = boto3.client("s3", region_name="eu-central-1")


list_bucket = client.list_objects(Bucket="feather-and-fern-paper-co")


print(list_bucket)
