from . import flask_app
from . import s3_methods
import boto3
import json
from flask import Flask, request


# S3 bucket name and file key (object key)
ff_bucket_name = "feather-and-fern-paper-co"
app = flask_app.app


@app.route("/", defaults={"path": ""})
@app.route("/<string:path>")
@app.route("/<path:path>")
def index(path):
    return app.send_static_file("index.html")


@app.route("/database")
def connected_to_database():
    print("connected to database")
    return "CONNECTED"


@app.route("/database/download-gallery-cover-photo")
def get_gallery_images():
    print("made it into method")
    file_prefix = request.args.get("gallery-name", None)
    gallery_pic_array = []
    pics = s3_methods.list_objects_in_bucket(ff_bucket_name, file_prefix)

    for pic in pics:
        pic_file_name = "." + pic["Key"].removeprefix("demo-pics")
        gallery_pic_array.append(pic_file_name)

        if len(pic_file_name) > 2:
            print("pic file name: " + pic_file_name)
            s3_methods.download_file_from_bucket(
                ff_bucket_name, pic_file_name, pic["Key"]
            )

    return gallery_pic_array
