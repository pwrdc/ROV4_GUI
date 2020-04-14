import os

class TASKS:
    GATE = False
    #GATE = True
    GATE_MRN = False
    GATE_MRN = True

    PATH = False
    #PATH = True
    PATH_MRN = False
    #PATH_MRN = True

    BUOYS = False
    BUOYS = True

    BUOYS_MRN = False
    #BUOYS_MRN = True

    #GARLIC_DROP = False
    #GARLIC_DROP = True

    CASKET = False
    CASKET = True

class MAINDEF:
    MODE = 'ROV4'  # 'SIMULATION' or 'ROV4' or 'ROV3'


class CAMERAS:
    # FRONT CAM 1
    FRONT_CAM_1_NR = 0
    IS_FRONT_CAM_1_ACTIVE = True
    FRONT_CAM_1_RESOLUTION_HEIGHT = 720
    FRONT_CAM_1_RESOLUTION_WIDTH = 1280

    # BOTTOM CAM 1
    BOTTOM_CAMERA_NR = 1
    IS_BOTTOM_CAM_ACTIVE = True
    BOTTOM_CAMERA_RESOLUTION_HEIGHT = 720
    BOTTOM_CAMERA_RESOLUTION_WIDTH = 1280

    # BUMBER LEFT CAM 1
    BUMBER_CAMERA_LEFT_NR = 2
    IS_BUMPER_CAM_LEFT_ACTIVE = False
    BUMBER_CAMERA_LEFT_RESOLUTION_HEIGHT = 720
    BUMBER_CAMERA_LEFT_RESOLUTION_WIDTH = 1280

    # BUMBER RIGHT CAM 1
    BUMBER_CAMERA_RIGHT_NR = 3
    IS_BUMPER_CAM_RIGHT_ACTIVE = False
    BUMBER_CAMERA_RIGHT_RESOLUTION_HEIGHT = 720
    BUMBER_CAMERA_RIGHT_RESOLUTION_WIDTH = 1280

    # ARM RIGHT CAM 1
    ARM_CAMERA_NR = 4
    IS_ARM_CAM_ACTIVE = False
    ARM_CAMERA_RESOLUTION_HEIGHT = 720
    ARM_CAMERA_RESOLUTION_WIDTH = 1280

    # XIAOMI
    XIAOMI_CAMERA_SOURCE = 'rtsp://192.168.42.1/live'

    # SIMULATION
    SIM_BOTTOM_CAM_ID = 1
    SIM_FRONT_CAM_1_ID = 0

    # SERVER XAVIER CAMERAS
    FRONT_CAMERA_DEVNAME = 0
    BOTTOM_CAMERA_DEVNAME = "/dev/camera_hdpc_1"

    
# GATE
ANGLE_GATE = -23
TIME_GATE_FRONT_FIRST = 48
TIME_GATE_FRONT_SECOND = 20

# BUOYS
ANGLE_BUOYS = -10 + ANGLE_GATE + 720  # TODO: Change 10 to real delta 
MAX_TIME_BUOYS_FORWARD = 25
TIME_BUOYS_RETURN = 10

# CASCET
TIME_CASCET = 59
ANGLE_CASCET = -6 + ANGLE_BUOYS  # TODO: Change 5 to real delta

ANGLE1_5 = ANGLE_GATE + 720
ANGLE2 = 10  +ANGLE_GATE +720

IP_ADDRESS = <ENTER YOUR LOCAL ADDRESS>
CAMERA_SERVER_PORT = 8000

DARKNET_PORT = 8808

LOG_DIRECOTRY = 'logs/'

