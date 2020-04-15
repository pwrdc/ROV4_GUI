import sys
import os


def win_comm(comm):
    os.system(f'start cmd /k "{comm}"')

platform = sys.platform
my_path = os.getcwd()

if 'linux' in platform:
    print("Checking node modules (and installing if need be)...")
    print("Starting the frontend dev client...")
    os.system(f'gnome-terminal --working-directory "{my_path}/client/" -- bash -c "npm i; npm start; exec bash"')

elif 'win' in platform:
    print("Checking node modules (and installing if need be)...")
    print("Starting the frontend dev client...")
    win_comm(f'cd client && npm i && npm start')

else:
    print('Your system is not supported by our launcher. You can edit the file manually and add it yourself.')