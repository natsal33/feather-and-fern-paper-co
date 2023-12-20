from . import s3_methods
import re
import os
import boto3
import json
from flask import Flask, request
from flask_cors import CORS


app = Flask(__name__, static_folder="../build", static_url_path="/")
CORS(app)


# S3 bucket name and file key (object key)
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


@app.route("/database/download-gallery")
def get_gallery_photos():
    if request.args:
        gallery_name = request.args.get("gallery-name", None)
        gallery_photo_array = []
        destination_folder_name = "../src/pics/gallery-page-photos/" + gallery_name

        if not os.path.isdir(destination_folder_name):
            os.mkdir(destination_folder_name)

        photos = s3_methods.list_objects_in_bucket(ff_bucket_name, gallery_name)

        for photo in photos:
            photo_name = photo["Key"].removeprefix(gallery_name)

            if photo_name != "/":
                photo_file_destination = destination_folder_name + photo_name
                gallery_photo_array.append(photo_file_destination)
                s3_methods.download_file_from_bucket(
                    ff_bucket_name, photo_file_destination, photo["Key"]
                )

    return gallery_photo_array


@app.route("/database/download-gallery-thumbnails")
def get_gallery_thumbnails():
    gallery_thumbnail_array = []
    destination_folder_name = "../src/pics/gallery-page-photos/thumbnails"

    if not os.path.isdir(destination_folder_name):
        os.mkdir(destination_folder_name)

    photos = s3_methods.list_objects_in_bucket(ff_bucket_name, "")

    for photo in photos:
        photo_path = photo["Key"]

        if "thumbnail" in photo_path:
            gallery_name = re.search("gallery/(.+?)/thumbnail", photo_path).group(1)
            path_prefix = "gallery/" + gallery_name + "/"
            photo_name = photo_path.removeprefix(path_prefix)

            photo_file_destination = (
                destination_folder_name + "/" + gallery_name + "_" + photo_name
            )
            gallery_thumbnail_array.append(gallery_name + "_" + photo_name)
            s3_methods.download_file_from_bucket(
                ff_bucket_name, photo_file_destination, photo["Key"]
            )

    return gallery_thumbnail_array
