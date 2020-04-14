import sys
import os


platform = sys.platform
my_path = os.getcwd()

if 'linux' in platform:
    # bash client-front
    print("Starting the frontend dev client...")
    os.system(f' gnome-terminal --working-directory "{my_path}/client/" -- bash -c "npm start;exec bash" ')
    # bash main.py
    print("Starting main server...")
    os.system(f' gnome-terminal --working-directory "{my_path}/server" -- bash -c "source venv/bin/activate; python3 main.py;exec bash" ')
    # bash serverXavier.py
    print("Starting Xavier server...")
    os.system(f' gnome-terminal --working-directory "{my_path}/server" -- bash -c "source venv/bin/activate; python3 serverXavier.py;exec bash" ')
elif 'win' in platform:
    # command for activating venv
    START_VENV_COMM = f'cd server\venv\Scripts && activate.bat && cd ../../'
    # install packages and start frontend client
    print("Starting the frontend dev client...")
    win_comm(f'cd client && yarn install && yarn start')
    # start main server
    print("Starting main server...")
    win_comm(f'{START_VENV_COMM} && py main.py')
    # start serverXavier server
    print("Starting Xavier server...")
    win_comm(f'{START_VENV_COMM} && py serverXavier.py')

else:
    print('Your system is not supported by our launcher. You can edit the file manually and add it yourself.')
	
