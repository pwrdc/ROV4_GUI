import sys
import os


def win_comm(comm):
    os.system(f'start cmd /k "{comm}"')

platform = sys.platform
my_path = os.getcwd()

if 'linux' in platform:
    START_VENV_COMM = f'gnome-terminal --working-directory "{my_path}/server" -- bash -c "source venv/bin/activate;'
    
    print("Checking venv packages (and installing if need be)...")
    os.system(f'{START_VENV_COMM} pip install -r requirements.txt; exec bash"')
    
    print("Starting main server...")
    os.system(f'{START_VENV_COMM} python3 main.py; exec bash"')
    
    print("Starting Xavier server...")
    os.system(f'{START_VENV_COMM} python3 serverXavier.py; exec bash"')

elif 'win' in platform:
    START_VENV_COMM = f'cd server\\venv\\Scripts && activate.bat && cd ../../'

    print("Checking venv packages (and installing if need be)...")
    win_comm(f'{START_VENV_COMM} && pip install -r requirements.txt')

    print("Starting main server...")
    win_comm(f'{START_VENV_COMM} && py main.py')

    print("Starting Xavier server...")
    win_comm(f'{START_VENV_COMM} && py serverXavier.py')

else:
    print('Your system is not supported by our launcher. You can edit the file manually and add it yourself.')