from app import app


@app.route("/", defaults={"path": ""})
@app.route("/<string:path>")
@app.route("/<path:path>")
def index(path):
    return app.send_static_file("index.html")


@app.route("/home")
def home():
    return "Hello, World!"


@app.route("/about_me")
def about_me():
    return "About Hanna Chee"


@app.route("/privacy_policy")
def privacy_policy():
    return "Privacy Policy Page"


@app.route("/terms_conditions")
def terms_conditions():
    return "Terms and Conditions Page"


@app.route("/contact")
def contact():
    return "Contact Hanna Chee"


@app.route("/FAQ")
def FAQ():
    return "Frequently Asked Questions"


@app.route("/error_404")
def error_404():
    return "404 Error - Page does not exist."
