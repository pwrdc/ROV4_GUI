from flask import Flask
from flask_socketio import SocketIO, send, emit
from cameraClient import CameraClient
import base64
import cv2


app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app, cors_allowed_origins='*', logger=True, async_handlers=True)


@socketio.on('message')
def send_frame(msg):
    print(msg, ":)")
    while 1:
        frameB64 = base64.b64encode(CameraClient(logs=False).frame)
        frame_data = frameB64.decode('utf-8')
        send(frame_data)



if __name__ == '__main__':
    socketio.run(app, debug=True)
