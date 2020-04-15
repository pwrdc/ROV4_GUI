import sys
import os


platform = sys.platform

if 'linux' in platform:
    os.system(f'python3 start_client.py')
    os.system(f'python3 start_server.py')

elif 'win' in platform:
    os.system(f'py start_client.py')
    os.system(f'py start_server.py')

else:
    print('Your system is not supported by our launcher. You can edit the file manually and add it yourself.')
