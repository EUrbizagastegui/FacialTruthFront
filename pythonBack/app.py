from flask import Flask, request, jsonify
from flaskcors import CORS
import cv2
import numpy as np
from feat import Detector

app = Flask(name)
CORS(app, resources={r"/": {"origins": ""}})  # Habilita CORS para todas las rutas

# Initialize the detector
detector = Detector()

@app.route('/detectemotion', methods=['POST'])
@cross_origin(origins="http://localhost:5173")
def detectemotion():
    try:
        # Get the image from the request
        file = request.files['image']
        npimg = np.fromfile(file, np.uint8)
        img = cv2.imdecode(npimg, cv2.IMREADCOLOR)

        # Detect emotions
        faces = detector.detect_faces(img)
        emotions = detector.detect_emotions(img, faces)

        # Prepare the response
        response = []
        for emotion in emotions:
            response.append({
                'anger': emotion.anger,
                'disgust': emotion.disgust,
                'fear': emotion.fear,
                'happiness': emotion.happiness,
                'sadness': emotion.sadness,
                'surprise': emotion.surprise,
                'neutral': emotion.neutral
            })

        return jsonify(response)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name == '__main':
    app.run(debug=True)