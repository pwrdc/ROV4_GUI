from SSHconfig import host, user, ssh_key_filepath, remote_path, local_path
from os import system
from paramiko import SSHClient, AutoAddPolicy, RSAKey
from paramiko.auth_handler import AuthenticationException, SSHException
from scp import SCPClient


class RemoteClient:

    def __init__(self, host, user, ssh_key_filepath, remote_path, local_path):
        self.host = host
        self.user = user
        self.ssh_key_filepath = ssh_key_filepath
        self.remote_path = remote_path
        self.local_path = local_path
        self.client = None
        self.scp = None
        self.conn = None
        self._upload_ssh_key()

    def _get_ssh_key(self):
        """
        Loading SSH key from existing file
        :return: SSH key
        """
        try:
            self.ssh_key = RSAKey.from_private_key_file(self.ssh_key_filepath)
        except SSHException as err:  # if not a real key
            print(err)
        return self.ssh_key

    def _upload_ssh_key(self):
        """
        Uploading SSH key to remote host
        :return: None
        """
        try:
            system(f'ssh-copy-id -i {self.ssh_key_filepath} {self.user}@{self.host}')
            system(f'ssh-copy-id -i {self.ssh_key_filepath}.pub {self.user}@{self.host}>')
        except FileNotFoundError as err:
            print(err)

    def connect(self):
        """
        Establishing connection with remote host via SSH and SCP
        :return: the client
        """
        try:
            self.client = SSHClient()
            self.client.load_system_host_keys()
            self.client.set_missing_host_key_policy(AutoAddPolicy())
            self.client.connect(self.host, username=self.user, key_filename=self.ssh_key_filepath, look_for_keys=True)
            self.scp = SCPClient(self.client.get_transport())
        except AuthenticationException as err:
            print(err)
        return self.client

    def disconnect(self):
        self.client.close()
        self.scp.close()

    def download_files(self):
        """
        Downloading files from a remote directory and saving to specified local path
        :return: None
        """
        if self.client is None:
            self._connect()
        stdin, stdout, stderr = self.client.exec_command(f'cd {self.remote_path} && ls')
        stdout.recv_exit_status()
        response = stdout.readlines()
        files = [f'{self.remote_path}' + filename for filename in response]
        for file in files:
            self.scp.get(file, self.local_path)