import boto3
from s3_methods import *
import json
from flask import Flask, request
from flask_cors import CORS
import requests, os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder="../build", static_url_path="/")
CORS(app)

# S3 bucket name and file key (object key)
ff_bucket_name = "feather-and-fern-paper-co"


@app.route("/", defaults={"path": ""})
@app.route("/<string:path>")
@app.route("/<path:path>")
def index(path):
    return app.send_static_file("index.html")


@app.route("/database/download-gallery-cover-photo")
def get_gallery_images():
    print("made it into method")
    file_prefix = request.args.get("gallery-name", None)
    gallery_pic_array = []
    pics = list_objects_in_bucket(ff_bucket_name, file_prefix)

    for pic in pics:
        pic_file_name = "." + pic["Key"].removeprefix("demo-pics")
        gallery_pic_array.append(pic_file_name)

        if len(pic_file_name) > 2:
            print("pic file name: " + pic_file_name)
            download_file_from_bucket(ff_bucket_name, pic_file_name, pic["Key"])

    return gallery_pic_array


# upload_file_to_bucket(bucket_name, 'local_file.txt', 'path/in/bucket/uploaded_file.txt')
