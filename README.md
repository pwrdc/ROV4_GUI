# ROV4 GUI

A versatile GUI for operating the autonomous ROV4 underwater vehicle.


## Preparations

1. Install nodejs:<br>

    Win (with choco): ```choco install nodejs```<br>
    Other (with nvm): [instructions for different platforms](https://github.com/nvm-sh/nvm)<br>

    Check nodejs version (should be at least 12.16.2):<br>
    ```nodejs --version```

2. **Clone the repository and create a branch for yourself.**

3. Create a venv inside the server (```cd server```) folder:

    Win: ```py -m venv venv```<br>
    Linux: ```python3 -m venv venv```

    Then activate the venv:<br>
    Win: ```venv\Scripts\activate```<br>
    Linux: ```source venv/bin/activate```
    
    And install the required packages inside:<br>
    **(venv)** ```pip install -r requirements.txt```

4. Change ```IP_ADRESS``` in ```definitions.py``` to your dev machine ip adress, example:<br>
```IP_ADRESS = '192.168.1.100'```

5. Exit venv (```deactivate```), get back to root (```cd ../```) and run ```start.py``` which will:<br>

    * check all node_modules and python packages and install them if need be
    * run the node client server, Xavier server and the main server


## Running the app

* You can run both client and server by running:<br>
```start.py```

* Run just the node server client frontend:<br>
```start_client.py```

* Run the Xavier serve and the main server backend:<br>
```start_server.py```