from flask import Flask, render_template, request, redirect, url_for, send_from_directory, flash, jsonify
import os

app = Flask(__name__)
app.secret_key = '11ggr5335797345'
VIDEO_FOLDER = 'videos'
app.config['VIDEO_FOLDER'] = VIDEO_FOLDER

# Ensure the video folder exists
if not os.path.exists(VIDEO_FOLDER):
    os.makedirs(VIDEO_FOLDER)

@app.route('/')
def index():
    videos = os.listdir(app.config['VIDEO_FOLDER'])
    return render_template('index.html', videos=videos)

@app.route('/video/<filename>')
def video(filename):
    return send_from_directory(app.config['VIDEO_FOLDER'], filename)

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        if 'video' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['video']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file:
            filename = file.filename
            file.save(os.path.join(app.config['VIDEO_FOLDER'], filename))
            return redirect(url_for('index'))
    return render_template('upload.html')

if __name__ == '__main__':
    app.run(debug=True)
