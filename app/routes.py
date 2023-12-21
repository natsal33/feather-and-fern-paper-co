from . import s3_methods
import re
import os
import boto3
import json
from flask import Flask, request
from flask_cors import CORS


app = Flask(__name__, static_folder="../build", static_url_path="/")
CORS(app)


# S3 bucket name
ff_bucket_name = "feather-and-fern-paper-co"


@app.route("/", defaults={"path": ""})
@app.route("/<string:path>")
@app.route("/<path:path>")
def index(path):
    return app.send_static_file("index.html")


@app.route("/database")
def connected_to_database():
    print("connected to database")
    return "CONNECTED"


# add try catch statement if arguments are not passed
@app.route("/database/fetch-gallery")
def get_gallery_photos():
    if request.args:
        gallery_name = request.args.get("gallery-name", None)
        gallery_photo_array = []
        photos = s3_methods.list_objects(ff_bucket_name, "gallery/" + gallery_name)

        for photo in photos:
            photo_name = photo["Key"].removeprefix(gallery_name)

            if photo_name != "/":
                photo_S3_url = f"https://feather-and-fern-paper-co.s3.us-west-2.amazonaws.com/gallery/{gallery_name}/{photo_name}"
                gallery_photo_array.append(photo_S3_url)

    return gallery_photo_array


@app.route("/database/fetch-gallery-thumbnails")
def get_gallery_thumbnails():
    gallery_thumbnail_array = []

    photos = s3_methods.list_objects(ff_bucket_name, "")

    for photo in photos:
        photo_path = photo["Key"]

        if "thumbnail" in photo_path:
            gallery_name = re.search("gallery/(.+?)/thumbnail", photo_path).group(1)
            path_prefix = "gallery/" + gallery_name + "/"
            photo_name = photo_path.removeprefix(path_prefix)
            print("gallery_name: " + gallery_name)
            thumbnail_s3_url = f"https://feather-and-fern-paper-co.s3.us-west-2.amazonaws.com/gallery/{gallery_name}/{photo_name}"

            gallery_thumbnail_array.append(thumbnail_s3_url)

    return gallery_thumbnail_array


@app.route("/database/find-object-url")
def find_object_url():
    bucket_objects_array = []
    gallery_name = request.args.get("gallery_name", None)
    print("gallery_name: " + gallery_name)

    objects_in_bucket = s3_methods.list_objects(ff_bucket_name, "gallery/demo-pics")

    return objects_in_bucket
