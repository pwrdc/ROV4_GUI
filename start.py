import sys
import os


platform = sys.platform
my_path = os.getcwd()

if 'linux' in platform:
    # bash client-front
    os.system(f' gnome-terminal --working-directory "{my_path}/client/" -- bash -c "npm start;exec bash" ')
    # bash main.py
    os.system(f' gnome-terminal --working-directory "{my_path}/server" -- bash -c "source venv/bin/activate; python3 main.py;exec bash" ')
    # bash serverXavier.py
    os.system(f' gnome-terminal --working-directory "{my_path}/server" -- bash -c "source venv/bin/activate; python3 serverXavier.py;exec bash" ')
elif 'win' in platform:
    # windows XDDDDDDDDDD
