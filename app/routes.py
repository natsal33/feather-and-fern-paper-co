import re
import boto3
from flask import Flask, request
from flask_cors import CORS
import boto3
import os


app = Flask(__name__, static_folder="../build", static_url_path="/")
CORS(app)


aws_access_key_id = os.environ.get("AWS_ACCESS_KEY_ID")
aws_secret_access_key = os.environ.get("AWS_SECRET_ACCESS_KEY")
aws_region = os.environ.get("AWS_REGION")

s3 = boto3.client(
    "s3",
    aws_access_key_id=aws_access_key_id,
    aws_secret_access_key=aws_secret_access_key,
    region_name=aws_region,
)

# S3 bucket name
ff_bucket_name = "feather-and-fern-paper-co"


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


@app.route("/", defaults={"path": ""})
@app.route("/<string:path>")
@app.route("/<path:path>")
def index(path):
    return app.send_static_file("index.html")


# add try catch statement if arguments are not passed
@app.route("/database/connected")
def connected():
    return "YOU ARE CONNECTED"


# add try catch statement if arguments are not passed
@app.route("/database/fetch-gallery")
def get_gallery_photos():
    if request.args:
        gallery_name = request.args.get("album-name", None)
        gallery_photo_array = []
        photos = list_objects(ff_bucket_name, "gallery/" + gallery_name)

        for photo in photos:
            photo_name = photo["Key"].removeprefix("gallery/" + gallery_name + "/")
            if photo_name != "":
                photo_S3_url = f"https://feather-and-fern-paper-co.s3.us-west-2.amazonaws.com/gallery/{gallery_name}/{photo_name}"
                photo_dict = {"name": photo_name, "url": photo_S3_url}
                gallery_photo_array.append(photo_dict)

    return gallery_photo_array


@app.route("/database/fetch-gallery-thumbnails")
def get_gallery_thumbnails():
    gallery_thumbnail_array = []

    photos = list_objects(ff_bucket_name, "")

    for photo in photos:
        photo_path = photo["Key"]

        if "thumbnail" in photo_path:
            gallery_name = re.search("gallery/(.+?)/thumbnail", photo_path).group(1)
            path_prefix = "gallery/" + gallery_name + "/"
            photo_name = photo_path.removeprefix(path_prefix)
            thumbnail_s3_url = f"https://feather-and-fern-paper-co.s3.us-west-2.amazonaws.com/gallery/{gallery_name}/{photo_name}"
            thumbnail_dict = {"name": gallery_name, "url": thumbnail_s3_url}

            gallery_thumbnail_array.append(thumbnail_dict)

    return gallery_thumbnail_array
