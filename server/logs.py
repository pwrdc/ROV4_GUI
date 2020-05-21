import os
from SSHConfig import local_path


def send_log(path=local_path):
    """
    Emits log lines to frontend, checks for new lines not yet sent to front
    :param path: path to folder with logs to send
    :return: None
    """
    logs_amount = len(os.listdir(path))
    logs_amount_prev = logs_amount
    log_lines_sent = [0 for i in range(logs_amount)]
    while True:
        logs_amount = len(os.listdir(path))
        if logs_amount > logs_amount_prev:
            for j in range(logs_amount - logs_amount_prev):
                log_lines_sent.append(0)
            logs_amount_prev = logs_amount

        for x in range(logs_amount):
            print(os.listdir(path)[x] + ' -> ' + str(log_lines_sent[x]))

        for i in range(logs_amount):
            filename = path + os.listdir(path)[i]
            with open(filename) as log:
                log_lines = log.readlines()
                # print(f'Before for i={i} log lines sent ={log_lines_sent[i]}')
                for k in range(log_lines_sent[i], len(log_lines)):
                    log_title = os.listdir(path)[i]
                    log_title = log_title[:-4]
                    # print('k ' + str(k))
                    data_log = {log_title, log_lines[k]}
                    print(data_log)
                    log_lines_sent[i] = log_lines_sent[i] + 1