# packages
import base64
import cv2
from flask import Flask
from flask_socketio import SocketIO, send, emit
from termcolor import colored
# modules
from cameraClient import CameraClient


# initialize the server
server = Flask(__name__)
server.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(server, cors_allowed_origins='*', logger=True, async_handlers=True)


# default events
@socketio.on('connect')
def handle_connection():
    print(colored('\n\tClient connected!\n', 'green'))

@socketio.on('disconnect')
def handle_disconnection():
    print(colored('\n\tClient disconnected!\n', 'red'))


# custom events
@socketio.on('get_frame')
def send_frame(msg):
    print(f'\nreceived:> {msg}\n')
    while 1:
        frameB64 = base64.b64encode(CameraClient(logs=False).frame)
        frame_str = frameB64.decode('utf-8')
        data_frame = {'FRAME': frame_str}

        print(f'\nsending:> {data_frame}\n')
        emit('frame', data_frame)

@socketio.on('get_ahrs')
def send_ahrs_info(msg):
    print(f"received:> {msg}")
    data_ahrs = {'autonomy': 'jeszcze jak', 'speed': '60', 'camera': 'ON'}

    print(f'\nsending:> {data_ahrs}')
    emit('ahrs', data_ahrs)


if __name__ == '__main__':
    socketio.run(server, debug=True)
