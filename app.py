from flask import Flask, render_template, request, send_from_directory, url_for
import os
app = Flask(__name__)

# Your local static file paths (don't put absolute mnt/data paths)
PROFILE_IMG = "media/profile.jpg"                  # Put inside static/media
RESUME_FILE = "farsan_resume.pdf"                  # Your resume name

@app.route("/")
def index():
    resume_path = url_for('static', filename=f"media/{RESUME_FILE}")
    profile_img = url_for('static', filename=PROFILE_IMG)
    return render_template("index.html", profile_img=profile_img, resume_path=resume_path)

@app.route("/contact", methods=["POST"])
def contact():
    resume_path = url_for('static', filename=f"media/{RESUME_FILE}")
    profile_img = url_for('static', filename=PROFILE_IMG)

    # just simulating message sent
    return render_template("index.html", contact_success=True,
                           profile_img=profile_img, resume_path=resume_path)

# Optional if you want direct /download route
@app.route("/download/cv")
def download_cv():
    return send_from_directory("static/media", RESUME_FILE)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
